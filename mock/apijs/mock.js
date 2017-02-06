var _ = require("lodash");
var {Random} = require('mockjs')

// 使用lodash和mockjs生成随机数据
// http://mockjs.com/examples.html
var db = (function(){
  return {
    "mock":{
      status: 0,
      msg: 'success',
      data:_.times(5,function (n) {
        return {
          id: n,
          // bool变量
          bool: Random.bool(),
          boolMinMax: Random.boolean(1, 9, true),
          // 自然数
          natural: Random.natural(),
          naturalMin: Random.natural(10000),
          naturalMinMax: Random.natural(60,100),
          // 整数
          integer: Random.integer(),
          integerMin: Random.integer(10000),
          integerMinMax:  Random.integer(60, 100),
          // 浮点数
          float: Random.float(),
          floatMin: Random.float(0),
          floatMinMaxDmin: Random.float(60, 100,3),
          floatMinMaxDminDmax: Random.float(60, 100,3,5),
          // 字符
          character: Random.character(),
          characterLower: Random.character("lower"),
          characterUpper: Random.character("upper"),
          characterNumber: Random.character("number"),
          characterSymbol: Random.character("symbol"),
          characterSelect: Random.character('aeiou'),
          // 字符串
          string:  Random.string(),
          stringLen:  Random.string(5),
          stringLower:  Random.string('lower', 5),
          stringUpper:  Random.string('upper', 5),
          stringNumber:  Random.string('number',5),
          stringSymbol:  Random.string('symbol',5),
          stringAeiou:  Random.string('aeiou',5),
          stringL710:  Random.string(7,10),
          stringLowerMinMax:  Random.string('lower', 1, 3),
          stringUpperMinMax:  Random.string('upper', 1, 3),
          stringNumberMinMax:  Random.string('number', 1, 3),
          stringSymbolMinMax:  Random.string('symbol', 1, 3),
          stringAeiouMinMax:  Random.string('aeiou', 1, 3),
          // 范围
          range: Random.range(10),
          rangeStartStop: Random.range(3, 7),
          rangeStartStep2: Random.range(1, 10, 2),
          rangeStartStep3: Random.range(1, 10, 3),
          // 日期-年月日
          date: Random.date(),
          dateYYYYMMDD: Random.date('yyyy-MM-dd'),
          dateYYMMDD: Random.date('yy-MM-dd'),
          dateYMMDD: Random.date('y-MM-dd'),
          dateYMD: Random.date('y-M-d'),
          dateRandom: Random.date('yyyy yy y MM M dd d'),
          // 时间-时分秒
          time: Random.time(),
          timeAHMS: Random.time('A HH:mm:ss'),
          timeaHms: Random.time('a HH:mm:ss'),
          timeT: Random.time('T'),
          timeHHmmss: Random.time('HH:mm:ss'),
          timeHms: Random.time('H:m:s'),
          // data-time 年月日-时分秒
          datetime: Random.datetime(),
          datetimeYYYYMMDDAHHMMSS: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
          datetimeYYMMDDaHHMMSS: Random.datetime('yy-MM-dd a HH:mm:ss'),
          datetimeYMMDDHHMMSS: Random.datetime('y-MM-dd HH:mm:ss'),
          datetimeYMDHMS: Random.datetime('y-M-d H:m:s'),
          // now 现在时间
          now: Random.now(),
          nowYear:  Random.now('year'),
          nowMonth:  Random.now('month'),
          nowWeek:  Random.now('week'),
          nowDay:  Random.now('day'),
          nowHour:  Random.now('hour'),
          nowMinute: Random.now('minute'),
          nowSecond: Random.now('second'),
          nowFormat: Random.now('yyyy-MM-dd HH:mm:ss SS'),
          nowUnitFormat: Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'),
          // 图像
          image: Random.image(),
          imageSize: Random.image('200x100'),
          imageBac: Random.image('200x100','#FF6600'),
          imageText: Random.image('200x100','#FF6600', 'hello'),
          imageBacForeText: Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
          imageBacForePngText: Random.image('200x100', '#894FC4', '#FFF', 'png', '!'),
          // 数据图像
          // dataImage: Random.dataImage(),
          // dataImageSize: Random.dataImage('200x100'),
          // dataImageSizeText: Random.dataImage('200x100', 'Hello Mock.js!')
          // 颜色
          color: Random.color(),
          colorHex: Random.hex(),
          colorRgb: Random.rgb(),
          colorRgba: Random.rgba(),
          colorHsl: Random.hsl(),
          // 段落
          paragraph: Random.paragraph(),
          paragraphLen: Random.paragraph(2),
          paragraphMinMax: Random.paragraph(3,9),
          cparagraph: Random.cparagraph(),
          cparagraphLen: Random.cparagraph(2),
          cparagraphMinMax: Random.cparagraph(3,9),
          // 句子
          sentence: Random.sentence(),
          sentenceLen: Random.sentence(2),
          sentenceMinMax: Random.sentence(3, 5),
          csentence: Random.csentence(),
          csentenceLen: Random.csentence(2),
          csentenceMinMax: Random.csentence(3, 5),
          // 词语
          word: Random.word(),
          wordLen: Random.word(3),
          wordMinMax: Random.word(2,9),
          cword: Random.cword(),
          cwordLen: Random.cword(3),
          cwordMinMax: Random.cword(3,9),
          // 标题
          title: Random.title(),
          titleSize: Random.title(2),
          titleMinMax: Random.title(3,5),
          ctitle: Random.ctitle(),
          ctitleSize: Random.ctitle(2),
          ctitleMinMax: Random.ctitle(3,5),
          // 姓名
          name: Random.name(),
          nameFirst: Random.first(),
          nameLast: Random.last(),
          nameMiddle: Random.name(true),
          cname: Random.cname(),
          cnameFirst: Random.cfirst(),
          cnameLast: Random.clast(),
          cnameMiddle: Random.cname(true),
          // web网页
          url: Random.url(),
          domain: Random.domain(),
          protocol: Random.protocol(),
          tld: Random.tld(),
          ip: Random.ip(),
          // address
          region: Random.region(),
          province: Random.province(),
          city: Random.city(),
          cityT: Random.city(true),
          county: Random.county(),
          countyT: Random.county(true),
          zip: Random.zip(),
          // helper
          capitalize: Random.capitalize( 'hello' ),
          upper: Random.upper( 'hello' ),
          lower: Random.lower( 'HELLO' ),
          pick: Random.pick( ['1', '2', '3', '4', '5'] ),
          shuffle: Random.shuffle( ['1', '2', '3', '4', '5'] ),
          // Miscellaneous
          guid: Random.guid(),
          id: Random.id(),
          increment: Random.increment(),
          increment100: Random.increment(100),
          increment1000: Random.increment(1000)
        }
      })
    }
  }
})();

module.exports = db;