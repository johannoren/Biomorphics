define(function (require) {
	"use strict";
	
	/*
	 * Create a Simulation Engine
	 */
	function SimulationEngine() {
		
	}

	// Define the SimulationEngine object methods.
	SimulationEngine.prototype = {
	
		// Repoint the Constructor function.
		constructor: SimulationEngine,
		
		changeState: function(newState) {
			this.currentState = newState;
		},
			
		toString: function () {
			return "Simulation engine";
		}
	};
	
	// Export the Constructor function.
	return SimulationEngine;
	
});