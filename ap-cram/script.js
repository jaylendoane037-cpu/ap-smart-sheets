// =========================
// AP Cram Club Script.js
// =========================

// General site scripts
console.log("AP Cram Club website loaded 💖");

// -------------------------
// USER NAVIGATION & GREETING
// -------------------------
function updateUserNav() {
    const userEmail = localStorage.getItem("userEmail");
    const userGreeting = document.getElementById("user-greeting");
    const loginLink = document.getElementById("login-link");

    if (userEmail && userGreeting) {
        userGreeting.innerText = `Hi, ${userEmail} 💕`;
        userGreeting.style.fontWeight = "600";
        userGreeting.style.marginLeft = "15px";
    }

    if (userEmail && loginLink) loginLink.style.display = "none";
}

// -------------------------
// MOBILE NAV TOGGLE
// -------------------------
function toggleNav() {
    const links = document.querySelector(".nav-links");
    links.classList.toggle("show");
}

// -------------------------
// DASHBOARD REDIRECT
// -------------------------
function goDashboard() {
    if (localStorage.getItem("userEmail")) {
        window.location.href = "dashboard.html";
    } else {
        window.location.href = "login.html";
    }
}

// -------------------------
// LOGOUT FUNCTION
// -------------------------
function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    window.location.href = "login.html";
}

// -------------------------
// DARK MODE TOGGLE
// -------------------------
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);

    const toggle = document.getElementById("darkToggle");
    if (toggle) toggle.checked = isDark;
}

// -------------------------
// COUNTDOWN TIMER
// -------------------------
function updateCountdown() {
    const examDate = new Date("May 6, 2026 08:00:00").getTime();
    const now = new Date().getTime();
    const distance = examDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
        countdownEl.innerText = `${days} days until AP Exams 💀`;
    }
}

// -------------------------
// STUDY PLANNER CHECKBOXES
// -------------------------
function saveTask(index) {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    localStorage.setItem("task" + index, checkboxes[index].checked);
}

// -------------------------
// DOM CONTENT LOADED
// -------------------------
window.addEventListener("DOMContentLoaded", () => {

    // Page fade-in
    document.body.classList.add("loaded");

    // Update user nav greeting & hide login link if logged in
    updateUserNav();

    // Restore dark mode if previously set
    const darkSetting = localStorage.getItem("darkMode") === "true";
    if (darkSetting) {
        document.body.classList.add("dark-mode");
        const toggle = document.getElementById("darkToggle");
        if (toggle) toggle.checked = true;
    }

    // Restore planner checkboxes
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((box, index) => {
        if (localStorage.getItem("task" + index) === "true") {
            box.checked = true;
        }
    });

    // Start countdown only if element exists
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

});

function downloadGuide(subject){

const hasAccess = localStorage.getItem("guideAccess")

if(!hasAccess){

const code = prompt("Enter your access code 💌")

const validCodes = [
"APFREE2026",
"CRAMCLUB",
"STUDYSMART"
]

if(validCodes.includes(code)){

localStorage.setItem("guideAccess", "true")
alert("Access granted! 💖 Download starting...")

downloadGuide(subject)

}else{

alert("Invalid code ❌")

}

return
}

if(subject === "stats"){
window.location.href = "guides/AP_Statistics_Cram_Guide.pdf"
}

if(subject === "macro"){
window.location.href = "guides/AP_Macroeconomics_Cram_Guide.pdf"
}

}