var assert = require('assert');
var stringTool = require('../dist/StringTool.js').default;
var config = require('../dist/config.js').default;

describe('StringTool', function() {
	describe('convertOutput', function() {
		it('should output same structure with expected', function() {
			var src = [
				//by pipe
				[
					//by semicolon
					[
						['Hello', ' world'] ,
						[' How', ' are',' you? ']
					],
					//by semicolon
					[
						[' How', ' many'],
						[' of', ' you',' are', ' there?']
					]
				]
			];
			var handler = ['_comma', '_semicolon', '_pipe'];
			var expected = ["Hello, world; How, are, you? | How, many; of, you, are, there?"];

			var result = stringTool.convertOutput(src, handler, config);

			//console.log("result", result);
			assert.deepEqual(expected, result);
		});
	});
});
