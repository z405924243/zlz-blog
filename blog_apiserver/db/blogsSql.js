var blogsSQL = {  
    // insert:'INSERT INTO blogs(uid,userName) VALUES(?,?)', 
    queryAll:'SELECT * FROM blogs',  
    // getUserById:'SELECT * FROM blogs WHERE uid = ? ',
    getBlogInit:'SELECT * FROM blog_info', 
    getLinks:'SELECT * FROM links', 
    getMessage:'select a.*,b.message replyMsg,b.nickName replyUserName from messages a LEFT JOIN messages b on a.replyMsgId=b.msgId order by msgId desc',
  };
module.exports = blogsSQL;