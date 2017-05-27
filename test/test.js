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
});