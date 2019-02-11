/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapTestDescription/sapProyecto/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});