const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const multer = require('@koa/multer');
//创建formParser对象;
const formParser = multer();
const app = new Koa();
//使用JSON请求解析中间件
app.use(bodyParser());
//使用Form表单请求解析中间件;
app.use(formParser.any());

//导出app对象;
module.exports = app;
