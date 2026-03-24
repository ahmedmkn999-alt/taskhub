let devToolsAttempts = 0;
setInterval(() => {
  if (window.devtoolsOpen) {
    devToolsAttempts++;
    if (devToolsAttempts >= 3) {
      alert("❌ تم حظرك مؤقتًا بسبب محاولة الغش");
    }
  }
}, 2000);

function secureUpdatePoints(userId, newPoints) {
  return db.collection("users").doc(userId).update({
    points: newPoints
  });
}
