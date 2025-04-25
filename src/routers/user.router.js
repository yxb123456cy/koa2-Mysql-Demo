const Router = require('@koa/router');
const RouterPath = require("../constants/router.path");


const userRouter = new Router({prefix: RouterPath.userRouterPrefix});

module.exports = userRouter;
