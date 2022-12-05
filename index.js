// first dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let diceImg1 = document.querySelector(".img1")
diceImg1.setAttribute('src',`./images/dice${randomNumber1}.png`)

// second dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let diceImg2 = document.querySelector(".img2")
diceImg2.setAttribute('src',`./images/dice${randomNumber2}.png`)

// winner selector

if(randomNumber1 > randomNumber2){
  let heading = document.querySelector("h1");
  heading.innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1){
  let heading = document.querySelector("h1");
  heading.innerHTML = "Player 2 Wins! 🚩";
}else {
  let heading = document.querySelector("h1");
  heading.innerHTML = "Draw!";
}