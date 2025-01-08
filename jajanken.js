






// playRoud (humanChoice, computerChoice);

function playGame() {
    ///////////// INICIALIZAR LOS SCORES /////////////
    console.log("JUEGO DE JAJANKEN"); 
        ////////////
        let humanScore = 0;
        let computerScore = 0;
        ///////////
        // console.log("PUNTOS:           " + "Humanos: " + humanScore + "   |||  " + "Computadora: " + computerScore);
    



                ///////////// HUMANO ELIGE  ///////////// 
                function getHumanChoice() {
                    let choice = prompt("piedra papel o tijera?").toLowerCase();
                    return choice.toLowerCase();
                }
                
                var humanChoice = getHumanChoice ();

                ///////////// pc   ELIGE  ///////////// 
                function getComputerChoice () {
                    let azar = Math.floor((Math.random() * 3))
                    
                    if (azar === 0) {
                        return 'piedra'
                    }
                    else if (azar === 1) {
                        return 'papel'
                    }
                    else return 'tijera'
                        
                }
                
                var computerChoice = getComputerChoice();
                
        ////////////////////////////////////////// 
       // console.log("human: " + humanChoice + "       computer: " + computerChoice);


        
    ///////////// PLAY ROUND FUNCTION ///////////// 
function playRunds(){


    function playRound(humanChoice, computerChoice) {

        if (humanChoice === 'papel' && computerChoice === 'piedra'){
            console.log("papel gana!");
            return "win";
        } else if (humanChoice === 'papel' && computerChoice === 'papel') {
            console.log("empate");
            return "tie";
        } else if (humanChoice === 'papel' && computerChoice === 'tijera') {
            console.log("papel pierde!");
           return "lose";
        }
        
        else if (humanChoice === 'tijera' && computerChoice === 'papel') {
            console.log("tijera gana!");
            return "win";
        } else if (humanChoice === 'tijera' && computerChoice === 'tijera') {
            console.log("empate");
            return "tie";
        } else if (humanChoice === 'tijera' && computerChoice === 'piedra') {
            console.log("tijera pierde!");
            return "lose";
        }
        
        else if (humanChoice === 'piedra' && computerChoice === 'tijera' ){
            console.log("piedra gana!");
            return "win";
        } else if (humanScore === 'piedra' && computerChoice === 'piedra'){
            console.log('empate');
            return "tie";
        } else if (humanScore === 'piedra' && computerChoice === 'papel'){
            console.log("piedra pierde!");
            return "lose";
        }
        }
    
        
    let resultado = playRound(humanChoice, computerChoice);
    
    function actualizarScore (resultado) {
        if (resultado === 'lose') {
            return computerScore = computerScore + 1;
        }

        else if (resultado === 'win') {
            return humanScore = humanScore +1;
        }

        else {
            humanScore = humanScore;
        }

    }

    actualizarScore(resultado);
    console.log("PUNTOS:           " + "Humanos: " + humanScore + "   |||  " + "Computadora: " + computerScore);
    }

    playRunds();

    var humanChoice = getHumanChoice ();
    var computerChoice = getComputerChoice();
    playRunds();

    var humanChoice = getHumanChoice ();
    var computerChoice = getComputerChoice();
    playRunds();

    var humanChoice = getHumanChoice ();
    var computerChoice = getComputerChoice();
    playRunds();

    var humanChoice = getHumanChoice ();
    var computerChoice = getComputerChoice();
    playRunds();






    
        

}

playGame ();


