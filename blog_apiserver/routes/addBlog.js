var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
var moment = require('moment');

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

router.post('/', function(req, res, next){
    pool.getConnection(function(err, connection){
        var param = req.body;
        // 建立连接 增加一个用户信息 
        if (err) {
            console.log(err);
            return;
        }
        let sql = `insert INTO blogs (content, \`like\`, browse, title, tags, time, \`online\`) values("${param.content}", 0, 0, "${param.title}", "${param.tags|| ''}", "${moment().format('YYYY-MM-DD')}", ${param.online})`;
        console.log(sql)
        connection.query(sql, '', function (errs, total) {

            console.log(total);
            // var row = total[0]['count(*)']
            connection.query(sql, '', function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        message: 'ok',
                        value: result
                    };
                }
                console.log(result)

                // 以json形式，把操作结果返回给前台页面     
                responseJSON(res, result);

                // 释放连接  
                connection.release();

            });
        });
    })
})
module.exports = router;