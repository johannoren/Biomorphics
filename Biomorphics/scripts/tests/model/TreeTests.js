define(function (require) {

	// Import depdendencies (note you can use relative paths here)
	var Tree = require("./Tree");
	
	// Define the QUnit module and lifecycle.
	QUnit.module("model/Tree", { 
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("Create a Tree", function () { 
		var tree = new Tree(5, "Mr Tree");
		QUnit.equal(tree.getEnergy(), 5);
		QUnit.equal(tree.getName(), "Mr Tree");
		QUnit.equal(tree.getAge(), 0);
	});

	QUnit.test("Tree to string", function () { 
		var tree = new Tree(5, "Mr Tree");
		QUnit.ok(tree.toString().indexOf('Mr') !== -1);
	});

	QUnit.test("Validation", function () {
		raises(function () {
			var t = new Tree();
		}, Error, "Must throw error when omitting constructor arguments");
	});

	
});