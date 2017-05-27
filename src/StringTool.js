import lo from 'lodash';
import defaultConfig from './config.js';

var convert = function(src, selectedConfig, config = {}){
	var useConfig = config || defaultConfig;
	var inputHandlers = selectedConfig.handlers.input;

	var inputResult = convertInput(src, inputHandlers, config);

};

var convertInput = function(src, inputHandlers, config){
	var inputHandlerStr = inputHandlers[0];
	var inputHandler = lo.filter(config.handler, k=> k.code == inputHandlerStr)[0];
	var eachResult = handleInput(src, inputHandler);

	if(inputHandlers.length == 1){
		return eachResult;
	}
	var nextHandlers = inputHandlers.slice(1);
	if(inputHandler.type == "delimiter"){
		return lo.map(eachResult, k => convertInput(k, nextHandlers, config));
	}
	else if(inputHandler.type == "surround"){
		return convertInput(eachResult, nextHandlers, config);
	}
};

var convertOutput = function(src, outputHandlers, config){
	var result = src;
	for(var i = 0; i < outputHandlers.length; i++){
		var outputHandlerStr = outputHandlers[i];
		var outputHandler = lo.filter(config.handler, k=> k.code == outputHandlerStr)[0];

		//console.log("outputHandlerStr", outputHandlerStr);
		//console.log("result", result);
		result = convertOutputEach(result, outputHandler);
	}
	return result;
};

var convertOutputEach = function(src, outputHandler){
	if(Array.isArray(src[0])){
		return lo.map(src, k => convertOutputEach(k, outputHandler));
	}
	return handleOutput(src, outputHandler);
};

var handleInput = function(srcs, inputHandler){
	var result = [];
	for(var i = 0; i < srcs.length; i++){
		var src = srcs[i];
		if(inputHandler.type == "delimiter"){
			result.push(src.split(inputHandler.delimiter));
		}
		else if(inputHandler.type =="surround"){
			var each = src;
			if(inputHandler.start){
				each = trimStart(each, inputHandler.start);
			}
			if(inputHandler.end){
				each = trimEnd(each, inputHandler.end);
			}
			result.push(each);
		}
	}
	return result;
};

var handleOutput = function(srcs, outputHandler){
	if(outputHandler.type == "delimiter"){
		return srcs.join(outputHandler.delimiter);
	}
	else if(outputHandler.type =="surround"){
		return lo.map(srcs, k=> outputHandler.start + k + outputHandler.end);
	}
};

var trimStart = function(src, key){
	if(src.startsWith(key)){
		return src.substring(key.length);
	}
	else{
		return src;
	}
};

var trimEnd = function(src, key){
	if(src.endsWith(key)){
		return src.substring(0, src.length - key.length);
	}
	else{
		return src;
	}
};

export default {
	convert: convert,
	convertInput: convertInput,
	convertOutput: convertOutput,
	handleInput: handleInput,
	handleOutput: handleOutput,
	trimEnd: trimEnd,
	trimStart: trimStart
};