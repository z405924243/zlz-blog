var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var moment = require('moment');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

// var conn = mysql.createConnection(dbConfig.mysql);
// conn.connect();

// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

/* GET home page. */
router.post('/', function (req, res, next) {
    // 从连接池获取连接 
        pool.getConnection(function (err, connection) {
            // 获取前台页面传过来的参数  
            var param = req.body;

            console.log(param);
            // 建立连接 增加一个用户信息 
            if (err) {
                console.log(err);
                return;
            }


            var sql = `INSERT INTO messages (nickName, email, blog, message, replyMsgId, time) VALUES ('${param.nickName}', '${param.email}', ${param.blog+''||null}, '${param.message}', ${param.replyMsgId||null}, str_to_date('${moment().format('YYYY-MM-DD HH:MM:SS')}', '%Y-%m-%d %H:%i:%s'))`;
            connection.query(sql, '', function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        message: 'ok',
                        value: result
                    };
                }
                console.log(err)
                // 以json形式，把操作结果返回给前台页面     
                responseJSON(res, result);

                // 释放连接  
                connection.release();

            });
        });

});

module.exports = router;