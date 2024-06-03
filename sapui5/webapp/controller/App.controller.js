// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/MessageToast",
    "lorkgroup/sapui5/model/Models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel    
     * @param {typeof sap.m.MessageToast} MessageToast     
     */
    function (Controller, ResourceModel, MessageToast, Models) {
        "use strict";

        return Controller.extend("lorkgroup.sapui5.controller.App", {

            onInit: function () {

                 // set data model on the view
                 this.getView().setModel(Models.createRecipient());

                 // set i18n model on the view
                 var i18nModel = new ResourceModel({ bundleName : "lorkgroup.sapui5.i18n.i18n" });
                 this.getView().setModel(i18nModel, "i18n");

            },

            onShowHello: function () {
                //read text from i18n model
                var oBundle    = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("recipient/name");
                var sMsg       = oBundle.getText("helloMsg", [sRecipient]);

                // alert("Hello Word");
                MessageToast.show(sMsg);
            },

            onBoton2: function () {
                alert("Hello Word");
            }

        });
    });
