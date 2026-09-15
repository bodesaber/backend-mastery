const http = require("http");

const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
  // السطر ده بيطبع في الـ Terminal كل Request بيوصل للسيرفر (بيسموه Logging)
  console.log(
    `[${new Date().toISOString()}] Received request: ${req.method} ${req.url}`,
  );

  // الـ Route الأساسي
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("أهلاً بك في أول سيرفر بـ Node.js!");
  }
  // الـ Route بتاع اليوزر (ده التاسك اللي اتكلمنا عليه)
  else if (req.url === "/api/user" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

    // دي البيانات اللي عايزين نرجعها
    const userData = {
      name: "Backend Master", // تقدر تغيره لاسمك
      major: "Computer Science - Cairo University",
      acm_qualifications: 2,
      skills: ["C++", "Problem Solving", "Node.js (Soon)"],
    };

    // بنحول الـ Object لنص JSON عشان المتصفح يفهمه
    res.end(JSON.stringify(userData));
  }
  // لو اليوزر طلب مسار مش موجود
  else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("الصفحة غير موجودة 404");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
