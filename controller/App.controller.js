sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("sap.chet.openUI5.controller.App", {
    onShowHello : function () {
      alert("Hello World !!")
    }
  });
});
