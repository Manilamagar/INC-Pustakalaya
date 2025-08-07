const router = express.Router();

// MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',