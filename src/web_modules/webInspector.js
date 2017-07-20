// check window exist
window.configure = {
  _app_config: "this is app config"
};

exports.make = function(key, value, desc) {
  window.configure[key] = value;
  return window.configure;
};
