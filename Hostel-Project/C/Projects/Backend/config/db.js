import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Hostel@111",
  database: "hostel_helpdesk",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
});

export default db;


