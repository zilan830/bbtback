// import webInspector from "./webInspector";
//
// export default configure = webInspector.make("API_ROOT", "http://192.168.10.6:8090/");
// webInspector.make("FILE_API_ROOT", "http://file.dev.nongfenqi.com/");
// webInspector.make("GALEN_API_ROOT", "https://galen.dev.nongfenqi.com");
// webInspector.make("NRB_ROUTE_ROOT", "http://nrb.dev.nongfenqi.com/");
// webInspector.make("API_NRB_ROOT", "http://api.dev.nongfenqi.com");
// // const API_ROOT = 'http://192.168.10.6:8090/';
// // // const API_ROOT = 'http://192.168.10.149:8088/';
// // const FILE_API_ROOT = 'http://file.dev.nongfenqi.com/';
// // const GALEN_API_ROOT = 'https://galen.dev.nongfenqi.com';
// console.log("use dev env");
//
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
