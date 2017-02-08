#JsonServer
    
    构建本地mock-server服务器，实现前后端分离

# 1 使用方法
  
    git clone https://github.com/wlp-ljc/restful-server.git
    npm install 
    npm run mock

# 2 使用说明

项目目录结构

        --mock
          --apijson                                            数据固定接口
             --db.json
             --order.json
          --apijs                                              随机化固定接口     
             --db.js
             --order.json
          --logs                                               日志
             --output.log      
          --utils                                              工具方法
             --util.js
          --index.js                                           数据生成主js
          --routes.json                                        路由映射

## apijson

>apijson目录下可以定义json文件，适用于数据固定的接口，如首页菜单，定义方式类似如下

    {
      "getIndexMenu": {
        "status": 0, 
        "msg": "success", 
        "data": { 
            ...  
        }
      }
    }


## apijs

>apijs下结合chancejs、mockjs和faker.js，实现随机化的数据

### mock.js    
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
              ....
          }
       }
    }
    module.exports = db;

## routes.json

实现路由的映射

    {
      "/mobile/getIndexMenu": "/getIndexMenu",
      "/mobile/getUserInfo": "/getUserInfo",
    }
