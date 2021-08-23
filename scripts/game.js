const displayPassword = document.querySelector("p");
const usedLetters = document.querySelector("p").nextElementSibling;
const container = document.querySelector(".container");
const image = document.querySelector("img");

function game() {

    document.removeEventListener("keydown", keyboardChoice);
    let playerGuess = "";
    let counter = 0;
    let helpDisplayPassword = undefined;

    const databaseItemNumber = Math.floor(Math.random() * database.length);
    const password = database[databaseItemNumber].toUpperCase().split("");

    function maskingPassword() {
        for (let i=0; i<password.length; i++) {
            displayPassword.innerHTML += "_ ";  
        }
    }

    maskingPassword();

    // this (screenPassword()) must be below maskingPassword() in order for it to have access to created displayPassword >>

    function screenPassword() {
        helpDisplayPassword = displayPassword.innerText.toString().split(" ");
        for(let i=0; i<helpDisplayPassword.length; i++) {
            helpDisplayPassword[i] += " ";
        }
    }

    screenPassword();

    function checkWin() {
        if(!displayPassword.innerText.toString().split("").includes("_")) {
        usedLetters.style.display = "none";
        displayPassword.innerHTML = `Gratulacje!<br>Odgadłeś hasło: <span class="guessedPassword">${database[databaseItemNumber]}</span><br>Zużyte szanse: ${counter}/9`;
        displayPassword.style.textAlign = "center";
        }
    }

    function checkAttempts() {
        if(usedLetters.innerText.toString().split(" ").includes(playerGuess)) {
        alert("Już użyłeś tej litery!");
        return;
        }
        counter++;
                usedLetters.innerHTML = `${usedLetters.innerText} ${playerGuess}`;
                image.src = `styles/images/wisielec${counter}.png`
                if(counter==9) {
                usedLetters.style.display="none";
                container.style.height = "50%";
                displayPassword.innerHTML = `Niestety! Nie udało Ci się odgadnąć hasła: <span class="unguessedPassword">${database[databaseItemNumber]}</span>`;
                }
    }

    function checkPlayerGuess() {
            if(password.includes(playerGuess)) {
            password.forEach((letter, index) => {
                if(letter == playerGuess) {           
                    helpDisplayPassword[index] = playerGuess;
                    displayPassword.innerHTML = "";
                    for (let i=0; i<helpDisplayPassword.length; i++) {
                        displayPassword.innerHTML = displayPassword.innerHTML + helpDisplayPassword[i];
                    }
                }
            });
            } else {
                checkAttempts();
            }
    }

    function checkButtonHandler() {
        // turns off the function when password is (un)guessed
        if(!displayPassword.innerText.toString().split("").includes("_")) {return};

        playerGuess = playerGuess.toUpperCase();
        checkPlayerGuess();
        if(counter==9){return};
        checkWin();
    }

    function keyboardPlayerGuess(e) {
        if (e.keyCode>=65 && e.keyCode<=90) {
            playerGuess = e.key;
            checkButtonHandler();
        }
    }

    document.addEventListener("keydown", keyboardPlayerGuess);
};