let computerNum = 0;
let playButton = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");

playButton.addEventListener("click", play);

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP!!"
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down~~"
  } else {
    resultArea.textContent = "맞추셧습니단!"
  }
}

randomNum();
