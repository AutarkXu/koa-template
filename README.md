<<<<<<< HEAD
# node-template -- the node server template with koa2

### init steps:

1. npm install
2. eslint --init (using popular style -> choose standard style -> yes)

### eslint config (vscode preference setting workspace):

```
{
  "eslint.autoFixOnSave": true,
  "eslint.nodePath": "/usr/local/bin/node",
  "eslint.workingDirectories": ["/app/project"]
}
```

### model:
```
const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const User = sequelize.define('user', {
  userId: Sequelize.STRING,
  password: Sequelize.BIGINT
}, {
  timestamps: false
})

function addUser (userId, password) {
  return new Promise((resolve, reject) => {
    sequelize.sync()
      .then(() => User.create({
        userId,
        password
      }))
      .then(user => {
        console.log('add user: ', user.toJSON())
        resolve(user.toJSON())
      })
  })
}
```


### mysql:
```
const mysqlHelper = require('./controller/mysqlHelper')

// get one row
await mysqlHelper.queryOne('selet * from users')

// get rows
await mysqlHelper.query('selet * from users')
await mysqlHelper.query('selet * from users where userId = ?', [userId])

// update, insert, query
let _pool, _conn
try {
  _pool = await mysqlHelper.getPool()
  _conn = await _pool.getConnection()
  await _conn.beginTransaction()
  await _conn.query('select * from users where userId = ? for update', [userId])  // 'for update' can add the lock
  await _conn.query('insert into user (userId, password) values (?)', [[userId, password]])
  await _conn.query('update user set password = ? where userId = ?', [password, userId])
  await _conn.commit()
} catch (err) {
  if (_conn) {
    await _conn.rollback()
  }
  console.error(err)
} finally {
  if (_conn) {
    await _conn.release()
  }
}
```

### redis
```
const redisHelper = require('./controller/redisHelper')

// get(name)
await redisHelper.get(userId)

// set(name, value, expire) 
await redisHelper.set(userId, 'userId', 5)  // 5 seconds
```

### sequelize
```
const Sequelize = require('sequelize')
const sequelize = require('./model/sequelize')

// create table 'users' with model User
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
})

// add user
sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON())
  })
  
// more info
// http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html
```

### run server
##### pm2
1. install pm2

```
npm install -g pm2
```
2. run server

```
pm2 start ecosystem.json

// reload all node
pm2 reload all
// reload node id is 1
pm2 reload 1

// start all node
pm2 start all
// start node id is 1
pm2 start 1

// stop all node
pm2 stop all
// stop node id is 1
pm2 stop 1

// get node status
pm2 status

// more
pm2 -h
```

##### supervisor (can auto reload)
1. install supervisor

```
npm install -g supervisor
```

2. run server

```
supervisor --harmony app.js
```
=======
# wallet_backend_v1

#### 介绍
{**以下是码云平台说明，您可以替换此简介**
码云是开源中国推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用码云实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

1. xxxx
2. xxxx
3. xxxx

#### 使用说明

1. xxxx
2. xxxx
3. xxxx

#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
>>>>>>> ea85fa65abdf89257fba9f265ecb95ac071e808a
