const Koa = require('koa');
const compose = require('koa-compose');
let authRouter = require('../routers/auth.router');
let commentRouter = require('../routers/comment.router');
let fileRouter = require('../routers/file.router');
let labelRouter = require('../routers/label.router');
let momentRouter = require('../routers/moment.router');
let userRouter = require('../routers/user.router');
const bodyParser = require('koa-bodyparser');
const multer = require('@koa/multer');
//创建formParser对象;
const formParser = multer();
const app = new Koa();

//使用JSON请求解析中间件
app.use(bodyParser());
//使用Form表单请求解析中间件;
app.use(formParser.any());
// 合并多个路由中间件
const allRoutes = compose([
  userRouter.routes(),
  userRouter.allowedMethods(),
  authRouter.routes(),
  authRouter.allowedMethods(),
  commentRouter.routes(),
  commentRouter.allowedMethods(),
  fileRouter.routes(),
  fileRouter.allowedMethods(),
  labelRouter.routes(),
  labelRouter.allowedMethods(),
  momentRouter.routes(),
  momentRouter.allowedMethods(),
]);
//koa-compose合并路由;
app.use(allRoutes);
//导出app对象;
module.exports = app;
