// サイト名とクレジット
const SITE_NAME = "unajyuumotoのサイト";
const CREDITS = "制作：unajyuumoto";


// タイトルと見出しを反映
const titleEl = document.getElementById("siteTitle");
if (titleEl) titleEl.textContent = SITE_NAME;


// <title> を上書き
if (document.title === "サイト名" || !document.title) {
document.title = SITE_NAME;
}


// フッターの年号 & クレジット
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


const creditsEl = document.getElementById("siteCredits");
if (creditsEl) {
const yearSpan = document.getElementById("year");
if (yearSpan) {
yearSpan.insertAdjacentText("afterend", " " + CREDITS);
}
}


// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', e => {
const id = a.getAttribute('href');
if (id && id !== '#') {
const el = document.querySelector(id);
if (el) {
e.preventDefault();
el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}
});
});






