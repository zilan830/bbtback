import ajax from "./base";

const apiList = {};

apiList.testApi = data => {
  return ajax({ ...data }, "login").then(res => {
    if (res.retCode === "10000") {
      return res;
    } else {
      throw res.message;
    }
  });
};

export default apiList;
