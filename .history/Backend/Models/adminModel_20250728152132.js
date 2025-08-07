const mysql = require('mysql2/promise');

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
    // Add a new admin and return the created admin view
    async addAdmin(admin) {
        const { username, password, email } = admin;
        const [result] = await pool.execute(
            'INSERT INTO admins (username, password, email) VALUES (?, ?, ?)',
            [username, password, email]
        );
        return await this.getAdminById(result.insertId);
    },

    // Edit admin and return the updated admin view
    async editAdmin(id, admin) {
        const { username, password, email } = admin;
        await pool.execute(
            'UPDATE admins SET username = ?, password = ?, email = ? WHERE id = ?',
            [username, password, email, id]
        );
        return await this.getAdminById(id);
    },

    // Get admin by ID (view)
    async getAdminById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM admins WHERE id = ?',
            [id]
        );
        return rows[0];
    },

    // Get admin by username (view)
    async getAdminByUsername(username) {
        const [rows] = await pool.execute(
            'SELECT * FROM admins WHERE username = ?',
            [username]
        );
        return rows[0];
    },

    // Delete admin and return affectedRows (issue)
    async deleteAdmin(id) {
        const [result] = await pool.execute(
            'DELETE FROM admins WHERE id = ?',
            [id]
        );
        return result.affectedRows;
    },

    // List all admins (view)
    async getAllAdmins() {
        const [rows] = await pool.execute('SELECT * FROM admins');
        return rows;
    },


module.exports = AdminModel;