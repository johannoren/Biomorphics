define(function (require) {
	"use strict";
	
	/*
	 * Create a World domain object
	 */
	function World() {
		this.trees = [];
	}

	// Define the object methods.
	World.prototype = {
	
		// Repoint the Constructor function.
		constructor: World,
		
		getTrees: function () {
			return this.trees;
		},
		
		toString: function () {
			return "World contains " + this.trees.length + " trees.";
		}
	};
	
	// Export the Constructor function.
	return World;
	
});