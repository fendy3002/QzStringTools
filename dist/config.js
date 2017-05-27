"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	"handler": [{
		"code": "newline",
		"name": "Newline delimiter",
		"type": "delimiter",
		"delimiter": "\n"
	}, {
		"code": "single-quote",
		"name": "Single quote surround",
		"type": "surround",
		"start": "'",
		"end": "'"
	}, {
		"code": "comma",
		"name": "Comma delimiter",
		"type": "delimiter",
		"delimiter": ","
	}, {
		"code": "sql-drop-table",
		"name": "SQL drop table",
		"type": "surround",
		"start": "drop table ",
		"end": ";"
	}],
	"combination": [{
		"name": {
			"input": "newline comma",
			"output": "single quote comma newline"
		},
		"handlers": {
			"input": ['newline', 'comma'],
			"output": ['newline', 'single-quote', 'comma']
		}
	}]
};