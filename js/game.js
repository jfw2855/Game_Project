

/* ~~~~~~~~~~~~~~~~~DOM VARIABLES ~~~~~~~~~~~~~~~~ */

const homeContainer = document.getElementById("home-container")
const title = document.getElementById("title")
const rules = document.getElementById("rules")
const startBtn = document.getElementById("start")
const help = document.getElementById("help")
const gameContainer = document.getElementById("game-container")
gameContainer.style.display="none"
const question = document.getElementById("question")
const lyricLine = document.getElementById("lyricLine")
const songId = document.getElementById("songId")
const timeLeft = document.getElementById("timeLeft")
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
const homeBtn = document.getElementById("homeBtn")


/* ~~~~~~~~~~~~~~~~~ VARIABLES ~~~~~~~~~~~~~~~~ */
// defined variables to keep track of during gameplay 

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
let count = 3
let countdown 


/* ~~~~~~~~~~~~~~~~~ CLASSES ~~~~~~~~~~~~~~~~ */
// song objects that will store the title, artist, lyric


class Song {
    constructor(title,artist,lyric) {
        this.title=title,
        this.artist=artist,
        this.lyric=lyric
    }
}


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
    "Say My Name",
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

const song21 = new Song (
    "Smells Like Teen Spirit",
    "Nirvana",
    "A mulatto, an albino, a mosquito, my libido"
)

const song22 = new Song (
    "No Diggity",
    "Blackstreet and Dr. Dre",
    "I like the way you work it"
)

const song23 = new Song (
    "Wonderwall",
    "Oasis",
    "You're gonna be the one that saves me"
)

const song24 = new Song (
    "Gettin' Jiggy Wit It",
    "Will Smith",
    "Dance floor pro, I know you know"
)

const song25 = new Song (
    "What is Love",
    "Haddaway",
    "Baby, don't hurt me, don't hurt me"
)

const song26 = new Song (
    "Big Poppa",
    "The Notorious B.I.G.",
    "Throw your hands in the air if you's a true player"
)

const song27 = new Song (
    "Gonna Make You Sweat",
    "C+C Music Factory",
    "The crowd is live and I pursue this groove"
)

const song28 = new Song (
    "Remember the Time",
    "Michael Jackson",
    "You and me in Spain"
)

const song29 = new Song (
    "Bitter Sweet Symphony",
    "The Verve",
    "I'll take you down the only road I've ever been down"
)

const song30 = new Song (
    "My Heart Will Go On",
    "Celine Dion",
    "Near, far, wherever you are"
)

const song31 = new Song (
    "I Don't Want to Miss a Thing",
    "Aerosmith",
    "I don't want to close my eyes"
)

const song32 = new Song (
    "Un-Break My Heart",
    "Toni Braxton",
    "Don't leave me out in the rain"
)

const song33 = new Song (
    "You're Still the One",
    "Shania Twain",
    "The one that I belong to"

)

const song34 = new Song (
    "Zombie",
    "The Cranberries",
    "What's in your head, in your head"
)

const song35 = new Song (
    "My Name Is",
    "Eminem",
    "Ninety-nine percent of my life I was lied to"
)


/* ~~~~~~~~~~~~~~~~~FUNCTIONS ~~~~~~~~~~~~~~~~ */


// makeMusicLib - stores songs into music library array and edit version
function makeMusicLib () {
    musicLib=[]
    for (let i=1; i<36; i++) {
        musicLib.push(eval(`song${i}`))
        }
}

// rndNum - random number generator 
    // ex. if passed 3, will generate a whole number from 0 to 2

function rndNum (num) {
    return Math.floor(Math.random()*num);
}



// generateSongs - picks random songs from music library array to use for gameplay

function generateSongs () {
    musicLibEdit=musicLib
    for (let i=0;i<8;i++) {
        randomNum = rndNum(musicLibEdit.length)
        gameSongs.push(musicLibEdit[randomNum])
        musicLibEdit.splice(randomNum,1)

    }

}



//genWrongAns - generates the wrong answers for the round
    // A way to fix my shallow copy issue (spliced org array)

