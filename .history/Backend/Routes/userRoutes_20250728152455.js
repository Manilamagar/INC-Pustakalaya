const router = express.Router();

// MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_mysql_user',
    password: 'your_mysql_password',
    database: 'your_database_name',
});

// Get all users