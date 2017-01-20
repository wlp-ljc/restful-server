#JsonServer
    
    可以用来创建RestApi，使用非常方便。

# 1 json-server的基本使用
##安装

可以通过npm安装json-server
    
    npm install -g json-server

## 基本使用
1 创建一个就送文件

比如官方的JSON文件
    
    {
        "posts": [
         { "id": 1, "title": "json-server", "author": "typicode" }
        ],
        "comments": [
         { "id": 1, "body": "some comment", "postId": 1 }
        ],
        "profile": { "name": "typicode" }
    }

2 启动server

使用json-server 启动服务

    json-server --watch db.json

#2 faker.js\chance.js\mockjs

[faker.js](https://tonicdev.com/npm/) 和 [chance.js](http://chancejs.com/) 是用来生成随机测试数据的包。

## faker.js

## 安装使用

### Browser

    <script src = "faker.js" type = "text/javascript"></script>
    <script>
      var randomName = faker.name.findName(); // Caitlyn Kerluke
      var randomEmail = faker.internet.email(); // Rusty@arne.info
      var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    </script>
    

### Nodejs 

    var faker = require('faker');
    var randomName = faker.name.findName(); 
    var randomEmail = faker.internet.email();
    var randomCard = faker.helpers.createCard(); 
    containing many properties

## API Brower

    
        faker.js可以随机生成address、commerce、company、date、finance、hacker、helpers、image、internet、lorem、
        phone等多种随机数据，具体可参见https://github.com/Marak/faker.js

        除此之外，还可以利用faker.locale = "de" 设置本地模式 可以设置为中文模式，但是中文模式生成的随机数据较为奇怪

## chance.js

    chance.js与faker.js较为类似，具体使用方法可以参照http://chancejs.com/


# restful服务器

结合使用json-server、faker.js和chance.js设置restful API 服务器

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

## 使用方法

    1. 下载上传的JsonServer文件
    2. 使用npm install 安装资源文件
    3. 使用npm run mock 启动服务


