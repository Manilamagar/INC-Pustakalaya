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
            [username, password, email]
        );
        return result.insertId;
    },

    // Get admin by ID
    async getAdminById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM admins WHERE id = ?',
            [id]
        );
        return rows[0];
    },

    // Get admin by username
    async getAdminByUsername(username) {
        const [rows] = await pool.execute(
            'SELECT * FROM admins WHERE username = ?',
            [username]
        );
        return rows[0];
    },

    // Update admin
    async updateAdmin(id, admin) {
        const { username, password, email } = admin;
        const [result] = await pool.execute(