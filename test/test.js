var assert = require('assert');
var stringTool = require('../dist/stringTool.js').default;

describe('StringTool', function() {
  describe('trimStart', function() {
    it('should return "llo world"', function() {
      assert.equal('llo world', stringTool.trimStart("Hello world", "He"));
    });
  });
  describe('trimEnd', function() {
    it('should return "Hello wor"', function() {
      assert.equal('Hello wor', stringTool.trimEnd("Hello world", "ld"));
    });
  });
  describe('handleString', function() {
  	describe('delimiter', function() {
	    it('should return array of two', function() {
	    	var handler = {
	    		"code": "comma",
				"name": "Comma delimiter",
				"type": "delimiter",
				"delimiter": ","
	    	};
	    	var result = stringTool.handleString(["hello, world"], handler);
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

	    	var result = stringTool.handleString(source, handler);
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
	    	var result = stringTool.handleString(["'hello'", "'world'"], handler);
	      	assert.deepEqual(['hello', 'world'], result);
	    });
	});
  });
});