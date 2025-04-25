
const Router = require('@koa/router');
const  RouterPath = require("../constants/router.path");
const momentRouter = new Router({prefix: RouterPath.momentRouterPrefix});


module.exports = momentRouter;
