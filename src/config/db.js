const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 10, // أقصى عدد اتصالات مفتوحة في الـ Pool
  idleTimeoutMillis: 30000, // إغلاق الاتصال الخامل بعد 30 ثانية
});

// اختبار الاتصال عند بدء التشغيل
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ Unexpected Database Error:", err.message);
  } else {
    console.log("✅ PostgreSQL Database Connected Successfully");
  }
});

pool.on("error", (err) => {
  console.error(" Unexpected Database Error:", err);
  process.exit(-1);
});

module.exports = pool;
