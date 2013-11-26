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

	QUnit.test("Add a tree to the world", function () { 
		var world = new World();
		var tree = new Tree(0);
		world.addTree(tree);
		QUnit.equal(world.getTrees().length, 1);
	});

	QUnit.test("Add many trees", function () { 
		var world = new World();
		world.addTree(new Tree(0)).addTree(new Tree(0)).addTree(new Tree(0));
		
		QUnit.equal(world.getTrees().length, 3);
		
	});

	
});