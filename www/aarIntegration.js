var aarintegration = {
  check: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AarIntegration', 'check', []);
  }
}

cordova.addConstructor(function () {
  if (!window.plugins) {window.plugins = {};}

  window.plugins.aarintegration = aarintegration;
  return window.plugins.aarintegration;
});
