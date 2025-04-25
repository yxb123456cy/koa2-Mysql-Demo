const Router = require('@koa/router');
const RouterPath = require("../constants/router.path");

const commentRouter = new Router({prefix: RouterPath.commentRouterPrefix});

module.exports = commentRouter;