var assert = require('assert');
var stringTool = require('../dist/stringTool.js').default;
var config = require('../dist/config.js').default;

describe('StringTool', function() {
	describe('convert', function() {
		it('should output same structure with expected', function() {
			var src = "Hello, world; How, are, you? | How, many; of, you, are, there?";
			var selectedConfig = {
				handlers:{
					input: ['pipe', 'semicolon', 'comma', 'aspace', 'zspace'],
					output: ['pipe', 'aspace', 'comma', 'semicolon']
				}
			};
			var expected = " Hello|world, How|are|you?; How|many, of|you|are|there?";

			var result = stringTool.convert(src, selectedConfig, config);
			
			// console.log("result", result);
			assert.deepEqual(expected, result);
		});
	});
});