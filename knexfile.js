require('dotenv').config({path: './.env'});
module.exports  = {
    development: {
        migrations: {
            directory: './src/migrations',
            tableName: 'migrations'
        },
        seeds: {
            directory: './src/seeds'
        },
        client: 'mysql',
        connection: {
            host: 'mysql_database',
            user: 'thailand_province',
            password: 'th_province',
            database: 'thailand_province',
            charset: 'utf8',
            port: '3306'            
        }
    },
    production: {
        migrations: {
            directory: './src/migrations',
            tableName: 'migrations'
        },
        seeds: {
            directory: './src/seeds'
        },
        client: 'mysql',
        connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB_NAME,
            charset: 'utf8',
            port: process.env.MYSQL_PORT         
        }
    }
};