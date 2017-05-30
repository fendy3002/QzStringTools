'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convert = function convert(src, selectedConfig) {
	var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var useConfig = config || _config2.default;
	var inputHandlers = selectedConfig.handlers.input;
	var outputHandlers = selectedConfig.handlers.output;

	var inputResult = convertInput([src], inputHandlers, config);
	var outputResult = convertOutput(inputResult, outputHandlers, config);

	return outputResult[0];
};

var convertInput = function convertInput(src, inputHandlers, config) {
	var currentInputHandler = inputHandlers[0];
	var inputHandler = getHandler(currentInputHandler, config);
	var eachResult = handleInput(src, inputHandler);

	if (inputHandlers.length == 1) {
		return eachResult;
	}
	var nextHandlers = inputHandlers.slice(1);
	if (inputHandler.type == "delimiter") {
		return _lodash2.default.map(eachResult, function (k) {
			return convertInput(k, nextHandlers, config);
		});
	} else if (inputHandler.type == "surround") {
		return convertInput(eachResult, nextHandlers, config);
	}
};

var convertOutput = function convertOutput(src, outputHandlers, config) {
	var result = src;
	for (var i = 0; i < outputHandlers.length; i++) {
		var currentHandler = outputHandlers[i];
		var outputHandler = getHandler(currentHandler, config);
		//console.log("outputHandlerStr", outputHandlerStr);
		//console.log("result", result);
		result = convertOutputEach(result, outputHandler);
	}
	return result;
};

var convertOutputEach = function convertOutputEach(src, outputHandler) {
	if (Array.isArray(src[0])) {
		return _lodash2.default.map(src, function (k) {
			return convertOutputEach(k, outputHandler);
		});
	}
	return handleOutput(src, outputHandler);
};

var handleInput = function handleInput(srcs, inputHandler) {
	var result = [];
	for (var i = 0; i < srcs.length; i++) {
		var src = srcs[i];
		if (inputHandler.type == "delimiter") {
			result.push(src.split(inputHandler.delimiter));
		} else if (inputHandler.type == "surround") {
			var each = src;
			if (inputHandler.start) {
				each = trimStart(each, inputHandler.start);
			}
			if (inputHandler.end) {
				each = trimEnd(each, inputHandler.end);
			}
			result.push(each);
		}
	}
	return result;
};

var handleOutput = function handleOutput(srcs, outputHandler) {
	if (outputHandler.type == "delimiter") {
		return srcs.join(outputHandler.delimiter);
	} else if (outputHandler.type == "surround") {
		if (isNumeric(outputHandler.targetIndex)) {
			var result = [];
			for (var i = 0; i < srcs.length; i++) {
				if (i == outputHandler.targetIndex) {
					result.push(outputHandler.start + srcs[i] + outputHandler.end);
				} else {
					result.push(srcs[i]);
				}
			}
			return result;
		} else {
			return _lodash2.default.map(srcs, function (k) {
				return outputHandler.start + k + outputHandler.end;
			});
		}
	}
};

var getHandler = function getHandler(currentInputHandler, config) {
	var inputHandler = null;
	if (Array.isArray(currentInputHandler)) {
		var currentInputHandlers = _lodash2.default.map(currentInputHandler, function (l) {
			if (isNumeric(l)) {
				return l;
			}
			var returnHandler = _lodash2.default.filter(config.handler, function (k) {
				return k.code == l;
			})[0];
			if (!returnHandler) {
				throw new Error('Handle ' + l + ' not found');
			}
			return returnHandler;
		});
		var currentDelimiter = _lodash2.default.filter(currentInputHandlers, function (k) {
			return k.type == "delimiter";
		})[0];
		if (currentDelimiter) {
			currentDelimiter = _extends({}, currentDelimiter);
			for (var i = 0; i < currentInputHandlers.length; i++) {
				var eachHandler = currentInputHandlers[i];
				if (eachHandler.type == 'delimiter') {
					continue;
				} else {
					currentDelimiter.code += " " + eachHandler.code;
					currentDelimiter.delimiter = eachHandler.start + currentDelimiter.delimiter + eachHandler.end;
				}
			}
			inputHandler = currentDelimiter;
		} else {
			inputHandler = _extends({}, currentInputHandlers[0]);
			for (var i = 1; i < currentInputHandlers.length; i++) {
				var eachHandler = currentInputHandlers[i];
				if (isNumeric(eachHandler)) {
					inputHandler.targetIndex = eachHandler;
				} else {
					inputHandler.code += " " + eachHandler.code;
					inputHandler.start += eachHandler.start;
					inputHandler.end += eachHandler.end;
				}
			}
		}
	} else {
		inputHandler = _lodash2.default.filter(config.handler, function (k) {
			return k.code == currentInputHandler;
		})[0];
		if (!inputHandler) {
			throw new Error('Handle ' + currentInputHandler + ' not found');
		}
	}
	return inputHandler;
};

var trimStart = function trimStart(src, key) {
	if (src.startsWith(key)) {
		var result = src.substring(key.length);
		return trimStart(result, key);
	} else {
		return src;
	}
};

var trimEnd = function trimEnd(src, key) {
	if (src.endsWith(key)) {
		var result = src.substring(0, src.length - key.length);
		return trimEnd(result, key);
	} else {
		return src;
	}
};

var toPrintable = function toPrintable(src) {
	return src.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\'/g, "\\'").replace(/\"/g, '\\"');
};

var isNumeric = function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

exports.default = {
	convert: convert,
	convertInput: convertInput,
	convertOutput: convertOutput,
	handleInput: handleInput,
	handleOutput: handleOutput,
	trimEnd: trimEnd,
	trimStart: trimStart,
	toPrintable: toPrintable
};