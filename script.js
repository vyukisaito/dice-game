const player0El =  document.querySelector('.player--0');
const player1El =  document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnNRoll = document.querySelector('.btn--roll');
const btnNHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
document.querySelector('.winner--1').classList.add('hidden2');
document.querySelector('.winner--0').classList.add('hidden2');


score0El.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
// essa variavel tem que estar fora para que nossa ativada toda hora no click
let playing = true

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;

        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

// Funcionamento do dado
btnNRoll.addEventListener('click', function() {
    if (playing) {
        // Fazendo um número entre 1-6
        const dice = Math.trunc(Math.random() * 6) + 1;
    
        // Mostrando o dado
        diceEl.classList.remove('hidden')
        diceEl.src = `images/dice-${dice}.png`
    
        // Se o dado for 1
        if(dice !== 1) {
            // Mostrar o dado no placar atual
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Zera e troca o jogador
            switchPlayer();
    
            // toggle remove a classe se ela estiver e se não estiver ela add
        }
    }
})

btnNHold.addEventListener('click', function() {
    if (playing) {
        // adiocionar o placar atual para o player ativo placar
        scores[activePlayer] += currentScore;

        // checar se o jogador possui o placar de >=100

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        console.log(scores[activePlayer]);
    
        // cabou
        if (scores[activePlayer] >= 10) {
            playing = false;
            diceEl.classList.add('hidden')

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    
            document.querySelector(`.winner--${activePlayer}`).classList.remove(`hidden2`);
    
        } else {
            // troca o jogador
            switchPlayer();
        }
    }
})

