var assert = require('assert');
var stringTool = require('../dist/StringTool.js').default;
var config = require('../dist/config.js').default;

describe('StringTool', function() {
	describe('convert', function() {
		it('should output same structure with expected', function() {
			var src = "Hello, world; How, are, you? | How, many; of, you, are, there?";
			var selectedConfig = {
				handlers:{
					input: ['_pipe', '_semicolon', '_comma', 'aspace', 'zspace'],
					output: ['_pipe', 'aspace', '_comma', '_semicolon']
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
					"input" : ['_newline', 'zcomma', 'atab', '_darrow', ['zspace', 'aspace'], 'a-dquote', 'z-dquote' ],
					"output" : [['_equal', 'aspace', 'zspace'], ['atab', 'atab', 'aphp-object', 'zsemicolon'], '_newline']
				}
			};
			var expected = '\
\t\t$*->a = $a;\n\
\t\t$*->b = $b;\n\
\t\t$*->c = $c;';

			var result = stringTool.convert(src, selectedConfig, config);
			assert.deepEqual(result, expected);
		});
		it('should output same structure with expected (PHP to json)', function() {
			var src = '\
				"a" => $a,\n\
				"b" => $b,\n\
				"c" => $c';
			var selectedConfig = {
				handlers:{
					"input" : [['acomma', '_newline'], 'atab', '_darrow', ['zspace', 'aspace'] ],
					"output" : [['_colon', 'aspace', 'zspace'], ['atab', 'atab'], ['_newline', 'acomma']]
				}
			};
			var expected = '\
\t\t"a" : $a,\n\
\t\t"b" : $b,\n\
\t\t"c" : $c';

			var result = stringTool.convert(src, selectedConfig, config);
			assert.deepEqual(result, expected);
		});
	});
});