function genWrongAns () {
    while (wrongAnsList.length<3) {
        randomNum=rndNum(12)
        if (!wrongAnsList.includes(randomNum)) {
            wrongAnsList.push(randomNum)
        }
    }
}



// startGame - hides homescreen elements and move to next

function startGame () {
    makeMusicLib()
    generateSongs()
    console.log("gen song list", musicLibEdit)
    playRound()
    homeContainer.style.display="none"
    gameContainer.style.display="flex"
}



// playRound - will animate the lyrics and then prompt player 1 what is the next line

function playRound () {
    
    count = 3
    timeLeft.textContent = count
    countdown = setInterval (timer, 1000)
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
    }

    for (let i=0; i<4;i++) {
        randomNum = rndNum(choices.length)
        randomChoice = choices[randomNum]
        optionsArr[i].textContent=randomChoice
        optionsArr[i].addEventListener("click", checkSelection)
        choices.splice(randomNum,1)
    }  
}


// timer - displays time left to answer the question

function timer () {
    timeLeft.textContent = count
    if (count === 0 && !madeSelection) {
        
        clearInterval(countdown)
        playIncorrectSound ()
        madeSelection=true
        round++
        songId.textContent=`Time is up! The answer is ${currentSong.title} by ${currentSong.artist}`
        console.log("time's up!")
        if (round<3) {
            switchPlayer()
    
            setTimeout(playRound,400)
        }
        else {
            setTimeout(endGame, 400)
        }
    }
    count --
}




// checkSelection - will determine if the player selected the right answer
    // updates score based on right/wrong answer
    // will invoke endGame() if rounds>8

function checkSelection (e) {

    // prevents player from reselecting a choice from current question
    if (madeSelection) return
    clearInterval(countdown)
    madeSelection=true

    round++

    let playerSelection = e.target.textContent

    if (playerSelection===answer) {
        playCorrectSound()
        e.target.classList.add("correct")
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
        e.target.classList.add("wrong") 
        songId.textContent=`Error!!! The answer is ${currentSong.title} by ${currentSong.artist}`
        console.log("wrong!")
    }
    setTimeout(function () {
        e.target.classList.remove("correct")
        e.target.classList.remove("wrong")
    },390)
    if (round<3) {
        switchPlayer()

        setTimeout(playRound,400)
    }
    else {
        setTimeout(endGame, 400)
    }

}



// switchPlayer - switches to the next song and remove the lyrics from previous song

function switchPlayer () {
    if (currentPlayer==="p1") {
        currentPlayer="p2"
    }
    else {
        currentPlayer="p1"
    }
}



// displayWinner - displays who won the game in the endgame screen

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



// endGame - removes all play game divs and shows endgame screen

function endGame () {
    displayWinner()
    gameContainer.style.display="none"
    endContainer.style.display="flex"
    player1SB.textContent=`Player 1 Score: ${player1Score}`
    player2SB.textContent=`Player 2 Score: ${player2Score}`
    
}



// playCorrectSound - plays "correct" sound
function playCorrectSound () {
    correctSound.src="sounds/right.mp3"
    correctSound.play()
}



// playIncorrectSound - plays "incorrect" sound
function playIncorrectSound () {
    correctSound.src="sounds/wrong.wav"
    correctSound.play()
}


// returnHome - returns to the homescreen to allow players to replay game
    // resets all gameplay values 
function returnHome () {
    endContainer.style.display="none"
    homeContainer.style.display="flex"
    
    round = 1
    player1Score = 0
    player2Score = 0
    questionNum = 0
    gameSongs = []
    currentSongn = ""
    currentPlayer = "p1"
    musicLib = []
    musicLibEdit = ""
    roundLib = ""
    answer = ""
    choices = []
    wrongAnsList = []
    madeSelection = false

}



/* ~~~~~~~~~~~~~~~~~EVENTLISTENERS ~~~~~~~~~~~~~~~~ */

// Play button event listener
startBtn.addEventListener("click",startGame)


// homescreen button

homeBtn.addEventListener("click",returnHome)



