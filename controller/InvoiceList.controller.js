sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/chet/openUI5/model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
  "use strict";
  return Controller.extend("sap.chet.openUI5.controller.InvoiceList", {
    formatter: formatter,
    onInit: function() {
      var oViewModel = new JSONModel({
        currency: "EUR"
      });
      this.getView().setModel(oViewModel, "view");
    },

    onFilterInvoices: function(oEvent) {
      var aFilter = [];
      var sQuery = this.getView().byId("invoiceList");
      if(sQuery){
          aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
      }

      var oList = this.getView().byId("invoiceList");
      var oBinding = oList.getBinding("items");
      oBinding.filter(aFilter);
    }

  });
});
