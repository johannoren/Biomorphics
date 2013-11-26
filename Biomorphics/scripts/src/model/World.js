define(function (require) {
	"use strict";
	
	// Import underscore.
	var _ = require("vendor/underscore");

	
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
		
		addTree: function (tree) {
			this.trees.push(tree);
			return this;
		},
		
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