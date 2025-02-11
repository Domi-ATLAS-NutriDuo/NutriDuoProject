sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], (UIComponent, JSONModel, Device) => {
	"use strict";

	return UIComponent.extend("ui5.ntrduo.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init() {
			UIComponent.prototype.init.apply(this, arguments);


			const oUserModel = new JSONModel();
			oUserModel.loadData("model/usuario.json");
			this.setModel(oUserModel, "users");

			const oExpensiveModel = new JSONModel(Device);
			oExpensiveModel.setDefaultBindingMode("OneWay")
			this.setModel(oExpensiveModel, "device");

			this.getRouter().initialize();

			this.getContentDensityClass = function () {
				return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
			};
		}
	});
});
