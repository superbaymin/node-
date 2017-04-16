/**
 * Created by Administrator on 2017/4/14.
 */
/*
* 应用程序的启动
* */
var express  = require('express');
var swig = require('swig');
var app = express();
app.use('/',express.static(__dirname+'/web'))
app.engine('html',swig.renderFile)
app.set('view engine','html')
swig.setDefaults({cache:false})
app.listen(8081);
