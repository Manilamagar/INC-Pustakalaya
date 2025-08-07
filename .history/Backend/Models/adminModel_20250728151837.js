// Database connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_db_user',
    password: 'your_db_password',
    database: 'your_db_name',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const AdminModel = {
    // Create a new admin
    async createAdmin(admin) {
        const { username, password, email } = admin;
        const [result] = await pool.execute(
            'INSERT INTO admins (username, password, email) VALUES (?, ?, ?)',