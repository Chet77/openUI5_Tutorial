sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
  "use strict";
  return Controller.extend("sap.chet.openUI5.controller.App", {
    onInit : function (){
      var oData = {
        recipient : {
          name : "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);

      //Set i18nModel
      var i18nModel = new ResourceModel({
        bundleName : "sap.chet.openUI5.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");    
    },
    onShowHello : function () {
      MessageToast.show("Hello World !!");
    }
  });
});
