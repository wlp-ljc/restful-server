var faker =require("faker");
var _ = require("lodash");
var Chance = require('chance'),
    chance = new Chance();

var db = function(){
  faker.locale = "zh_CN";
  return {
    order2: {
      status: 0,
      msg: 'successs',
      data: _.times(2,function (n) {
        return {
          id: n,
          status: chance.character({pool: '12345'}),
          name: faker.name.findName(),
          phone: chance.phone(),
          city: faker.address.city(),
          company: faker.company.companyName(),
          email: faker.internet.email(),
          avatar: faker.internet.avatar()
        }
      })
    }
  }
}

module.exports = db();