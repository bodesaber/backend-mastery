const http = require("http");
const handleUserRoutes = require("./src/routes/user.routes");

const PORT = process.env.PORT || 3000;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // 1. تجربة الـ Home route
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("أهلاً بك في السيرفر المنظم معمارياً!");
  }

  // 2. تجربة الـ User routes
  const isHandled = handleUserRoutes(req, res);

  // 3. لو الـ Route مش معروف في أي مكان (404 Fallback)
  if (!isHandled) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("الصفحة غير موجودة 404");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running smoothly on http://${HOST}:${PORT}`);
});
