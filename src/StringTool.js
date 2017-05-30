import lo from 'lodash';
import defaultConfig from './config.js';

var convert = function(src, selectedConfig, config = {}){
	var useConfig = config || defaultConfig;
	var inputHandlers = selectedConfig.handlers.input;
	var outputHandlers = selectedConfig.handlers.output;

	var inputResult = convertInput([src], inputHandlers, config);
	var outputResult = convertOutput(inputResult, outputHandlers, config);

	return outputResult[0];
};

var convertInput = function(src, inputHandlers, config){
	var currentInputHandler = inputHandlers[0];
	var inputHandler = getHandler(currentInputHandler, config);
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
		var currentHandler = outputHandlers[i];
		var outputHandler = getHandler(currentHandler, config);
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

var getHandler = function(currentInputHandler, config){
	var inputHandler = null;
	if(Array.isArray(currentInputHandler)){
		var currentInputHandlers = lo.map(currentInputHandler,
			l => {
				var returnHandler = lo.filter(config.handler, k=> k.code == l)[0];
				if(!returnHandler){
					throw new Error('Handle ' + l + ' not found');
				}
				return returnHandler
			});
		var currentDelimiter = lo.filter(currentInputHandlers, k => k.type == "delimiter")[0];
		for(var i = 0; i < currentInputHandlers.length; i++){
			var eachDelimiter = currentInputHandlers[i];
			if(eachDelimiter.type == 'delimiter'){ continue; }
			else{
				currentDelimiter.delimiter =
					eachDelimiter.start + currentDelimiter.delimiter + eachDelimiter.end;
			}
		}
		inputHandler = currentDelimiter;
	}
	else{
		inputHandler = lo.filter(config.handler, k=> k.code == currentInputHandler)[0];
		if(!inputHandler){
			throw new Error('Handle ' + currentInputHandler + ' not found');
		}
	}
	return inputHandler;
};

var trimStart = function(src, key){
	if(src.startsWith(key)){
		var result = src.substring(key.length);
		return trimStart(result, key);
	}
	else{
		return src;
	}
};

var trimEnd = function(src, key){
	if(src.endsWith(key)){
		var result = src.substring(0, src.length - key.length);
		return trimEnd(result, key);
	}
	else{
		return src;
	}
};

var toPrintable = function(src){
	return src.replace(/\t/g, "\\t")
		.replace(/\n/g, "\\n")
		.replace(/\b/g, "\\b")
	    .replace(/\'/g, "\\'")
        .replace(/\"/g, '\\"');
};

export default {
	convert: convert,
	convertInput: convertInput,
	convertOutput: convertOutput,
	handleInput: handleInput,
	handleOutput: handleOutput,
	trimEnd: trimEnd,
	trimStart: trimStart,
	toPrintable: toPrintable
};
