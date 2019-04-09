'use strict'

let redisHelper = require('../../utils/redisHelper');
let Config = require('../../config');

// redisHelper.hset(`${Config.dapp.trx.redisPrefix.dappManage}中文`,'中文field','中文value');
// redisHelper.hget(`${Config.dapp.trx.redisPrefix.dappManage}中文`,'中文field').then(data=>{
//     console.log(data)
// })

// redisHelper.HMSET(`${Config.dapp.trx.redisPrefix.dappAd}中文`, {
//     w: "我日",
//     r: "我日日日日",
//     i: "nitemedezaiganma"
// }).then(data => {
//         console.log(data)
//     }
// )

// redisHelper.hgetall(`${Config.dapp.trx.redisPrefix.dappAd}中文`).then(data=>{
//     console.log(data)
// })

redisHelper.hexists(`${Config.dapp.trx.redisPrefix.dappManage}中文`,'中文field').then(data=>{
    console.log(data)
})

// redisHelper.hdel(`${Config.dapp.trx.redisPrefix.dappManage}中文`,'中文field').then(data=>{
//     console.log(data);
// })
