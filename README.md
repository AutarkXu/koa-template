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
