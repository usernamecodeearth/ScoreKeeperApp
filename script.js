const p1 = {
  score: document.querySelector('#p1'),
  button: document.querySelector('#addP1Btn'),
}

const p2 = {
  score: document.querySelector('#p2'),
  button: document.querySelector('#addP2Btn'),
}

//const p1Score = document.querySelector('#p1');
//const p2Score = document.querySelector('#p2');
//const p1AddBtn = document.querySelector('#addP1Btn');
//const p2AddBtn = document.querySelector('#addP2Btn');
const resetBtn = document.querySelector('#resetBtn')
const endScore = document.querySelector('#endScore')

function scores(player, opponent) {
  player.button.disabled = true;
  opponent.button.disabled = true;
  player.score.classList.add('win')
  opponent.score.classList.add('lose')
}


let winningNumber = 5;

endScore.addEventListener('change', () => {
  p2.score.innerHTML = 0;
  p1.score.innerHTML = 0;
  winningNumber = endScore.value
})

p1.button.addEventListener('click', () => {
  p1.score.innerHTML++;
  if (parseInt(p1.score.innerHTML) == winningNumber) {
    scores(p1, p2)
  }
})

p2.button.addEventListener('click', () => {
  p2.score.innerHTML++;
  if (parseInt(p2.score.innerHTML) == winningNumber) {
    scores(p2, p1)
  }
})

resetBtn.addEventListener('click', () => {
  p2.score.innerHTML = 0;
  p1.score.innerHTML = 0;
  p1.button.disabled = false;
  p2.button.disabled = false;
  p1.score.classList.remove('win', 'lose')
  p2.score.classList.remove('win', 'lose')
})