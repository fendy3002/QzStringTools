'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convert = function convert(src, selectedConfig) {
	var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var useConfig = config || _config2.default;
	var inputHandlers = selectedConfig.handlers.input;

	var result = [src];
	for (var i = 0; i < inputHandlers.length; i++) {
		var inputHandlerStr = inputHandlers[i];
		var inputHandler = _lodash2.default.filter(useConfig.handler, function (k) {
			return k.code == inputHandlerStr;
		})[0];
		var eachResult = handleString(result, inputHandler);
	}
};

var convertInput = function convertInput(src, inputHandlers, config) {
	var inputHandlerStr = inputHandlers[0];
	var inputHandler = _lodash2.default.filter(config.handler, function (k) {
		return k.code == inputHandlerStr;
	})[0];
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

var trimStart = function trimStart(src, key) {
	if (src.startsWith(key)) {
		return src.substring(key.length);
	} else {
		return src;
	}
};

var trimEnd = function trimEnd(src, key) {
	if (src.endsWith(key)) {
		return src.substring(0, src.length - key.length);
	} else {
		return src;
	}
};

exports.default = {
	convert: convert,
	convertInput: convertInput,
	handleInput: handleInput,
	trimEnd: trimEnd,
	trimStart: trimStart
};