// Keyboard input

// const userInput = document.getElementsByClassName("letter-block")[0] + document.getElementsByClassName("letter-block")[1] + document.getElementsByClassName("letter-block")[2] + document.getElementsByClassName("letter-block")[3] + document.getElementsByClassName("letter-block")[4];

/**
 * For individual characters, add key event.
 */

// delete, enter
var i = 0;
function keyboardInput(event) {
    var x = event.key;

    if (x == "a" || x == "A") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "A";
        console.log("you pressed A");
        console.log(i);
        i++;
    }

    if (x == "b" || x == "B") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "B";
        i++;
    }
    if (x == "c" || x == "C") {
       document.getElementsByClassName("letter-block")[i].innerHTML = "C";
       i++;
    }
    if (x == "d" || x == "D") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "D";
        i++;
        }
    if (x == "e" || x == "E") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "E";
        i++;
    }
    if (x == "f" || x == "F") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "F";
        i++;
    }
    if (x == "g" || x == "G") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "G";
        i++;
    }
    if (x == "h" || x == "H") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "H";
        i++;
    }
    if (x == "i" || x == "I") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "I";
        i++;
    }
    if (x == "j" || x == "J") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "J";
        i++;
    }
    if (x == "k" || x == "K") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "K";
        i++;
    }
    if (x == "l" || x == "L") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "L";
        i++;
    }
    if (x == "m" || x == "M") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "M";
        i++;
    }
    if (x == "n" || x == "N") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "N";
        i++;
    }
    if (x == "O" || x == "o") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "O";
        i++;
    }
    if (x == "p" || x == "P") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "P";
        i++;
    }
    if (x == "q" || x == "Q") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "Q";
        i++;
    }
    if (x == "r" || x == "R") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "R";
        i++;
    }
    if (x == "s" || x == "S") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "S";
        i++;
    }
    if (x == "t" || x == "T") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "T";
        i++;
    }
    if (x == "u" || x == "U") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "U";
        i++;
    }
    if (x == "v" || x == "V") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "V";
        i++;
    }
    if (x == "W" || x == "w") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "W";
        i++;
    }
    if (x == "x" || x == "X") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "X";
        i++;
    }
    if (x == "y" || x == "Y") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "Y";
        i++;
    }
    if (x == "Z" || x == "z") {
        document.getElementsByClassName("letter-block")[i].innerHTML = "Z";
        i++;
    }

    if (x == "Backspace" || x == "Delete") {
        if( i == 0){
            alert('Enter a word')
        }else{
            i--;
            document.getElementsByClassName("letter-block")[i].innerHTML = "";
        }
        
        // i--;

        //functionality checking if there is no letter, "type a word"

    }
    var correctWord = ["D", "A", "N", "C", "E"];
    if(x == "Enter") {
        if((i)%5 == 0){
           var word = []
           for( let nm = i-5 ; nm < i ;nm++){
            word.push(document.getElementsByClassName("letter-block")[nm].innerHTML)
           }
           console.log(word);
           
           for( var j = i-5 , idx = 0 ; j < i , idx < 5 ; j++ , idx++){
            if( !correctWord.includes(word[idx])){
                document.getElementsByClassName("letter-block")[j].style.color=incorrectGuessColor //grey

            }
            else if( word[idx] == correctWord[idx]){
                document.getElementsByClassName("letter-block")[j].style.color=correctWordColor //green
            
            }else{
                document.getElementsByClassName("letter-block")[j].style.color=correctLetterColor // yellow
            }
           }
        }else{
            alert("Enter 5 letter word");
        }
     }
  // document.getElementById(“giveup-status”).onclick = function() {...}

}

var giveUp = document.getElementById("giveup-status")
giveUp.addEventListener("click",function(){
    alert('The correct word was DANCE')
})

//set the word

//set the word length

//color for the guesses:
var correctWordColor = "green";
var correctLetterColor = "yellow";
var incorrectGuessColor = "grey";


/**
 * function that calls all the above functions in order of the game:
 * 1 - keyboard input by user
 * 2 - once user clicks "enter", check if the word length matches,
 * check if word is valid and matches our word, and then check the position
 */
