var aarintegration = {
  check: function (successCallback, errorCallback, strText) {
    cordova.exec(successCallback, errorCallback, 'AarIntegration', 'check', [strText]);
  }
}

cordova.addConstructor(function () {
  if (!window.plugins) {window.plugins = {};}

  window.plugins.aarintegration = aarintegration;
  return window.plugins.aarintegration;
});
