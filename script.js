// const title = document.getElementById("myText")
// console.log(title);
// const title = document.getElementById("myText");
// title.innerText = "Hello Javascript";

// const change = document.getElementById("play");
// change.innerText = "Code Worked!";

const changeName = document.getElementById("myName");
const button = document.getElementById("btn");
button.addEventListener("click", function () {
  changeName.innerText = "i am a junior developer";
  changeName.style.color = "blue";
});

let isOnline = false;
const server = document.getElementById("server-status");
const button2 = document.getElementById("btn2");
button2.addEventListener("click", function () {
  if (isOnline === false) {
    server.innerText = "system online";
    server.style.color = "green";
    isOnline = true;
  } else{
    server.innerText = "system offline";
    server.style.color = "red";
    isOnline = false;
  }
});
