// const title = document.getElementById("myText")
// console.log(title);
// const title = document.getElementById("myText");
// title.innerText = "Hello Javascript";

// const change = document.getElementById("play");
// change.innerText = "Code Worked!";


const changeName = document.getElementById('btn');
const button = document.getElementById('myName');
button.addEventListener('click', function(){
      changeName.innerText = 'i am a junior developer';
      changeName.style.color= "blue";     
})