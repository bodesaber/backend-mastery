// Function بتتعامل مع طلب جلب بيانات المستخدم
const getUserProfile = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

  const userData = {
    name: "Backend Master",
    major: "Computer Science - Cairo University",
    acm_qualifications: 2,
    skills: ["C++", "Problem Solving", "Node.js Architecture"],
  };

  res.end(JSON.stringify(userData));
};

// تصدير الـ Function عشان نقدر نستخدمها في ملفات تانية
module.exports = {
  getUserProfile,
};
