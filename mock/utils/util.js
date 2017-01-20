var fs=require('fs');
var path = require("path");

// 遍历，读取某个目录下的所有文件
var walk = function(dir, done) {
  var results = [];
  var readDir = fs.readdirSync(dir);
  return readDir;
};

// js 时间转换
var formatTime = function(date) {
  var year = date.getFullYear();  
  var month =(date.getMonth() + 1).toString();  
  var day = (date.getDate()).toString();  
  var hour = (date.getHours()).toString();  
  var minute = (date.getMinutes()).toString();  
  var second = (date.getSeconds()).toString();  
  if (month.length == 1) {  
      month = "0" + month;  
  }  
  if (day.length == 1) {  
      day = "0" + day;  
  }  
  if (hour.length == 1) {  
      hour = "0" + hour;  
  }  
  if (minute.length == 1) {  
      minute = "0" + minute;  
  }  
  if (second.length == 1) {  
      second = "0" + second;  
  }  
   var dateTime = year + "-" + month + "-" + day +" "+ hour +":"+minute+":"+second;  
   return dateTime;  
}

// 写日志
var writeLog = function(msg) {
  let file = './mock/logs/output.log';
  let time = formatTime(new Date());
  msg = `${time}  ${msg}  \n`;
  fs.appendFile(file, msg, function(err){  
        if(err)  
            console.log("fail " + err);  
    });  
}

// ES6方法实现
if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

module.exports = {
  walk,
  formatTime,
  writeLog
}