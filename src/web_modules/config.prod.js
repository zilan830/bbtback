import webInspector from "./webInspector";

// // 资金服务接口
// const API_ROOT = 'http://apihades.nongfenqi.net/';
// // 文件服务接口
// const FILE_API_ROOT = 'http://apifile.nongfenqi.net/';
// // 基础接口服务
// const GALEN_API_ROOT = 'http://apigalen.nongfenqi.net/';
export default (configure = webInspector.make(
  "API_ROOT",
  "http://apihades.nongfenqi.net/"
));
webInspector.make("FILE_API_ROOT", "http://apifile.nongfenqi.net/");
webInspector.make("GALEN_API_ROOT", "http://apigalen.nongfenqi.net/");
webInspector.make("NRB_ROUTE_ROOT", "http://nrb.nongfenqi.net/");
webInspector.make("API_NRB_ROOT", "http://apinrb.nongfenqi.net");
console.log("use prod env");
