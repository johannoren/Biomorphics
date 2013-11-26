define(function (require) {

	// Import depdendencies (note you can use relative paths here)
	var World = require("./World");
	var Tree = require("./Tree");
	
	// Define the QUnit module and lifecycle.
	QUnit.module("model/World", { 
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("Create a World", function () { 
		var world = new World();
		QUnit.equal(world.getTrees().length, 0);
	});

	QUnit.test("World to string", function () { 
		var world = new World();
		QUnit.ok(world.toString().indexOf('World contains') !== -1);
	});

	QUnit.test("Add a tree", function () { 
		var world = new World();
		QUnit.ok(world.toString().indexOf('World contains') !== -1);
	});

	
});