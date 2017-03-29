var _ = require("lodash");
var {Random} = require('mockjs')

// 使用lodash和mockjs生成随机数据
// http://mockjs.com/examples.html
var db = (function(){
  return {
  	"detail": {
		  "status": 1,
		  "errmsg": "SUCCESS",
		  "data": {
		    "ride_info": {
		      "id": "8937568324404404255",
		      "city_id": "1",
		      "start_address": "数字山谷B区",
		      "end_address": "当代城市家园",
		      "start_lat": "40.043620000000",
		      "start_lng": "116.289740000000",
		      "end_lat": "40.045070000000",
		      "end_lng": "116.321470000000",
		      "company_id": "7818735858256994946",
		      "user_id": "7818735858861236869",
		      "user_name": "13552090147",
		      "user_phone": "13552090147",
		      "user_type": "2",
		      "passenger_num": "1",
		      "departure_begintime": "2017-03-21 21:00:00",
		      "departure_endtime": "2017-03-21 21:15:00",
		      "end_time": "1970-01-01 00:00:00",
		      "price": "0.00",
		      "driver_price": "0.00",
		      "passenger_price": "0.00",
		      "use_car_srv": "206",
		      "order_id": "1234567890",
		      "out_order_id": "2",
		      "create_time": "2017-03-22 10:29:06",
		      "update_time": "2017-03-22 14:56:42",
		      "master_id": "8928308773675098325",
		      "status": "4",
		      "order_status": "9",
		      "status_map": "已成单"
		    },
		    "ride_match_group": [
		      {
		        "id": "8928308773675098325",
		        "city_id": "1",
		        "start_address": "中关村软件园-6号门",
		        "end_address": "回龙观新村中区(东门)",
		        "start_lat": "40.042650000000",
		        "start_lng": "116.290940000000",
		        "end_lat": "40.062330000000",
		        "end_lng": "116.312190000000",
		        "company_id": "7818735858256994946",
		        "user_id": "7818735858861236868",
		        "user_name": "wjx",
		        "user_phone": "18722605836",
		        "user_type": "2",
		        "passenger_num": "2",
		        "departure_begintime": "2017-10-09 08:01:00",
		        "departure_endtime": "2017-10-09 08:15:00",
		        "end_time": "2017-10-09 09:15:00",
		        "price": "40.80",
		        "driver_price": "40.80",
		        "passenger_price": "20.40",
		        "use_car_srv": "206",
		        "order_id": "1234567891",
		        "out_order_id": "2",
		        "create_time": "2017-03-20 20:09:28",
		        "update_time": "2017-03-22 14:49:56",
		        "master_id": "8928308773675098325",
		        "status": "2",
		        "order_status": "0",
		        "status_map": "已成单"
		      }
		    ],
		    "order_info": {
		      "city": "1",
		      "departure_time": "2017-03-28 14:15:01",
		      "require_level": "200",
		      "strive_level": "200",
		      "strive_time": "2017-03-21 21:00:58",
		      "begin_charge_time": "2017-03-21 21:00:58",
		      "finish_time": "2017-03-22 21:30:01",
		      "normal_distance": "100",
		      "normal_time": "30",
		      "total_price": "60",
		      "status": "6",
		      "status_html": "待支付",
		      "driverInfo": {
		        "area": "1",
		        "avatarUrl": "",
		        "carColor": "白",
		        "carType": "大众速腾",
		        "card": "京FA7318",
		        "cntOrder": 174,
		        "company": "车主之家-车主俱乐部望京店",
		        "name": "王师傅",
		        "phone": "13910984703"
		      }
		    }
		  }
		}
	}
})();

module.exports = db;