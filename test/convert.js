var assert = require('assert');
var stringTool = require('../dist/StringTool.js').default;
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
		it('should output same structure with expected (PHP)', function() {
			var src = '\
				"a" => $a,\n\
				"b" => $b,\n\
				"c" => $c';
			var selectedConfig = {
				handlers:{
					"input" : ['newline', 'zcomma', 'atab', 'php-array-arrow', 'zspace', 'aspace', 'double-quote'],
					"output" : [['equal-delimiter', 'aspace', 'zspace'], 'php-object', 'zsemicolon', 'atab', 'atab', 'newline']
				}
			};
			var expected = '\
\t\t$*->a = $a;\n\
\t\t$*->b = $b;\n\
\t\t$*->c = $c;';

			var result = stringTool.convert(src, selectedConfig, config);
			assert.deepEqual(result, expected);
		});
	});
});
