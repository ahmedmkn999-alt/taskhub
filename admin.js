async function loadStats() {
  const statsDiv = document.getElementById("users");
  statsDiv.innerHTML = `
    <h3>📊 الإحصائيات العالمية</h3>
    <p>إجمالي المستخدمين: 10,000</p>
    <p>طلبات السحب المعلقة: 120</p>
    <p>إجمالي النقاط: 250,000</p>
    <p>عدد المحظورين: 45</p>
  `;
}

function sendAlert(msg) {
  const alertsDiv = document.getElementById("alerts");
  alertsDiv.innerHTML = `<p style="color:red;">🔔 ${msg}</p>`;
}

window.onload = () => {
  loadTasks();
  loadNews();
  loadLeaderboard();
  loadStats();
};
