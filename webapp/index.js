sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.ntrduo",
		settings : {
			id : "ntrduo"
		},
		async: true
	}).placeAt("content");
});