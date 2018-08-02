var blogsSQL = {  
    // insert:'INSERT INTO blogs(uid,userName) VALUES(?,?)', 
    queryAll:'SELECT * FROM blogs',  
    // getUserById:'SELECT * FROM blogs WHERE uid = ? ',
    getBlogInit:'SELECT * FROM blog_info', 
    getLinks:'SELECT * FROM links', 
    getMessage:'select * from messages',
  };
module.exports = blogsSQL;