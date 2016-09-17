﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace headers
{
    enum WriteType { get, set }
    class ProcessStruct
    {
        public void convertStruct(string path, List<string> files)
        {
            // Parse the enum OMX_INDEXTYPE to get the references
            CStruct OMX_INDEXTYPE = StructParser.parse(File.ReadAllText(Path.Combine(path, "source", "OMX_Index.h")), "enum").First();

            List<Struct> cstruct = new List<Struct>();

            foreach (string file in files)
            {
                string sourcestring = File.ReadAllText(Path.Combine(path, "source", file + ".h"));
                List<Struct> structs = new StructConverter().convert(StructParser.parse(sourcestring, "struct"));
                cstruct.AddRange(structs);

                Directory.CreateDirectory(Path.Combine(path, @"..\..\..\lib\classes"));
                using (StreamWriter sw = new StreamWriter(Path.GetFullPath(Path.Combine(path, @"..\..\..\lib\classes", file + ".ts"))))
                {
                    writeTs(sw, file, structs);
                }
            }

            using (StreamWriter sw = new StreamWriter(Path.GetFullPath(Path.Combine(path, @"..\..\..\src", "ParametersGet.cpp"))))
            {
                sw.WriteLine(@"#include ""Parameters.h""");
                sw.WriteLine();
                writeGetterSetter(sw, cstruct, WriteType.get);
                sw.WriteLine(@"v8::Local<v8::Object> Parameters::GetParameter(OMX_HANDLETYPE *handle, int port, OMX_INDEXTYPE nParamIndex) {");
                sw.WriteLine(@"  Nan::EscapableHandleScope scope;");
                sw.WriteLine(@"  v8::Local<v8::Object> ret = Nan::New<v8::Object>();");
                sw.WriteLine(@"");
                writeAllCasesCpp(sw, OMX_INDEXTYPE, cstruct, WriteType.get);
                sw.WriteLine(@"  return scope.Escape(ret);");
                sw.WriteLine(@"}");
            }
            using (StreamWriter sw = new StreamWriter(Path.GetFullPath(Path.Combine(path, @"..\..\..\src", "ParametersSet.cpp"))))
            {
                sw.WriteLine(@"#include ""Parameters.h""");
                sw.WriteLine();
                writeGetterSetter(sw, cstruct, WriteType.set);
                sw.WriteLine(@"void Parameters::SetParameter(OMX_HANDLETYPE *handle, int port, OMX_INDEXTYPE nParamIndex, v8::Local<v8::Object> param) {");
                writeAllCasesCpp(sw, OMX_INDEXTYPE, cstruct, WriteType.set);
                sw.WriteLine(@"}");
            }
        }

        private void writeTs(StreamWriter sw, string file, List<Struct> cstructs)
        {
            sw.WriteLine(@"import omx = require('../../index')");
            foreach (Struct cstruct in cstructs)
            {
                var nameTrimmed = cstruct.name;

                sw.WriteLine(@"export class " + nameTrimmed + " {");

                foreach (CField f in cstruct.fields)
                {
                    if (f.comment.Length>0)
                    {
                        sw.WriteLine(@"  /**
   * {0}
   */", f.comment);
                    }
                    
                    if (file != "OMX_Broadcom" && !Char.IsDigit(f.nameNoArray[1]))
                    {
                        //nameNoType = Char.ToLowerInvariant(nameNoArray[1]) + nameNoArray.Substring(2);
                    }
                    
                    sw.WriteLine(@"  {0}{1};", f.nameNoArray, f.typeTS != null ? ": " + f.typeTS : "");
                }
                
                sw.WriteLine(@"  constructor(p?: any) {");
                sw.WriteLine(@"    if (p) {");
                sw.WriteLine(@"      Object.assign(this, p);");
                sw.WriteLine(@"    }");
                sw.WriteLine(@"  }");
                
                sw.WriteLine(@"}");
            }
        }


        private void writeGetterSetter(StreamWriter sw, List<Struct> cstructs, WriteType t)
        {
            foreach (Struct cstruct in cstructs)
            {
                if (t == WriteType.get)
                {
                    writeFunctionGetter(sw, cstruct, false, cstructs);
                }
                else
                {
                    writeFunctionSetter(sw, cstruct, false, cstructs);
                }
            }

            sw.WriteLine();

            foreach (Struct cstruct in cstructs)
            {
                if (t == WriteType.get)
                {
                    writeFunctionGetter(sw, cstruct, true, cstructs);
                    sw.WriteLine();
                }
                else
                {
                    writeFunctionSetter(sw, cstruct, true, cstructs);
                    sw.WriteLine();
                }
            }
        }

        private Dictionary<string, Struct> getAllStructs(CStruct OMX_INDEXTYPE, List<Struct> cstructs)
        {
            Dictionary<string, Struct> res = new Dictionary<string, Struct>();
            foreach (CField field in OMX_INDEXTYPE.fields)
            {
                if (field.reference.Length == 0) continue;

                Struct cstruct = cstructs.Where(a => a.name == field.reference).FirstOrDefault();
                if (cstruct != null)
                {
                    res.Add(field.name, cstruct);
                }
            }
            return res;
        }
        private void writeAllCasesCpp(StreamWriter sw, CStruct OMX_INDEXTYPE, List<Struct> cstructs, WriteType t)
        {
            Dictionary<string, Struct> allStructs = getAllStructs(OMX_INDEXTYPE, cstructs);

            sw.WriteLine(@"  switch (nParamIndex) {");
            foreach (var row in allStructs)
            {
                string index = row.Key;
                Struct cstruct = row.Value;

                if (t == WriteType.get)
                {
                    writeCaseGet(sw, index, cstruct);
                }
                else
                {
                    writeCaseSet(sw, index, cstruct);
                }
            }
            sw.WriteLine(@"    default:");
            sw.WriteLine(@"      break;");
            sw.WriteLine(@"  }");
        }
        
        private void writeFunctionGetter(StreamWriter sw, Struct cstruct, bool writeBody, List<Struct> cstructs)
        {
            if (cstruct.name.Length == 0)
            {
                return;
            }
            sw.Write(@"v8::Local<v8::Object> GET_" + cstruct.name + "(" + cstruct.name + " &format)");
            sw.WriteLine(writeBody ? " {" : ";");
            if (!writeBody) return;
            sw.WriteLine(@"  Nan::EscapableHandleScope scope;");
            sw.WriteLine(@"  v8::Local<v8::Object> ret = Nan::New<v8::Object>();");

            foreach (CField f in cstruct.fields)
            {
                // Special code for OMX_IndexParamPortDefinition
                if (cstruct.name == "OMX_PARAM_PORTDEFINITIONTYPE" && new string[] { "audio", "video", "image", "other" }.Contains(f.nameNoArray))
                {
                    sw.WriteLine(@"  if (format.eDomain == OMX_PortDomain" + Utils.FirstCharToUpper(f.nameNoArray) + ") {");
                    sw.WriteLine(@"    Nan::Set(ret, Nan::New(""{0}"").ToLocalChecked(), GET_OMX_{1}_PORTDEFINITIONTYPE(format.format.{0}));", f.nameNoArray, f.nameNoArray.ToUpper());
                    sw.WriteLine(@"  }");
                    continue;
                }

                string castTo = null;
                switch (f.type)
                {
                    case "OMX_U64":
                        castTo = "(double)";
                        break;
                    case "OMX_BOOL":
                        castTo = "!!";
                        break;
                }

                if (f.canBeNull)
                {
                    sw.WriteLine(@"  if (format.{0} != NULL)", f.nameNoArray);
                    sw.Write("  ");
                }

                bool isObject = cstructs.Where(a => a.name == f.type).Count() > 0;

                if (isObject)
                {
                    sw.WriteLine(@"  Nan::Set(ret, Nan::New(""{0}"").ToLocalChecked(), GET_{1}(format.{0}));", f.nameNoArray, f.type);
                }
                else {
                    sw.WriteLine(@"  Nan::Set(ret, Nan::New(""{0}"").ToLocalChecked(), Nan::New({1}format.{2}){3});{4}", f.nameNoArray, castTo != null ? castTo : "", f.nameNoArray, f.canBeNull ? ".ToLocalChecked()" : "", f.comment.Length == 0 ? "" : " // " + f.comment);
                }
            }

            sw.WriteLine(@"  return scope.Escape(ret);");
            sw.WriteLine(@"}");
        }
        private void writeFunctionSetter(StreamWriter sw, Struct cstruct, bool writeBody, List<Struct> cstructs)
        {
            if (cstruct.name.Length == 0)
            {
                return;
            }

            sw.Write(@"void SET_" + cstruct.name + "(" + cstruct.name + " &format, v8::Local<v8::Object> param)");
            sw.WriteLine(writeBody ? " {" : ";");
            if (!writeBody) return;

            foreach (CField f in cstruct.fields)
            {
                // Remove the array info
                if (!f.canBeSet)
                {
                    continue;
                }

                // Special code for OMX_IndexParamPortDefinition
                if (cstruct.name == "OMX_PARAM_PORTDEFINITIONTYPE" && new string[] { "audio", "video", "image", "other" }.Contains(f.nameNoArray))
                {
                    sw.WriteLine(@"  if (format.eDomain == OMX_PortDomain" + Utils.FirstCharToUpper(f.nameNoArray) + ") {");
                    sw.WriteLine(@"    v8::Local<v8::Object> obj = Nan::To<v8::Object>(Nan::Get(param, Nan::New(""{0}"").ToLocalChecked()).ToLocalChecked()).ToLocalChecked();", f.nameNoArray);
                    sw.WriteLine(@"    SET_OMX_{1}_PORTDEFINITIONTYPE(format.format.{0}, obj);", f.nameNoArray, f.nameNoArray.ToUpper());
                    sw.WriteLine(@"  }");
                    continue;
                }

                bool isObject = cstructs.Where(a => a.name == f.type).Count() > 0;

                if (isObject)
                {
                    sw.WriteLine(@"  if (Nan::Has(param, Nan::New(""{0}"").ToLocalChecked()).FromJust())", f.nameNoArray);
                    sw.WriteLine(@"  {");
                    sw.WriteLine(@"    SET_{1}(format.{0}, Nan::To<v8::Object>(Nan::Get(param, Nan::New(""{0}"").ToLocalChecked()).ToLocalChecked()).ToLocalChecked());", f.nameNoArray, f.type);
                    sw.WriteLine(@"  }");
                }
                else
                {
                    sw.WriteLine(@"  format.{1} = ({0}) Nan::To<int>(Nan::Get(param, Nan::New(""{1}"").ToLocalChecked()).ToLocalChecked()).FromJust();{2}", f.type, f.nameNoArray, f.comment.Length == 0 ? "" : " // " + f.comment);
                }
            }
            sw.WriteLine(@"}");
        }


        private void writeCaseGet(StreamWriter sw, string indexName, Struct cstruct)
        {
            if (indexName == "OMX_IndexParamBrcmRecursionUnsafe" || indexName == "OMX_IndexParamSourceSeed") return;

            sw.WriteLine("    case {0}:", indexName);
            sw.WriteLine("    {");

            sw.WriteLine("      {0} format;", cstruct.name);
            
            string hasPortStr = cstruct.hasPort ? ", port" : "";

            sw.WriteLine("      GetParameterTemplate(&format{0}, handle, nParamIndex);", hasPortStr);

            sw.WriteLine("      return scope.Escape(GET_{0}(format));", cstruct.name);

            sw.WriteLine("    }");
            sw.WriteLine("      break;");
        }

        private void writeCaseSet(StreamWriter sw, string indexName, Struct cstruct)
        {
            if (indexName == "OMX_IndexParamBrcmRecursionUnsafe" || indexName == "OMX_IndexParamSourceSeed") return;

            sw.WriteLine("    case {0}:", indexName);
            sw.WriteLine("    {");

            sw.WriteLine("      {0} format;", cstruct.name);
            
            string hasPortStr = cstruct.hasPort ? ", port" : "";
            
            sw.WriteLine("      OMX_consts::InitOMXParams(&format{0});", hasPortStr);

            sw.WriteLine("      SET_{0}(format, param);", cstruct.name);

            sw.WriteLine("");
            sw.WriteLine(@"      SetParameterTemplate(&format, handle, nParamIndex);");
            sw.WriteLine("    }");
            sw.WriteLine("      break;");
        }
    }
}