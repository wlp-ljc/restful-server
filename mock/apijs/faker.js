var _ = require("lodash");
var faker = require('faker');

// 使用lodash和fakerjs生成随机数据
// http://marak.github.io/faker.js/

// faker.locale = "zh_CN";

var db = (function(){
  return {
    "faker":{
      status: 0,
      msg: 'success',
      data:_.times(5,function (n) { 
    	return {
    	  // address
	      zipCode: faker.address.zipCode(),
	      city: faker.address.city(),
	      cityPrefix: faker.address.cityPrefix(),
	      citySuffix: faker.address.citySuffix(),
	      citySuffix: faker.address.citySuffix(),
	      streetName: faker.address.streetName(),
	      streetAddress: faker.address.streetAddress(),
	      streetSuffix: faker.address.streetSuffix(),
	      streetPrefix: faker.address.streetPrefix(),
	      econdaryAddress: faker.address.secondaryAddress(),
	      county: faker.address.county(),
	      country: faker.address.country(),
	      countryCode: faker.address.countryCode(),
	      state: faker.address.state(),
	      stateAbbr: faker.address.stateAbbr(),
	      latitude: faker.address.latitude(),
	      longitude: faker.address.longitude(),
	      // commerce
		  color: faker.commerce.color(),
		  department: faker.commerce.department(),
		  productName: faker.commerce.productName(),
		  price: faker.commerce.price(),
		  productAdjective: faker.commerce.productAdjective(),
		  productMaterial: faker.commerce.productMaterial(),
		  product: faker.commerce.product(),
		  // company
		  suffixes: faker.company.suffixes(),
		  companyName: faker.company.companyName(),
		  companySuffix: faker.company.companySuffix(),
		  catchPhrase: faker.company.catchPhrase(),
		  bs: faker.company.bs(),
		  catchPhraseAdjective: faker.company.catchPhraseAdjective(),
		  catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
		  catchPhraseNoun: faker.company.catchPhraseNoun(),
		  bsAdjective: faker.company.bsAdjective(),
		  bsBuzz: faker.company.bsBuzz(),
		  bsNoun: faker.company.bsNoun(),
		  // date
		  past: faker.date.past(),
		  future: faker.date.future(),
		  between: faker.date.between(),
		  recent: faker.date.recent(),
		  month: faker.date.month(),
		  weekday: faker.date.weekday(),
		  // fake
		  fake: faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"),
		  // finance
		  account: faker.finance.account(),
		  accountName: faker.finance.accountName(),
		  mask: faker.finance.mask(),
		  amount: faker.finance.amount(),
		  transactionType: faker.finance.transactionType(),
		  currencyCode: faker.finance.currencyCode(),
		  currencyName: faker.finance.currencyName(),
		  currencySymbol: faker.finance.currencySymbol(),
		  bitcoinAddress: faker.finance.bitcoinAddress(),
		  // hacker
		  abbreviation: faker.hacker.abbreviation(),
		  adjective: faker.hacker.adjective(),
		  noun: faker.hacker.noun(),
		  verb: faker.hacker.verb(),
		  ingverb: faker.hacker.ingverb(),
		  phrase: faker.hacker.phrase(),
		  // helpers: faker.helpers
		  randomize: faker.helpers.randomize(),
		  slugify: faker.helpers.slugify(),
		  replaceSymbolWithNumber: faker.helpers.replaceSymbolWithNumber(),
		  replaceSymbols: faker.helpers.replaceSymbols(),
		  shuffle: faker.helpers.shuffle(),
		  mustache: faker.helpers.mustache(),
		  createCard: faker.helpers.createCard(),
		  contextualCard: faker.helpers.contextualCard(),
		  userCard: faker.helpers.userCard(),
		  createTransaction: faker.helpers.createTransaction(),
		  // image
		  image: faker.image.image(),
		  avatar: faker.image.avatar(),
		  imageUrl: faker.image.imageUrl(),
		  abstract: faker.image.abstract(),
		  animals: faker.image.animals(),
		  business: faker.image.business(),
		  cats: faker.image.cats(),
		  city: faker.image.city(),
		  food: faker.image.food(),
		  nightlife: faker.image.nightlife(),
		  fashion: faker.image.fashion(),
		  people: faker.image.people(),
		  nature: faker.image.nature(),
		  sports: faker.image.sports(),
		  technics: faker.image.technics(),
		  transport: faker.image.transport(),
 		  // internet
 		  avatar: faker.internet.avatar(),
 		  email: faker.internet.email(),
 		  exampleEmail: faker.internet.exampleEmail(),
 		  userName: faker.internet.userName(),
 		  protocol: faker.internet.protocol(),
 		  url: faker.internet.url(),
 		  domainName: faker.internet.domainName(),
 		  domainSuffix: faker.internet.domainSuffix(),
 		  domainWord: faker.internet.domainWord(),
 		  ip: faker.internet.ip(),
 		  userAgent: faker.internet.userAgent(),
 		  color: faker.internet.color(),
 		  mac: faker.internet.mac(),
 		  password: faker.internet.password(),
 		  // lorem
 		  word: faker.lorem.word(),
 		  words: faker.lorem.words(),
 		  sentence: faker.lorem.sentence(),
 		  sentences: faker.lorem.sentences(),
 		  paragraph: faker.lorem.paragraph(),
 		  paragraphs: faker.lorem.paragraphs(),
 		  text: faker.lorem.text(),
 		  lines: faker.lorem.lines(),
 		  // name
 		  firstName: faker.name.firstName(),
 		  lastName: faker.name.lastName(),
 		  findName: faker.name.findName(),
 		  jobTitle: faker.name.jobTitle(),
 		  prefix: faker.name.prefix(),
 		  suffix: faker.name.suffix(),
 		  title: faker.name.title(),
 		  jobDescriptor: faker.name.jobDescriptor(),
 		  jobArea: faker.name.jobArea(),
 		  jobType: faker.name.jobType(),
 		  // phone
 		  phoneNumber: faker.phone.phoneNumber(),
 		  phoneNumberFormat: faker.phone.phoneNumberFormat(),
 		  phoneFormats: faker.phone.phoneFormats(),
 		  // random
   		  number: faker.random.number(),
   		  arrayElement: faker.random.arrayElement(),
   		  objectElement: faker.random.objectElement(),
   		  uuid: faker.random.uuid(),
   		  boolean: faker.random.boolean(),
   		  word: faker.random.word(),
   		  words: faker.random.words(),
   		  image: faker.random.image(),
   		  locale: faker.random.locale(),
   		  alphaNumeric: faker.random.alphaNumeric(),
   		  // system
   		  fileName: faker.system.fileName(),
   		  commonFileName: faker.system.commonFileName(),
   		  mimeType: faker.system.mimeType(),
   		  commonFileType: faker.system.commonFileType(),
   		  commonFileExt: faker.system.commonFileExt(),
   		  fileType: faker.system.fileType(),
   		  fileExt: faker.system.fileExt(),
   		  directoryPath: faker.system.directoryPath(),
   		  filePath: faker.system.filePath(),
   		  semver: faker.system.semver(),
    	}
    })
    }
  }
})();

module.exports = db;
