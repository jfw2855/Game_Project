
// Defined DOM variables
const title = document.getElementById("title")
const rules = document.getElementById("rules")
const startBtn = document.getElementById("start")
const help = document.getElementById("help")
const gameContainer = document.getElementById("game-container")
gameContainer.style.display="none"
const question = document.getElementById("question")
const lyric = document.getElementById("lyric")
const songId = document.getElementById("songId")
const songSelection = document.querySelector("select")
const selected = songSelection.options
const inputBtn = document.querySelector("input")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
let optionsArr = [option1,option2,option3,option4]


// defined variables to keep track of the gameplay (playerScore, round)

let round = 1
let player1Score = 0
let player2Score = 0
let questionNum = 0
let currentSong
let timer = 10000


// class for decades which will have a constructor (decades,songs)
    // song objects that will store the title, artist, lyrics [], questions [], answers [], choices []
let musicLib = [];

class Song {
    constructor(title,artist,lyrics,choices) {
        this.title=title,
        this.artist=artist,
        this.lyrics=lyrics,
        this.choices=choices
    }
}

// adding one song to use for development of functions/game
const song1 = new Song("Don't Speak", "No Doubt",["You and me, we used to be together"],["Everyday together, always","Everyday together, forever","Now we're not together","Now no longer together, sadly"])

song1.answers = song1.choices[0]

musicLib.push(song1)






// Functions ~~~~~~~~~~~~~~~~

// startGame - hide homescreen elements and move to next
function startGame () {
    console.log("start button works")
    playRound()
    title.style.visibility="hidden"
    rules.style.display="none"
    startBtn.style.display="none"
    gameContainer.style.display="block"

    

}
    // keeps track of rounds
    // if rounds is > 3 , will move to endGame


// playround - will animate the lyrics and then prompt player 1 what is the next line
function playRound () {
    currentSong=musicLib[questionNum]
    questionNum++
    console.log("current soooonnng choice 0", currentSong.choices[0])
    optionsArr[0].value=currentSong.choices[0]
    console.log("options zero", optionsArr[0].value)
    option1.value="pizza"
    console.log("changed opt 1 value", option1.value)
   
    question.textContent=`Question ${questionNum}`
    lyric.textContent=`Lyric: "${currentSong.lyrics}"`
    songId.textContent=`${currentSong.title} by ${currentSong.artist}`

    for (let i=0; i<4;i++) {
        optionsArr[i].textContent=currentSong.choices[i]
        optionsArr[i].value=currentSong.choices[i]
    }
    


    
}

// checkRight - will determine if the player selected the right answer
    // updates score based on right/wrong answer

function checkSelection (e) {
    e.preventDefault()
    console.log("lyric selection",songSelection)

}

// recall startGame to move to next round
    // will switch to the next song and remove the lyrics from previous song

// endGame - removes all play game divs and shows endGame screen


// Eventlisteners ~~~~~~~~~~~~~~~

// Play button event listener
startBtn.addEventListener("click",startGame)

// instructions hover

// player selection from form dropdown 

inputBtn.addEventListener("click", checkSelection)

// homescreen button

