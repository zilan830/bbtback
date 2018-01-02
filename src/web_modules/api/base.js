require("es6-promise").polyfill();
import config from "../config";
import axios from "axios";

export default (url, data) => {
  return axios({
    method: "post",
    //url: `http://47.92.123.27:8081${url}`,
    url,
    data
  })
    .then(res => {
      if (res.data.code === 10000) {
        return res.data;
      } else if (res.data.code === 10001) {
        throw res.data.msg;
      } else window.location.href = "#/home";
    })
    .catch(err => {
      console.log("$err", err);
      throw err;
    });
};

// export const baseReq = axios;
