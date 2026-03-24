export function initSecurity() {
    // 1. منع الـ VPN
    fetch('https://ipapi.co/json/').then(r => r.json()).then(data => {
        if(data.proxy || data.vpn) {
            document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:100px;'>🚫 الـ VPN ممنوع! اقفل البرنامج وارجع تاني.</h1>";
        }
    });

    // 2. كشف الـ DevTools (أدوات المطور)
    setInterval(() => {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            window.location.reload();
        }
    }, 1000);

    // 3. منع النقر الأيمن والاختصارات
    document.oncontextmenu = () => false;
    document.onkeydown = (e) => {
        if (e.ctrlKey && (e.key === 'u' || e.key === 'i' || e.key === 'j')) return false;
    };
}
