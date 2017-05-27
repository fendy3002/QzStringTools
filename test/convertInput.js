var assert = require('assert');
var stringTool = require('../dist/stringTool.js').default;
var config = require('../dist/config.js').default;

describe('StringTool', function() {
	describe('convertInput', function() {
		it('should output same structure with expected', function() {
			var src = ["Hello, world; How, are, you? | How, many; of, you, are, there?"];
			var handler = ['pipe', 'semicolon', 'comma'];
			var expected = [
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

			var result = stringTool.convertInput(src, handler, config);

			/*console.log("expected 0 0", expected[0][0]);
			console.log("result 0 0", result[0][0]);
			console.log("expected 0 1", expected[0][1]);
			console.log("result 0 1", result[0][1]);*/
			assert.deepEqual(expected, result);
		});
	});
});