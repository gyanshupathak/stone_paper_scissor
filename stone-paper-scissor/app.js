const computerchoicedisplay = document.getElementById("computer-choice");
const yourchoicedisplay = document.getElementById("your-choice");
const resultdisplay = document.getElementById("result");
const possiblechoices = document.querySelectorAll("button");


let yourchoice;
let computerchoice;
let result;

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', function (e) {
    yourchoice = e.target.id;
    yourchoicedisplay.innerHTML = yourchoice;
    generatecomputerchoice();
    yourresult();

}));

function generatecomputerchoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1;
    if (randomnumber == 1) {
        computerchoice = 'stone';
    }
    if (randomnumber == 2) {
        computerchoice = 'paper';
    }
    if(randomnumber==3){
        computerchoice = 'scissor';
    }
    
    computerchoicedisplay.innerHTML = computerchoice;
};

function yourresult() {
    if (computerchoice =="stone" && yourchoice=="paper") {
        result = "win";
    }
    if (computerchoice =="stone" && yourchoice=="scissor") {
        result = "lose";
    }
    if (computerchoice =="paper" && yourchoice=="stone") {
        result = "lose";
    }
    if (computerchoice =="paper" && yourchoice=="scissor") {
        result = "win";
    }if (computerchoice =="scissor" && yourchoice=="paper") {
        result = "lose";
    }if (computerchoice =="scissor" && yourchoice=="stone") {
        result = "win";
    }
    if (computerchoice == yourchoice) {
        result="Play Again"
    }
    resultdisplay.innerHTML = result;

};









