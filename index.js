"use strict";
//cheerio boc tach html tra ve nhung gi can thiet thoi
//var cheerio = require('cheerio');
//resquest lay du lieu tu web khac
//var request = require('request');
//express server
var express = require('express');
//bodyparser dung cho react
//var bodyParser = require('body-parser');
//var parser = bodyParser.urlencoded({extended:false});

var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');
var port = process.env.PORT || 3000;
//app.listen(process.env.PORT || 3000);
app.listen(port, function() {
    console.log("App is running on port " + port);
});
console.log('server is runing port :3000');
console.log('http://localhost:3000/');

var mang = ['phong vu','bach khoa','dien may xanh','hoang long','tgdd'];

app.get('/',function(req, res){
    res.render('trangchu');
    //res.send(mang);
});
/*s
app.post('/getNotes',function(req,res){
    res.send(mang);
});

app.post('/add',parser,function(req,res){
    var newNode = req.body.node;//tao node
    mang.push(newNode);//push vao mang
    res.send(mang);//tra ve cho client
});

app.post('/delete',parser,function(req,res){
    var id = req.body.idXoa;
    mang.splice(id,1);
    res.send(mang);
});
app.post('/update',parser,function(req,res){
    var id = req.body.idSua;
    mang[id]= req.body.noiDung;
    res.send(mang);
});
*/

/*app.get('/',function(req, res){
 //su dung request de lay 1 trang web ve
 request("http://vnexpress.net",function(error,response,body){
 if(error){
 console.log(error);
 res.render('trangchu1',{html:"co loi xay ra"})
 }
 else {
 //console.log(body);
 var $ = cheerio.load(body);
 var ds = $(body).find("a.txt_link");
 /!*ds.each(function(i,e){
 //console.log($(this).text())
 console.log( e['attribs']['href']);
 });*!/
 res.render('trangchu1',{html:ds})
 }
 });

 // res.render('trangchinh');
 });*/
