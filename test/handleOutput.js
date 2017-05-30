var assert = require('assert');
var stringTool = require('../dist/index.js').default;

describe('StringTool', function() {
  describe('handleOutput', function() {
  	describe('delimiter', function() {
	    it('should return expected string', function() {
	    	var handler = {
	    		"code": "comma",
				"name": "Comma delimiter",
				"type": "delimiter",
				"delimiter": ","
	    	};
	    	var src = ['hello', ' world'];
	    	var result = stringTool.handleOutput(src, handler);
	      	assert.deepEqual('hello, world', result);
	    });
	    it('should return expected string', function() {
	    	var handler = {
	    		"code": "semicolon",
				"name": "Semicolon delimiter",
				"type": "delimiter",
				"delimiter": ";"
	    	};
	    	var source = [
	    		"hello, world",
	    		" devil, may, cry"
	    	];
	    	var expected = 'hello, world; devil, may, cry';

	    	var result = stringTool.handleOutput(source, handler);
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
				"end": "'",
                "targetIndex": 0
	    	};
	    	var result = stringTool.handleOutput(["hello", "world"], handler);
	      	assert.deepEqual(["'hello'", "world"], result);
	    });
	});
  });
});
