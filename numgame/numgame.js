const guess = document.getElementById("guess");
const report = document.getElementById("report");

const MAXNUM = 100;;
let secret;


function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM+1));
    report.innerHTML = secret;
}

function makeGuess() {
    let myGuess = guess.value;

    if (myGuess < secret) {
        report.innerHTML += `<br/>[${myGuess}] is too small of a guess. Try again!`;
        console.log(`myGuess = ${myGuess}`);
    }
    else if (myGuess > secret) {
        report.innerHTML += `<br/>[${myGuess}] is too large of a guess. Try again!`;
        console.log(`myGuess = ${myGuess}`)
    }
    else {
        report.innerHTML += `<br class="glow"/>[${myGuess}] is correct! :)`
        console.log(`You win! :D`)
    }

}