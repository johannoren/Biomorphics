define(function (require) {

	// Import dependencies (note you can use relative paths here)
	var SimulationState = require("./SimulationState");
	
	// Define the QUnit module and lifecycle.
	QUnit.module("simulation/SimulationState", { 
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("Create a SimulationState - should not be possible (abstract class)", function () {
		raises(function () {
			var se = new SimulationState();
		}, Error, "Expected error");
	});
	
});