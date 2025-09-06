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



function loadScratchComments(){
  let comments = document.querySelector("#scratch-comments")
 
  //コメント取得
  let response = await fetch("https://api.scratch.mit.edu/users/unajyuumoto/projects/1213761580/comments?limit=40&offset=0")
      .then(res => res.json())


  //for(let i of txt ){ ミスって作ったやつなんやで
  //    console.log(i)
  //}

  let comment_id
  let comment_arr = []

  //コメントとりあえずコンソール出力（デバッグ時優秀
  for(let i in response){
      //console.log(response[i].content)
      comment_arr.push(" >>>"+response[i].content)

      comment_id = response[i].id

      //console.log(comment_id)

      let replyResponse = await fetch("https://api.scratch.mit.edu/users/unajyuumoto/projects/1213761580/comments/"+String(comment_id)+"/replies?limit=20&offset=0")
      .then(res => res.json())
      
      //console.log("https://api.scratch.mit.edu/users/unajyuumoto/projects/1213761580/comments/"+String(comment_id)+"/replies?limit=20&offset=0")
      //console.log(replyResponse)
      
      for(let j in replyResponse){
          //console.log(" >>>"+replyResponse[j].content)
          comment_arr.push(" >>>"+replyResponse[j].content)
      }
  }}

  //console.log(comment_arr)

  for(i in comment_arr){
      let comment_txt = document.createElement("div")
      comment_txt.textContent = comment_arr[i]
      
      comment_txt.className = "comment"

      comments.appendChild(comment_txt)
    }

loadScratchComments()





