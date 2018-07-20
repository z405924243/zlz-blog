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
router.post('/', function (req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数  
        var param = req.body;
        // 建立连接 增加一个用户信息 
        if (err) {
            console.log(err);
            return;
        }

        /*期望的返回值
         * {
         * pageNum 页码
         * pageSize 页面大小
         * total 总条数
         * value 值
         * }
         */
        let sql = `SELECT * FROM blogs LIMIT ${(param.pageNum-1) * param.pageSize},${param.pageSize}`;


        connection.query('select count(*) from blogs', '', function (errs, total) {

            console.log(total);
            var row = total[0]['count(*)']
            connection.query(sql, '', function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        message: 'ok',
                        total:row,
                        lastPage:Math.ceil(row/param.pageSize),
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

    });

    // conn.query(blogsSQL.queryAll, function (err, rows, fields) {
    //     debugger
    //     if (err) console.log(err);
    //     console.log('The solution is: ', rows[0].content);

    //     // 以json形式，把操作结果返回给前台页面     
    //     responseJSON(res, rows[0].content);
    //     conn.end();
    // });

});

module.exports = router;