
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
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
let optionsArr = [option1,option2,option3,option4]
const endContainer = document.getElementById("end-container")
const endTitle = document.getElementById("endTitle")
endContainer.style.display="none"


// defined variables to keep track of the gameplay (playerScore, round)

let round = 1
let player1Score = 0
let player2Score = 0
let questionNum = 0
let currentSong
let currentPlayer = "p1"
let timer = 10000
let correctSound = new Audio ()
let incorrectSound = new Audio ()


// class for decades which will have a constructor (decades,songs)
    // song objects that will store the title, artist, lyrics [], questions [], answer [], choices []
let musicLib = [];

class Song {
    constructor(title,artist,lyrics,choices) {
        this.title=title,
        this.artist=artist,
        this.lyrics=lyrics
    }
}

// adding one song to use for development of functions/game
const song1 = new Song(
    "Don't Speak", 
    "No Doubt",
    ["And if it's real, well, I don't want to know"]
)

const song2 = new Song(
    "All star", 
    "Smash Mouth",
    "Somebody once asked could I spare some change for gas?"
)


const song3 = new Song(
    "Say my name",
    "Destiny's Child",
    `If somebody's there then tell me who`
)

const song4 = new Song(
    "Creep",
    "Radiohead",
    `I don't care if it hurts`
)

const song5 = new Song(
    "Smooth",
    "Santana",
    `If you would leave it'd be a crying shame`
)

const song6 = new Song (
    "I Swear",
    "All-4-One",
    `I'll love you with every beat of my heart`
)

const song7 = new Song (
    `Tearin Up My Heart`,
    "NSYNC",
    "And no matter what I do, I feel the pain"
)

const song8 = new Song (
    "Two Princes",
    "Spin Doctors",
    "You marry me, your father will disown you"
)

const song9 = new Song (
    "Barbie Girl",
    "Aqua",
    "I can act like a star, I can beg on my knees"
)

const song10 = new Song (
    "You Oughta Know",
    "Alanis Morissette",
    "Of the mess you left when you went away"
)

const song11 = new Song (
    "Wannabe",
    "Spice Girls"
    `Taking is too easy, but that's the way it is`
)

const song12 = new Song (
    "End of The Road",
    "Boyz II Men",
    "This time I want you to love me much more"

)

const song13 = new Song (
    "Semi-Charmed Life",
    "Third Eye Blind",
    "I want something else to get me through this"
)




musicLib.push(song1)
musicLib.push(song2)
musicLib.push(song3)
musicLib.push(song4)
musicLib.push(song5)



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
    question.textContent=`Question ${questionNum}`
    lyric.textContent=`Lyric: "${currentSong.lyrics}"`
    songId.textContent=`${currentSong.title} by ${currentSong.artist}`

    for (let i=0; i<4;i++) {
        optionsArr[i].textContent=currentSong.choices[i]
        optionsArr[i].addEventListener("click", checkSelection)
    }
    


    
}

// checkRight - will determine if the player selected the right answer
    // updates score based on right/wrong answer

function checkSelection (e) {
    round++
    let playerSelection = e.target.textContent
    if (playerSelection===currentSong.answer) {
        playCorrectSound()
        console.log("correct!")
        if (currentPlayer==="p1") {
            player1Score++
        }
        else {
            player2Score++
        }
    }
    else {
        playIncorrectSound () 
        console.log("wrong!")
    }
    if (round<3) {
        switchPlayer()
        playRound()
    }
    else {
        endGame()
    }

}

// recall startGame to move to next round
    // will switch to the next song and remove the lyrics from previous song
function switchPlayer () {
    if (currentPlayer==="p1") {
        currentPlayer="p2"
    }
    else {
        currentPlayer="p1"
    }
}



function displayWinner () {
    if (player1Score>player2Score) {
        endTitle.textContent=`player 1 has won!`
    }
    else if (player2Score>player1Score) {
        endTitle.textContent = `player 2 has won!`
    }
    else {
        endTitle.textContent = `It's a tie!`
    }
}

// endGame - removes all play game divs and shows endGame screen

function endGame () {
    displayWinner()
    gameContainer.style.display="none"
    endContainer.style.display="block"
    
}

function playCorrectSound () {
    correctSound.src="sounds/right.mp3"
    correctSound.play()
}

function playIncorrectSound () {
    correctSound.src="sounds/wrong.wav"
    correctSound.play()
}


// Eventlisteners ~~~~~~~~~~~~~~~

// Play button event listener
startBtn.addEventListener("click",startGame)

// instructions hover

// player selection from form dropdown 



// homescreen button

