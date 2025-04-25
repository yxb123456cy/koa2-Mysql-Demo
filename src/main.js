const app = require('./app/app');

const globalConfig = require('./app/config');
//启动koa2服务 监听8080端口;
app.listen(globalConfig.APP_PORT, () => {
  console.log(`${globalConfig.APP_NAME} running!`);
  console.log(`app listening on port ${globalConfig.APP_PORT}`);
});
