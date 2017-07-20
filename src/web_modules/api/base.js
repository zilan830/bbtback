// import "isomorphic-fetch";
// import polyfill from "es6-promise";
require("es6-promise").polyfill();
import config from "../config";
import axios from "axios";

//suibianxie

// export default (data, url, type) => {
//   const headers = new Headers({
//     "Content-Type": "application/json",
//   });
//   return fetch(config.API_ROOT + url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: headers,
//     mode: "cors"
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw "网络请求失败";
//       }
//       return response.json();
//     })
//     .then(res => {
//       return res;
//     });
// };

// export default instance = (data,url) => axios.create({
//   baseURL: config.API_ROOT + url,
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });

export default (data, url, type) => {
  // const headers = new Headers({
  //   "Content-Type": "application/json",
  // });
  return axios({
    method: "get",
    responseType: "json",
    mode: "cors",
    url: "http://apigalen.nongfenqi.net/bank?startIndex=0&pageSize=10"
  }).then(response => {
    console.log("response", response);
    return response;
  });
  // if (window.XDomainRequest) xmlhttp = new XDomainRequest();
  // else if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
  // else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //
  // xmlhttp.open("GET", "http://apigalen.nongfenqi.net/bank?startIndex=0&pageSize=10", false);
  // xmlhttp.send();
  //
  // hostipInfo = xmlhttp.responseText.split("\n");
  // var IP = false;
  // for (i = 0; hostipInfo.length >= i; i++) {
  //   if (hostipInfo[i]) {
  //
  //     ipAddress = hostipInfo[i].split(":");
  //     if (ipAddress[0] == "IP") {
  //       IP = ipAddress[1];
  //     }
  //   }
  // }
  // return IP;

  // let xhr = new XMLHttpRequest();
  // if (window.XDomainRequest) {
  //   xhr = new XDomainRequest();
  // }
  // else if (window.XMLHttpRequest) {
  //   xhr = new XMLHttpRequest();
  // }
  // xhr.open("GET", "https://apigalen.nongfenqi.net/bank?startIndex=0&pageSize=10", false);
  // xhr.send();
  //
  // const hostipInfo = xhr.responseText.split("\n");
};
