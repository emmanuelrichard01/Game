let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.message > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const sicssors = document.getElementById('s');

function getcomputerChioce() {
  const chioces = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return chioces[randomNumber];
}
function convertLetter(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}
function win(userChioce, computerChioce) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = '(User)'.fontsize(3).sup();
  const smallCompWord = '(Comp)'.fontsize(3).sup();
  userChioce_div = document.getElementById(userChioce);
  result_p.innerHTML = `${convertLetter(userChioce)}${smallUserWord} beats
    ${convertLetter(computerChioce)}${smallCompWord}, You Win!!!🔥`;
  userChioce_div.classList.add('green-glow');
  setTimeout(() => userChioce_div.classList.remove('green-glow'), 600);
}
function lose(userChioce, computerChioce) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = '(User)'.fontsize(3).sup();
  const smallCompWord = '(Comp)'.fontsize(3).sup();
  userChioce_div = document.getElementById(userChioce);
  result_p.innerHTML = `${convertLetter(computerChioce)}${smallCompWord} beats
    ${convertLetter(userChioce)}${smallUserWord}, You Lost!!!😿`;
  userChioce_div.classList.add('red-glow');
  setTimeout(() => userChioce_div.classList.remove('red-glow'), 600);
}
function draw(userChioce, computerChioce) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = '(User)'.fontsize(3).sup();
  const smallCompWord = '(Comp)'.fontsize(3).sup();
  userChioce_div = document.getElementById(userChioce);
  result_p.innerHTML = `${convertLetter(
    userChioce
  )}${smallUserWord} equal to ${convertLetter(
    computerChioce
  )}${smallCompWord}, Its a Draw!!!📍`;
  userChioce_div.classList.add('gray-glow');
  setTimeout(() => userChioce_div.classList.remove('gray-glow'), 600);
}

function game(userChioce) {
  const computerChioce = getcomputerChioce();
  switch (userChioce + computerChioce) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChioce, computerChioce);
      break;
    case 'sr':
    case 'ps':
    case 'rp':
      lose(userChioce, computerChioce);
      break;
    default:
      draw(userChioce, computerChioce);

      break;
  }
}

function main() {
  rock.addEventListener('click', () => game('r'));
  paper.addEventListener('click', () => game('p'));
  sicssors.addEventListener('click', () => game('s'));
}
main();
