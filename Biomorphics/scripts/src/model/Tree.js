define(function (require) {
	"use strict";
	
	/*
	 * Create a Tree domain object
	 */
	function Tree(energy, name) {
		if (energy === undefined) {
			throw new Error("Energy argument missing");
		}
		if (name === undefined) {
			name = "N/A";
		}
	
		this.energy = energy;
		this.age    = 0;
		this.name   = name;
	}

	// Define the Tree object methods.
	Tree.prototype = {
	
		// Repoint the Constructor function.
		constructor: Tree,
		
		getEnergy: function () {
			return this.energy;
		},

		getName: function () {
			return this.name;
		},

		getAge: function () {
			return this.age;
		},
		
		toString: function () {
			return "Name: " + this.name + ", age: " + this.age;
		}
	};
	
	// Export the Constructor function.
	return Tree	;
	
});