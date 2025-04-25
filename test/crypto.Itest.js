const crypto = require("crypto");


console.log(crypto.createHash('md5').update("mybatisPlus").digest('hex'));