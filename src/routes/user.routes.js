// استدعاء الـ Controller المسؤول
const userController = require("../controllers/user.controller");

// Function بتشيك على المسار
const handleUserRoutes = (req, res) => {
  if (req.url === "/api/user" && req.method === "GET") {
    userController.getUserProfile(req, res);
    return true; // تعبير عن إن الـ Route ده اتعالج بنجاح
  }
  return false; // المسار مش تبع الفايل ده
};

module.exports = handleUserRoutes;
