define(function (require) {
	"use strict";
	
	/*
	 * Create a Simulation state is not possible, abstract class!
	 */
	function SimulationState() {
		throw new Error("Can't instantiate abstract class!");
	}

	// Define the SimulationState object methods.
	SimulationState.prototype = {
	
		// Repoint the Constructor function.
		constructor: SimulationState,
		
		stateName: "Abstract base class",
		
		onUpdate: function(simulationEngine, world) {
			throw "onUpdate not overridden";
		},
			
		toString: function () {
			return "Simulation state named " + this.stateName;
		}
	};
	
	// Export the Constructor function.
	return SimulationState;
	
});