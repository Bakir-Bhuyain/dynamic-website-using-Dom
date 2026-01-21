// const title = document.getElementById("myText")
// console.log(title);
// const title = document.getElementById("myText");
// title.innerText = "Hello Javascript";

// const { createElement } = require("react");

// const change = document.getElementById("play");
// change.innerText = "Code Worked!";

// const changeName = document.getElementById("myName");
// const button = document.getElementById("btn");
// button.addEventListener("click", function () {
//   changeName.innerText = "i am a junior developer";
//   changeName.style.color = "blue";
// });

// let isOnline = false;
// const server = document.getElementById("server-status");
// const button2 = document.getElementById("btn2");
// button2.addEventListener("click", function () {
//   if (isOnline === false) {
//     server.innerText = "system online";
//     server.style.color = "green";
//     isOnline = true;
//   } else{
//     server.innerText = "system offline";
//     server.style.color = "red";
//     isOnline = false;
//   }
// });

// ১. ডেটা
const skills = ["HTML", "CSS", "JavaScript", "DOM", "React"];

// ২. ঝুড়ি ধরা
const bucket = document.getElementById("skill-list");

// ৩. লুপ চালানো (Factory)
for (let skill of skills) {
  // ক. নতুন প্যাকেট বানানো
  const li = document.createElement("li");

  // খ. প্যাকেটে মাল ভরা
  li.innerText = skill;

  // গ. ঝুড়িতে রাখা
  bucket.appendChild(li);
}
