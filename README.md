# QzStringTools

A simple application to help converting some text with specific format to desired format using configurable commands.

## Running app

This repo comes with app server, run in http://localhost:3000.

```
git clone https://github.com/fendy3002/QzStringTools.git;

cd QzStringTools;

npm install;

npm start;
```

## Installing

When you want to use this library in your own node project, you can install it via npm install.

```
npm install --save @fendy3002/string-tools
```

## Basic usage

```js
var StringTools = require('@fendy3002/string-tools');
var Config = StringTools.defaultConfig;

var input = 'Hello, world \n' +
        'how, are, you?';

var selectedCommand = null;
for(var i = 0; i < Config.command.length; i++){
    selectedCommand = Config.command[i];
    if(selectedCommand.code == 'sql-single-quote'){ break; }
}

var result = StringTools.convert(input, selectedCommand, Config);
console.log('result', result);
```

## Use cases

### From excel spreadsheet to sql select

<img src="https://cloud.githubusercontent.com/assets/5449185/26616356/10c2f24a-45f8-11e7-9fd7-da96b968b828.gif" alt="From excel spreadsheet (tab delimited) to mysql select union all"
title="From excel spreadsheet (tab delimited) to mysql select union all"
style="width: 800px;"/>

### From PHP Array to Object syntax

<img src="https://cloud.githubusercontent.com/assets/5449185/26616058/ffc041d4-45f5-11e7-9709-e211e0b59a69.gif" alt="From php array syntax to object syntax"
title="From php array syntax to object syntax"
style="width: 800px;"/>
