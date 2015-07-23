sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel",
  "sap/chet/openUI5/controller/HelloDialog",
  "sap/ui/model/odata/v2/ODataModel"
], function(UIComponent, JSONModel, ResourceModel, HelloDialog, ODataModel) {
  "use strict";
  return UIComponent.extend("sap.chet.openUI5.Component", {
    metadata: {
      manifest: "json"
    },
    init: function() {
      //Call the init function of the parent
      UIComponent.prototype.init.apply(this, arguments);
      //Set data model
      var oData = {
        recipient: {
          name: "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      // //set invoice model - local
    	// var oConfig = this.getMetadata().getConfig();
    	// var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
    	// var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
    	// this.setModel(oInvoiceModel, "invoice");
      //
      // //set invoice model - remote
			// var oConfig = this.getMetadata().getConfig();
			// var oInvoiceModel = new ODataModel(oConfig.invoiceRemote);

      //set i18nModel
      var i18nModel = new ResourceModel({
        bundleName: "sap.chet.openUI5.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");

      //set Dialog
      this.helloDialog = new HelloDialog();
    }
  });
});
