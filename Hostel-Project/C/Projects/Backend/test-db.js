import db from "./config/db.js";

(async () => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS solution");
    console.log("DB works:", rows);
    process.exit();
  } catch (err) {
    console.error("DB connection error:", err);
  }
})();
