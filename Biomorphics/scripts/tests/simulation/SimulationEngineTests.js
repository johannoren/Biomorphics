define(function (require) {

	// Import dependencies (note you can use relative paths here)
	var SimulationEngine = require("./SimulationEngine");
	
	// Define the QUnit module and lifecycle.
	QUnit.module("simulation/SimulationEngine", { 
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("Create a SimulationEngine", function () { 
		var se = new SimulationEngine();
		QUnit.equal(1, 1);
	});

	
});