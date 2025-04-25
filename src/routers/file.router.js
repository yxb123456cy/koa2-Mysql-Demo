const Router = require('@koa/router');
const RouterPath = require("../constants/router.path");



const fileRouter = new Router({prefix: RouterPath.fileRouterPrefix});



module.exports = fileRouter;