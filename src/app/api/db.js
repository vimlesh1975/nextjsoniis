import mysql from 'mysql2/promise';

// Create a pool using mysql2
const pool = mysql.createPool({
  host: process.env.host1,
  port: process.env.port1,
  database: process.env.database1,
  user: process.env.user1,
  password: process.env.password1,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to execute queries
async function executeQuery(query, values) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(query, values);
    return rows;
  } finally {
    connection.release();
  }
}

export default executeQuery;
