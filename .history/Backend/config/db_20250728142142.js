import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
  
const db = mysql.createConnection({
    host: process.env.DB_HOST,
        