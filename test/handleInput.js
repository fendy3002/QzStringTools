var assert = require('assert');
var stringTool = require('../dist/index.js').default;

describe('StringTool', function() {
  describe('handleInput', function() {
  	describe('delimiter', function() {
	    it('should return array of two', function() {
	    	var handler = {
	    		"code": "comma",
				"name": "Comma delimiter",
				"type": "delimiter",
				"delimiter": ","
	    	};
	    	var result = stringTool.handleInput(["hello, world"], handler);
	      	assert.deepEqual([['hello', ' world']], result);
	    });
	    it('should return array of two & three', function() {
	    	var handler = {
	    		"code": "comma",
				"name": "Comma delimiter",
				"type": "delimiter",
				"delimiter": ","
	    	};
	    	var source = [
	    		"hello, world",
	    		"devil, may, cry"
	    	];
	    	var expected = [
	    		['hello', ' world'],
	    		['devil', ' may', ' cry']
	    	];

	    	var result = stringTool.handleInput(source, handler);
	      	assert.deepEqual(expected, result);
	    });
	});
	describe('trim', function() {
	    it('should return array of two', function() {
	    	var handler = {
				"code": "single-quote",
				"name": "Single quote surround",
				"type": "surround",
				"start": "'",
				"end": "'"
	    	};
	    	var result = stringTool.handleInput(["'hello'", "'world'"], handler);
	      	assert.deepEqual(['hello', 'world'], result);
	    });
	});
  });
});
