sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function(
	Controller, MessageBox
) {
	"use strict";

	return Controller.extend("ui5.ntrduo.controller.Register", {



		onNavBack: function() {
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
		},

		onRegistrarseButtonPress: function(){

			if (!this.calcLimits()) {
				return; 
			}
			const oModel = this.getOwnerComponent().getModel("users");
			const oData = oModel.getData().Usuarios;
			const oView = this.getView();

			console.log("Datos:", oData);

			let nombre = oView.byId("idNameInput").getValue();
			let apellidos = oView.byId("idSurnameInput").getValue();
			let fechaNacimiento = oView.byId("idBirthInput").getValue();
			let lugar = oView.byId("idPlaceInput").getValue();
			let correo = oView.byId("idMailInput").getValue();
			let usuario = oView.byId("idUsernameInput").getValue();
			let contraseña = oView.byId("idPasswordInput").getValue();

			const newId = oData.length > 0 ? "U" + (Math.max(...oData.map(x => parseInt(x.IdUsuario.replace("U", ""), 10))) + 1).toString().padStart(3, "0"): null;
			const oUserNew = {
				IdUsuario: newId,
				Nombre: nombre,
				Apellidos: apellidos,
				FechaNacimiento: fechaNacimiento,
				Lugar: lugar,
				Mail: correo,
				NombreDeUsuario: usuario,
				Contraseña: contraseña
			};

			oData.push(oUserNew);
			oModel.refresh();
			console.log("Datos actualiado:", oData);

			calcLimits;

			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
		},

		calcLimits: function() {
			const oView = this.getView();
			let camposFaltantes = [];
		
			let nombre = oView.byId("idNameInput").getValue().trim();
			let apellidos = oView.byId("idSurnameInput").getValue().trim();
			let fechaNacimiento = oView.byId("idBirthInput").getValue().trim();
			let lugar = oView.byId("idPlaceInput").getValue().trim();
			let correo = oView.byId("idMailInput").getValue().trim();
			let usuario = oView.byId("idUsernameInput").getValue().trim();
			let contraseña = oView.byId("idPasswordInput").getValue().trim();
			let repContraseña = oView.byId("idRepPasswordInput").getValue().trim();
		
			if (!nombre) camposFaltantes.push("Nombre");
			if (!apellidos) camposFaltantes.push("Apellidos");
			if (!fechaNacimiento) camposFaltantes.push("Fecha de Nacimiento");
			if (!lugar) camposFaltantes.push("Lugar");
			if (!correo) camposFaltantes.push("Correo");
			if (!usuario) camposFaltantes.push("Nombre de Usuario");
			if (!contraseña) camposFaltantes.push("Contraseña");
			if (!repContraseña) camposFaltantes.push("Repetir Contraseña");
		
			if (camposFaltantes.length > 0) {
				MessageBox.error("Los siguientes campos son obligatorios:\n" + camposFaltantes.join(", "));
				return false;
			}
		
			if (contraseña !== repContraseña) {
				MessageBox.error("Las contraseñas no coinciden.");
				return false;
			}
		
			if (!correo.includes("@")) {
				MessageBox.error("El correo electrónico debe contener '@'.");
				return false;
			}
		
			if (!apellidos.includes(" ")) {
				MessageBox.error("El campo 'Apellidos' debe contener al menos un espacio.");
				return false;
			}
		
			return true; 
		}
	});
});