var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var blogsSQL = require('../db/blogsSql');
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
router.get('/', function (req, res, next) {
    // 从连接池获取连接 
        pool.getConnection(function (err, connection) {
            // 获取前台页面传过来的参数  
            var param = req.query || req.params;
            // 建立连接 增加一个用户信息 
            if (err) {
                console.log(err);
                return;
            }
            var sql = `update blogs set online = ${param.state} where id = ${param.id}`;
            console.log(sql);
            connection.query(sql, '', function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        message: 'ok',
                        value: result
                    };
                }

                // 以json形式，把操作结果返回给前台页面     
                responseJSON(res, result);

                // 释放连接  
                connection.release();

            });
        });

});

module.exports = router;