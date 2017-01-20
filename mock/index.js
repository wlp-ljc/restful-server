var fs = require('fs');
var {walk,formatTime,writeLog} = require('./utils/util');

module.exports = function() {
	var openJsonDir = 'mock/apijson/';
	var jsonDir = walk(openJsonDir);
	var serverObj = {};

	// APIJSON文件
	for(let i = 0; i < jsonDir.length; i++){
		let jsonfile = jsonDir[i];
		let filetype = jsonfile.split('.');
		if(filetype.length < 2 || filetype[1].toLowerCase() != "json") {
			writeLog(`${jsonfile} is not json file!`)
		} else {
			let result = JSON.parse(fs.readFileSync( openJsonDir +  jsonfile));
			serverObj = Object.assign({}, serverObj , result);
		}
	}
	// APIJS文件
	var openjsDir = 'mock/apijs/';
	var jsDir = walk(openjsDir);
	for(let i = 0; i < jsDir.length; i++){
		let jsfile = jsDir[i];
		let filetype = jsfile.split('.');
		if(filetype.length < 2 || filetype[1].toLowerCase() != "js") {
			writeLog(`${jsfile} is not js file!`)
		} else {
			let result = require(`./apijs/${jsfile}`);
			serverObj = Object.assign({}, serverObj , result);
		}
	}

	return serverObj;
}