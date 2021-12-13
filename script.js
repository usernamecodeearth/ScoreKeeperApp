const p1Score = document.querySelector('#p1');
const p2Score = document.querySelector('#p2');
const p1AddBtn = document.querySelector('#addP1Btn');
const p2AddBtn = document.querySelector('#addP2Btn');
const resetBtn = document.querySelector('#resetBtn')
const endScore = document.querySelector('#endScore')

let winningNumber = 5;

endScore.addEventListener('change', () => {
  p2Score.innerHTML = 0;
  p1Score.innerHTML = 0;
  winningNumber = endScore.value
})

p1AddBtn.addEventListener('click', () => {
  p1Score.innerHTML++;
  if (parseInt(p1Score.innerHTML) == winningNumber) {
    p1AddBtn.disabled = true;
    p2AddBtn.disabled = true;
    p1Score.classList.add('win')
    p2Score.classList.add('lose')
    
  }
})

p2AddBtn.addEventListener('click', () => {
  p2Score.innerHTML++;
  if (parseInt(p2Score.innerHTML) == winningNumber) {
    p1AddBtn.disabled = true;
    p2AddBtn.disabled = true;
    p2Score.classList.add('win')
    p1Score.classList.add('lose')
    
  }
})

resetBtn.addEventListener('click', () => {
  p2Score.innerHTML = 0;
  p1Score.innerHTML = 0;
  p1AddBtn.disabled = false;
  p2AddBtn.disabled = false;
  p1Score.classList.remove('win', 'lose')
  p2Score.classList.remove('win', 'lose')
})