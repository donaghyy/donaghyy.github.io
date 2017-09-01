
let url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
var words = [];

// // Create request
// let xhr = new XMLHttpRequest();

// // Setup on complete method
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         words = this.responseText.split("\n");
//     }
// };
// // open request
// xhr.open('GET', url, true);
// // send requests
// xhr.send();

function promiseRequest(url) { 
    return new Promise((resolve) => {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.responseType = "text";
        req.send();

         req.onload = (() => {
           if (req.readyState == 4 && req.status == 200) {
                words = req.response.split("\n");
               resolve(words);
             }
        })
    })
  }

  function doPromise(){
      promiseRequest("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt").then((words) => {
          console.log("JSON Wordlist loaded.")
      })
  }


var noLives;

function images(){
   
    if (noLives === 7){
        document.getElementById("hangman").src="hangMan.png";
    }
    if (noLives === 6){
        document.getElementById("hangman").src="hangMan1.png";
    }
    if (noLives === 5){
        document.getElementById("hangman").src="hangMan2.png";
    }
    if (noLives === 4){
        document.getElementById("hangman").src="hangMan3.png";
    }
    if (noLives === 3){
        document.getElementById("hangman").src="hangMan4.png";
    }
    if (noLives === 2){
        document.getElementById("hangman").src="hangMan5.png";
    }
    if (noLives === 1){
        document.getElementById("hangman").src="hangMan6.png";
    }
    if (noLives === 0){
        document.getElementById("hangman").src="hangMan7.png";
    }
    
}

function game(){
    // doPromise();
    document.getElementById("wordOutput").innerHTML = "";
    arrayLines = [];
    document.getElementById("hangman").src="hangMan.png";
    document.getElementById("winOUT").innerHTML = ``;

    // let words = ["HELLO", "HOSPITAL", "DAVID", "HONDA"];
    // let words = ["TEST"];
    let div = document.getElementById("wordOutput");
    currentWord = words[Math.floor(Math.random() * words.length)];

    console.log(currentWord);
    underScores();
    
    noLives = 7;

    document.getElementById("liveOut").innerHTML = `Number of Lives remaining: ${noLives}`;

    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "showWord"];

    for (let f=0; f<alpha.length; f++)
    document.getElementById(alpha[f]).disabled = false;
}


function checkLetter(char){
    console.log(char);
    
      for(let j=0; j<=currentWord.length-1; j++){

        
        if(currentWord.includes(char)) {
        for(let i=0; i<currentWord.length; i++){
            document.getElementById("wordOutput").innerHTML = "";
            
            if(currentWord[i] === char){
                arrayLines[i] = char;
            }

            var lines = document.createElement('wordList');
            lines.id = "UnderLines";
            let joinLine = arrayLines.join(" ");
            lines.textContent = joinLine;
            document.getElementById("wordOutput").appendChild(lines); 
        }
    }
}

    if(!currentWord.includes(char)){
        noLives = noLives-1;
        console.log("Lives: "+noLives);
        document.getElementById("liveOut").innerHTML = `Number of Lives remaining: ${noLives}`;
        images();
        
        if(noLives<1){
            let loseDiv = document.createElement('loseOUT');
            
            let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "showWord"];
        
            for (let f=0; f<alpha.length; f++)
            document.getElementById(alpha[f]).disabled = true;

            // if(showButton.disabled === true){
            //     document.getElementById("winOUT").innerHTML = `Congratulations, You are a Winner!`;            
            // }

            loseDiv.textContent = "Better luck next time ...";
            document.getElementById("winOUT").appendChild(loseDiv); 
            document.getElementById("liveOut").innerHTML = `GAME OVER`;
        }
    }

    let win = checkWin();
    if(win === true){
        let winDiv = document.createElement('winOUT');
       
        winDiv.textContent = "Congratulations, You are a Winner!";
        document.getElementById("winOUT").appendChild(winDiv); 
        let showButton = document.getElementById("showWord");
        
        if(showButton.disabled === true){
            document.getElementById("winOUT").innerHTML = `Congratulations, You are a Winner!`;            
        }
        
        console.log("WINNER");
    }
}

function checkWin(){
        if(arrayLines.includes("_")){
            return false;
        }
    return true;
}

function showWord(){
    let showWrd = document.createElement('winOUT');
    
    showWrd.textContent = currentWord;
     document.getElementById("winOUT").appendChild(showWrd); 
}

function underScores(){
    if(document.getElementById("UnderLines") !== null){
        document.getElementById("UnderLines").remove;
    }
    
    let noLines = currentWord.length;
    for(let i=0; i<noLines -1; i++){
        arrayLines.push("_");
    }

    var lines = document.createElement('wordList');
    lines.id = "UnderLines";
    let joinLine = arrayLines.join(" ");
    lines.textContent = joinLine;
    document.getElementById("wordOutput").appendChild(lines); 
}