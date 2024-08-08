/*global QUnit*/

sap.ui.define([
	"comapp/excelapp/controller/TestView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TestView Controller");

	QUnit.test("I should test the TestView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
