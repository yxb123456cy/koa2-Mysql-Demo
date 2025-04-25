//.env 文件解析;
const dotenv = require('dotenv')
//fs 模块
const fs = require('fs');
const path = require('path');//path模块;

dotenv.config({path: path.resolve(__dirname, '../../.env')});
//console.log(process.env.APP_HOST);
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));
// console.log("打印公钥")
// console.log(PUBLIC_KEY.toString());
// console.log("打印私钥")
// console.log(PRIVATE_KEY.toString());
//导出;
module.exports = {
  APP_HOST,
  APP_NAME,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;