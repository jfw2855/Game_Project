
// Defined DOM variables
const title = document.getElementById("title")
const rules = document.getElementById("rules")
const startBtn = document.getElementById("start")
const help = document.getElementById("help")
const gameContainer = document.getElementById("game-container")
gameContainer.style.display="none"
const question = document.getElementById("question")
const lyricLine = document.getElementById("lyricLine")
const songId = document.getElementById("songId")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
let optionsArr = [option1,option2,option3,option4]
const endContainer = document.getElementById("end-container")
const endTitle = document.getElementById("endTitle")
endContainer.style.display="none"
const socreBoard = document.getElementById("scoreBoard")
const player1SB = document.getElementById("player1SB")
const player2SB = document.getElementById("player2SB")


// defined variables to keep track of the gameplay (playerScore, round)

let round = 1
let player1Score = 0
let player2Score = 0
let questionNum = 0
let gameSongs = []
let currentSong
let currentPlayer = "p1"
let correctSound = new Audio ()
let incorrectSound = new Audio ()
let musicLib = []
let musicLibEdit = []
let roundLib
let answer
let choices = []
let randomNum
let wrongAnsList = []
let madeSelection = false



// class for decades which will have a constructor (decades,songs)
    // song objects that will store the title, artist, lyric []


class Song {
    constructor(title,artist,lyric) {
        this.title=title,
        this.artist=artist,
        this.lyric=lyric
    }
}

// Songs 
const song1 = new Song(
    "Don't Speak", 
    "No Doubt",
    "And if it's real, well, I don't want to know"
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
    "Spice Girls",
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

const song14 = new Song (
    "Always Be My Baby",
    "Mariah Carey",
    "But inevitably you'll be back again"
)

const song15 = new Song (
    "California Luv",
    "Tupac Shakur",
    "Where cowards die and the strong ball"
)

const song16 = new Song (
    "Gin and Juice",
    "Snoop Dogg",
    "As I take me a drink to the middle of the street"
)

const song17 = new Song (
    "What's My Age Again?",
    "Blink-182",
    "I wore cologne to get the feeling right"
)

const song18 = new Song (
    "Say It Ain't So",
    "Weezer",
    "I write you in spite of years of silence"
)

const song19 = new Song (
    "...Baby One More Time",
    "Britney Spears",
    "When I'm not with you, I lose my mind"
)

const song20 = new Song (
    "All My Life",
    "K-Ci & JoJo",
    "I will never find another lover sweeter than"
)


// Stores songs into music library array and edit version
for (let i=1; i<21; i++) {
musicLib.push(eval(`song${i}`))
}




// Functions ~~~~~~~~~~~~~~~~


// random number generator - ex. if passed 3, will generate a whole number from 0 to 2
function rndNum (num) {
    return Math.floor(Math.random()*num);
}

// Picks random songs from music library array to use for gameplay

function generateSongs () {
    musicLibEdit=musicLib
    for (let i=0;i<8;i++) {
        randomNum = rndNum(musicLibEdit.length)
        gameSongs.push(musicLibEdit[randomNum])
        musicLibEdit.splice(randomNum,1)

    }

}





//Generates the wrong answers for the round
    // A way to fix my shallow copy issue
function genWrongAns () {
    while (wrongAnsList.length<3) {
        randomNum=rndNum(12)
        if (!wrongAnsList.includes(randomNum)) {
            wrongAnsList.push(randomNum)
        }
    }
}








// startGame - hide homescreen elements and move to next
function startGame () {
    playRound()
    title.style.visibility="hidden"
    rules.style.display="none"
    startBtn.style.display="none"
    gameContainer.style.display="block"

}
    // keeps track of rounds
    // if rounds is > 8 , will move to endGame


// playround - will animate the lyrics and then prompt player 1 what is the next line
function playRound () {
    madeSelection=false
    songId.textContent=""
    wrongAnsList=[]
    genWrongAns ()
    let randomChoice
    currentSong=gameSongs[questionNum]
    questionNum++
    question.textContent=`Song Number ${questionNum}`
    lyricLine.textContent=`Lyric: "${currentSong.lyric}"`
    answer=currentSong.title
    choices = [answer]
    while (wrongAnsList.length>0) {
        let nextNum = wrongAnsList.pop()
        choices.push(musicLibEdit[nextNum].title)
        console.log(wrongAnsList)
    }

    for (let i=0; i<4;i++) {
        randomNum = rndNum(choices.length)
        randomChoice = choices[randomNum]
        optionsArr[i].textContent=randomChoice
        optionsArr[i].addEventListener("click", checkSelection)
        choices.splice(randomNum,1)
    }  
}

// checkRight - will determine if the player selected the right answer
    // updates score based on right/wrong answer

function checkSelection (e) {

    // prevents player from reselecting a choice from current question
    if (madeSelection) return

    madeSelection=true

    round++

    let playerSelection = e.target.textContent

    if (playerSelection===answer) {
        playCorrectSound()
        songId.textContent=`Correct!!! The answer is ${currentSong.title} by ${currentSong.artist}`
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
        songId.textContent=`Error!!! The answer is ${currentSong.title} by ${currentSong.artist}`
        console.log("wrong!")
    }
    if (round<9) {
        switchPlayer()
        setTimeout(playRound,4500)
    }
    else {
        setTimeout(endGame, 4500)
    }

}

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
    player1SB.textContent=`Player 1 Score: ${player1Score}`
    player2SB.textContent=`Player 2 Score: ${player2Score}`
    
}

function playCorrectSound () {
    correctSound.src="sounds/right.mp3"
    correctSound.play()
}

function playIncorrectSound () {
    correctSound.src="sounds/wrong.wav"
    correctSound.play()
}
// Functions to invoke at pageload
generateSongs()

// Eventlisteners ~~~~~~~~~~~~~~~

// Play button event listener
startBtn.addEventListener("click",startGame)

// instructions hover


// homescreen button

