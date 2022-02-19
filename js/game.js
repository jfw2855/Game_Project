console.log("game.js connected to index")

// Defined DOM variables
const title = document.getElementById("title")
const rules = document.getElementById("rules")
const startBtn = document.getElementById("start")
const help = document.getElementById("help")

// defined variables to keep track of the gameplay (playerScore, round)

let round = 1
let player1Score = 0
let player2Score = 0


// class for decades which will have a constructor (decades,songs)
    // song objects that will store the title, artist, lyrics [], questions [], answers [], choices []
let musicLib = [];

class Songs {
    constructor(title,artist,lyrics,questions,choices,answers) {
        this.title=title,
        this.artist=artist,
        this.lyrics=lyrics,
        this.questions=questions,
        this.choices=choices,
        this.answers=answers
    }
}




// Functions ~~~~~~~~~~~~~~~~

// startGame - hide homescreen elements and move to next
    // keeps track of rounds
    // if rounds is > 3 , will move to endGame

// playround - will animate the lyrics and then prompt player 1 what is the next line

// checkRight - will determine if the player selected the right answer
    // updates score based on right/wrong answer

// recall startGame to move to next round
    // will switch to the next song and remove the lyrics from previous song

// endGame - removes all play game divs and shows endGame screen


// Eventlisteners ~~~~~~~~~~~~~~~

// Play button event listener

// instructions hover

// player selection from form dropdown 

// homescreen button

