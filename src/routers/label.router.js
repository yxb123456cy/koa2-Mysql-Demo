const Router = require('@koa/router');
const RouterPath = require("../constants/router.path");



const labelRouter = new Router({prefix: RouterPath.labelRouterPrefix});


module.exports = labelRouter;
