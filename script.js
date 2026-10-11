const video = document.getElementById("weddingVideo");

document.addEventListener("click", () => {
    video.muted = false;   // صدا فعال می‌شود
    video.play();          // ادامه پلی
}, { once: true });         // فقط یک بار اجرا شود

// تاریخ مراسم — نسخه کاملاً سازگار با سافاری
let weddingDate = new Date(2026, 0, 1, 18, 0, 0).getTime();

function updateTimer() {
    let now = Date.now();
    let diff = weddingDate - now;

    if (diff <= 0) {
        day.innerHTML = "0";
        hour.innerHTML = "0";
        min.innerHTML = "0";
        sec.innerHTML = "0";
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}

setInterval(updateTimer, 1000) 


// ===============================
// ارسال پیامک تایید حضور
// ===============================
function sendRSVP(status) {

    // گرفتن نام مهمان
    let name = document.getElementById("guestName").value;

    // اگر نام وارد نشده بود
    if (!name.trim()) {
        alert("لطفاً اسم خود را وارد کنید 🌸");
        return;
    }

    // شماره مقصد
    let phone = "09122073151";

    // متن پیام
    let text = "";

    // اگر حضور دارد
    if (status === "yes") {

        text = `سلام
من ${name} هستم.
با افتخار در مراسم شما حضور خواهیم داشت. 🌸`;

    }

    // اگر حضور ندارد
    else {

        text = `سلام
من ${name} هستم.
متأسفانه امکان حضور در مراسم را نداریم.
آرزوی بهترین‌ها را برایتان داریم. 💐`;

    }

    // ساخت لینک پیامک
    let smsURL = `sms:${phone}?body=${encodeURIComponent(text)}`;

    // باز کردن برنامه پیامک
    window.location.href = smsURL;

}