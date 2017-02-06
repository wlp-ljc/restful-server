var _ = require("lodash");
var Chance = require('chance'),
    chance = new Chance();

// http://chancejs.com/
// 缺点，不支持中文随机
chance.mixin({
    'user': function() {
          return {
               first: chance.first(),
               last: chance.last(),
               email: chance.email()
          };
    },
    'social_user': function () {
      var user = chance.user();
      user.network = chance.pick(['facebook', 'twitter']);
      return user;
    }
});

// chance.set('lastNames', ['李', '张', '王', '赵', '钱', '孙', '周', '吴', '郑', '冯', '陈']);

var db = (function(){
  return {
     chance: {
      status: 0,
      msg: 'successs',
      data: _.times(2,function (n) {
        return {
          bool: chance.bool(),
          boolLink: chance.bool({likelihood: 30}), //30% true 70% false
          // 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
          character: chance.character(), 
          // abcde 随机产生字符
          characterPool: chance.character({pool: 'abcde'}),
          characterAlpha: chance.character({alpha: true}),
          characterLower: chance.character({casing: 'lower'}),
          charactersymbols: chance.character({symbols: true}),
          // float
          float: chance.floating(),
          floatFixed: chance.floating({fixed: 7}),
          floatMinMax: chance.floating({min: 0, max: 100}),
          // integer
          integer: chance.integer(),
          integerMinMax: chance.integer({min: -20, max: 20}),
          // netural
          netural: chance.natural(),
          neturalMinMax: chance.natural({min: 1, max: 20}),
          // string
          string: chance.string(),
          chanceLength: chance.string({length: 5}),
          chancePool: chance.string({pool: "abcde" }),
          // text
          paragraph: chance.paragraph(),
          paragraphSentences: chance.paragraph({sentences: 3}),
          sentence: chance.sentence(),
          sentenceWord:chance.sentence({words: 5}), 
          // syllable
          syllable: chance.syllable(),
          // wird
          word: chance.word(),
          wordSyllables: chance.word({syllables: 3}),
          wordLength: chance.word({length: 5}),
          // age
          age: chance.age(),
          ageChild: chance.age({type: 'child'}),//child,teen,adult,senior
          // birthday
          birthday: chance.birthday(),
          birthdayString: chance.birthday({string: true}),
          birthdayType: chance.birthday({type: 'child'}),
          birthdayYear: chance.birthday({ year: chance.year({ min: 1450, max: 1500 }) }),
          // first
          first: chance.first(),
          firstGender: chance.first({ gender: "female" }),
          firstNat: chance.first({ nationality: "it" }), //us, it
          // gender
          gender: chance.gender(),
          // last
          last: chance.last(),
          lastGender: chance.last({ gender: "female" }),
          lastNat: chance.last({ nationality: "it" }), //us, it
          // name
          name: chance.name(),
          nameMiddle: chance.name({middle: true}),
          nameMidinit: chance.name({middle_initial: true}),
          namePrefix: chance.name({prefix: true}),
          nameSuffix: chance.name({ suffix: true }),
          nameGender: chance.name({ gender: "male" }),
          nameNat: chance.name({nationality: 'it'}),
          // prefix
          prefix: chance.prefix(),
          prefixFull: chance.prefix({full: true}), 
          // suffix
          suffix: chance.suffix(),
          suffix: chance.suffix({full: true}),
          // android_id 
          android_id: chance.android_id(),
          apple_token: chance.apple_token(),
          bb_pin: chance.bb_pin(),
          wp7_anid: chance.wp7_anid(),
          wp7_anid: chance.wp8_anid2(),
          // avatar
          avatar: chance.avatar(),
          avatarProtocol: chance.avatar({protocol: 'https'}),
          avatarFileExtension: chance.avatar({fileExtension: 'jpg'}),
          avatarEmail: chance.avatar({email: 'mail@victorquinn.com'}),
          // color
          color: chance.color(),
          colorFormatHex: chance.color({format: 'hex'}),
          colorFormatShortHex: chance.color({format: 'shorthex'}),
          colorFormatRgb: chance.color({format: 'rgb'}),
          colorFormat0x: chance.color({format: '0x'}),
          colorGrayscale: chance.color({grayscale: true}),
          colorCasing: chance.color({casing: 'upper'}),
          // domain
          domain: chance.domain(),
          domaintld: chance.domain({tld: 'com'}),
          // email
          email: chance.email(),
          emailDomain: chance.email({domain: "example.com"}),
          // fbid
          facebookid: chance.fbid(),
          // google_analytics
          google_analytics: chance.google_analytics(),
          // hashtag
          hashtag: chance.hashtag(),
          // ip
          ip: chance.ip(),
          ipv6: chance.ipv6(),
          // klout score
          klout: chance.klout(),
          // tld ['com', 'org', 'edu', 'gov', 'uk', 'net', 'io']
          tld: chance.tld(),
          // twitter
          twitter: chance.twitter(),
          // url
          url: chance.url(),
          urlDomain: chance.url({domain: 'www.socialradar.com'}),
          urlPath: chance.url({path: 'images'}),
          urlExtensions: chance.url({extensions: ['gif', 'jpg', 'png']}),
          // address
          address: chance.address(),
          addressShort_suffix: chance.address({short_suffix: true}),
          // altitude
          altitude: chance.altitude(),
          altitudeFixed: chance.altitude({ fixed: 7 }),
          altitudeMax: chance.altitude({ max: 1000 }),
          // areacode
          areacode: chance.areacode(),
          // city
          city: chance.city(),
          // coordinates
          coordinates: chance.coordinates(),
          coordinatesFixed: chance.coordinates({fixed: 2}),
          // country
          country: chance.country(),
          countryFill: chance.country({ full: true }),
          // depth
          depth: chance.depth(),
          depthFixed: chance.depth({ fixed: 2 }),
          depthMin: chance.depth({ min: -1000 }),
          // geohash
          geohash: chance.geohash(),
          geohashLength: chance.geohash({ length: 5 }),
          // latitude
          latitude: chance.latitude(),
          latitudeFixed: chance.latitude({fixed: 7}),
          // longitude
          longitude: chance.longitude(),
          longitudeFixed: chance.longitude({fixed: 7}),
          // phone
          phone: chance.phone(),
          phoneFormatted: chance.phone({ formatted: false }),
          phoneCountry: chance.phone({ country: "fr" }),
          phoneMobile: chance.phone({ country: "fr", mobile: true }),
          // postal
          postal: chance.postal(),
          // province
          province: chance.province(),
          provinceFull: chance.province({full: true}),
          province: chance.province({country: 'it', full: true}),
          // state
          state: chance.state(),
          stateFull: chance.state({ full: true }),
          stateTerrity: chance.state({ territories: true }),
          stateArmed: chance.state({ armed_forces: true }),
          stateCountry: chance.state({ country: 'it' }),
          // street
          street: chance.street(),
          streetCountry: chance.street({country:"it"}),
          // zip
          zip: chance.zip(),
          zipPlusfour: chance.zip({plusfour: true}),
          // ampm
          ampm: chance.ampm(),
          // time
          date: chance.date(),
          dateString: chance.date({string: true}),
          dateStringAmerican: chance.date({string: true, american: false}),
          dateYear: chance.date({year: 1983}),
          dateMonth: chance.date({month: 2}),
          dateDay: chance.date({day: 23}),
          hammertime: chance.hammertime(),
          hour: chance.hour(),
          hourTwentyFour: chance.hour({twentyfour: true}),
          millisecond: chance.millisecond(),
          minute: chance.minute(),
          month: chance.month(),
          second: chance.second(),
          timestamp: chance.timestamp(),
          timezone: chance.timezone(),
          year: chance.year(),
          yearMinMax: chance.year({min: 1900, max: 2100}),
          // Finance
          cc: chance.cc(),
          ccType: chance.cc({type: 'Mastercard'}),
          ccTypeMc: chance.cc({type: 'mc'}),
          cc_type: chance.cc_type(),
          cc_typeRaw: chance.cc_type({raw: true}),
          // currency
          currency: chance.currency(),
          currency_pair: chance.currency_pair(),
          // dollar
          dollar: chance.dollar(),
          dollarMax: chance.dollar({max: 250}),
          // exp
          exp: chance.exp(),
          expRaw: chance.exp({raw: true}),
          // exp_month
          exp_month: chance.exp_month(),
          exp_monthFuture: chance.exp_month({future: true}),
          // exp_year
          exp_year: chance.exp_year(),
          // Helpers
          capitalize: chance.capitalize("lijincai"),
          // Mixins
          MixinsUser: chance.user(),
          MixinsSocialUser: chance.social_user(),
          // pad
          pad: chance.pad(81,5),
          padWithZ: chance.pad(81,4,'Z'),
          // pick
          pickone: chance.pickone(['alpha', 'bravo', 'charlie', 'delta', 'echo']),
          pickset: chance.pickset(['alpha', 'bravo', 'charlie', 'delta', 'echo'], 3),
          // set
          clast: chance.last(),
          // shuffle
          shuffle: chance.shuffle(['alpha', 'bravo', 'charlie', 'delta', 'echo']),
          // dice
          d4: chance.d4(),
          d6: chance.d6(),
          d8: chance.d8(),
          d10: chance.d10(),
          d12: chance.d12(),
          d20: chance.d20(),
          d30: chance.d30(),
          d100: chance.d100(), 
          // guid
          guid: chance.guid(),
          hash: chance.hash(),
          hashLength: chance.hash({length: 25}),
          hashCasing: chance.hash({casing: 'upper'}),
          // hidden
          // Return the list of cc types
          cc_typesHidden:chance.cc_types(),
          // Return a new Mersenne Twister
          mersenne_twister: chance.mersenne_twister(),
          // Optionally provide a seed for that twister
          mersenne_twister: chance.mersenne_twister(12345),
          // Return our list of name prefixes
          months: chance.months(),  
          // Return our list of name prefixes
          name_prefixes: chance.name_prefixes(),
          // Return the list of provinces
          provinces: chance.provinces(), 
          // Return the list of states
          states: chance.states(), 
          // Return a random street suffix
          street_suffix: chance.street_suffix(),
          // Return the list of street suffixes
          street_suffixes: chance.street_suffixes(),
          // n
          nEmail: chance.n(chance.email, 5),
          nEmailDomain: chance.n(chance.email, 5, { domain: "didichuxing.com" }),
          normal: chance.normal(),
          normalMean: chance.normal({mean: 100}),
          normalMeanDev: chance.normal({mean: 100, dev: 15}),
          // radio
          radio: chance.radio(),
          radioEast: chance.radio({side: 'east'}),
          rpg: chance.rpg("3d10"),//chance.rpg('#d#'),
          rpgSum: chance.rpg("3d10",{sum: true}),//chance.rpg('#d#', {sum: true}),
          // tv
          tv: chance.tv(),
          tvWest: chance.tv({side: "west"}),
          // unique
          unique: chance.unique(chance.state, 5),
          // uniqueFunc: chance.unique(chance.currency, 2, {
          //     comparator: function(err, val) {
          //         return arr.reduce(function(acc, item) {
          //             return acc || (item.code === val.code);
          //         }, false);
          //     }
          // }),
          uniqueInterger: chance.unique(chance.integer, 10, {min: 0, max: 100}),
          // weighted
          weighted0: chance.weighted(['a', 'b'], [100, 1]),
          weighted1: chance.weighted(['a', 'b', 'c', 'd'], [1, 2, 3, 4]),
          weighted2: chance.weighted(['a', 'b', 'c', 'd'], [1, 2, 3, 4]),
          weighted3: chance.weighted(['a', 'b', 'c', 'd'], [0.1, 0.2, 0.3, 0.4]),
          weighted4: chance.weighted(['a', 'b', 'c', 'd'], [100, 200, 300, 400]),
          weighted5: chance.weighted(['a', 'b', 'c', 'd'], [17, 34, 51, 68]),
          weighted6: chance.weighted(['a', 'b', 'c', 'd'], [0.17, 0.34, 0.51, 0.68]),
        }
      })
    }
  }
})();

module.exports = db;