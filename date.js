const demoTasks = [
  { title: "مشاهدة إعلان عالمي", points: 10 },
  { title: "تحميل تطبيق جديد", points: 20 },
  { title: "مشاركة رابط مع صديق", points: 15 },
  { title: "إكمال استبيان قصير", points: 25 }
];

const demoNews = [
  { title: "إطلاق تحديث عالمي جديد للمنصة", date: "2026-03-24" },
  { title: "إضافة نظام حماية متطور ضد الغش", date: "2026-03-20" },
  { title: "وصول عدد المستخدمين إلى 10,000", date: "2026-03-15" }
];

const leaderboard = [
  { name: "أحمد", points: 250 },
  { name: "سارة", points: 220 },
  { name: "محمد", points: 200 }
];

function loadTasks() {
  const list = document.getElementById("task-list");
  demoTasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.title} - ${t.points} نقطة`;
    list.appendChild(li);
  });
}

function loadNews() {
  const list = document.getElementById("news-list");
  demoNews.forEach(n => {
    const li = document.createElement("li");
    li.textContent = `${n.date} - ${n.title}`;
    list.appendChild(li);
  });
}

function loadLeaderboard() {
  const list = document.getElementById("leaderboard");
  leaderboard.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.name} - ${u.points} نقطة`;
    list.appendChild(li);
  });
}

function sendSupport() {
  const msg = document.getElementById("support-msg").value;
  alert("تم إرسال رسالتك: " + msg);
}
