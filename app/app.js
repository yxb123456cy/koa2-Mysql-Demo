const Koa = require('koa');

const app = new Koa();


app.listen(3006, () => {
  console.log("Server started on port 3006");
})
