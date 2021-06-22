// ======================== //
// DATABASE SERVICE         //
// ======================== //

import { promisify } from 'util'
import mysql from 'mysql'

class Database {

    constructor(host,port,user,password,database) {
        this.config = {
            host: host,
            port: port,
            user: user,
            password: password,
            database: database
        }
    }

    getQuery(){
        // Create pool
        const pool = mysql.createPool(this.config)

        // Get connection
        pool.getConnection((err) => {
            if (err) throw err
        })

        // Promisify Query
        return promisify(pool.query).bind(pool)
    }

}

module.exports = Database