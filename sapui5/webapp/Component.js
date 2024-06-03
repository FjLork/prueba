// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "lorkgroup/sapui5/model/Models"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, ResourceModel, Models) {

        return UIComponent.extend("lorkgroup.sapui5.Component", {

            MediaMetadata: {

                "rootView": {
                    "viewName": "lorkgroup.sapui5.view.App",
                    "type": "XML",
                    "async": true,
                    "id": "app"

                }
            },


            init: function () {

                // Call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "lorkgroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");


            }

        })

    });