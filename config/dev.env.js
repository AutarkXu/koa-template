const config = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: 3306,
        database: 'db',
        dateString: false,
        connectionLimit: 10,
        queueLimit: 0
    },
    redis: {
        host: '127.0.0.1',
        port: '6379',
        password: '123456'
    },
    mongo: {
        host: '127.0.0.1',
        port: 27017,
        password: "",
        dbName: "db"
    }
}

module.exports = config
