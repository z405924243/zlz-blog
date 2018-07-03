var express = require('express');
var router = express.Router();
var fs = require('fs');

// var json = {
//   text:"hello,world"
// }

// var document = "G:/个人项目/zlz-blog/blog_html/testPage.html";
var __dirname = "G:/个人项目/zlz-blog/blog_html";

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // fs.readFile(document, function (err,data) {
  //   if (err) {
  //     res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
  //     res.end();
  //   } else {
  //     res.write(data); //将index.html显示在客户端
  //     res.end();

  //   }
  res.sendfile(`${__dirname}/testPage.html`)
  // res.sendfile(`${__dirname}/testPage.html`)
});

module.exports = router;