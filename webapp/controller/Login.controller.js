sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], (Controller) => {
    "use strict";
 
    return Controller.extend("ui5.ntrduo.controller.Login", {
		
      
      onRegisterForm: function() {
         const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("register");
		},

      onInfoPage: function() {
         const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("info");
		}
 
      
    });
 });