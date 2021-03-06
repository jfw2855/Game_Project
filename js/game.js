

/* ~~~~~~~~~~~~~~~~~DOM VARIABLES ~~~~~~~~~~~~~~~~ */
//defined DOM variables that will be used to manipulate the DOM

//homescreen DOM variables
const homeContainer = document.getElementById("home-container")
const title = document.getElementById("title")
const rules = document.getElementById("rules")
const startBtn = document.getElementById("start")
const help = document.getElementById("help")

//gamescreen DOM variables
const gameContainer = document.getElementById("game-container")
gameContainer.style.display="none"
const question = document.getElementById("question")
const displayCurrentPlayer = document.getElementById("current-player")
const lyricLine = document.getElementById("lyricLine")
const songId = document.getElementById("songId")
const timeLeft = document.getElementById("timeLeft")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
let optionsArr = [option1,option2,option3,option4]

//endgame DOM variables
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
let lyricStr 
let lyricArr
let lyricToAnimate
let currentPlayer = "p1"
let gameMusic = new Audio ()
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
let count = 10
let countdown
let lyricCount
let showLyric

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
        //keeps generating a random number until it is not in the wrongAnsList
        randomNum=rndNum(musicLibEdit.length)
        if (!wrongAnsList.includes(randomNum)) {
            wrongAnsList.push(randomNum)
        }
    }
}



// startGame - hides homescreen elements and move to next

function startGame () {
    playGameMusic()
    //creates the songs that will be used for the 8 rounds
    makeMusicLib()
    generateSongs()
    playRound()
    homeContainer.style.display="none"
    gameContainer.style.display="flex"
}



// animateLyric - animates the lyric for the current song

function animateLyric () {

    // Starts first part of lyric
    if (lyricCount===0) {
        lyricToAnimate+=`Lyric: "${lyricArr[lyricCount]} `
    }

    // Adds words to middle section of lyric
    else if (lyricCount!==(lyricArr.length-1)) {
        lyricToAnimate+=lyricArr[lyricCount] + " "
    }

    // Adds last word to lyric and removes showLyric interval
        // begins timer for player to make a selection
    else {
        lyricToAnimate+=lyricArr[lyricCount]+`"`
        clearInterval(showLyric)
        countdown = setInterval (timer, 1000)
        lyricCount = 0
        //Adds an event listener to each option button
        optionsArr.forEach(item => {
            item.addEventListener("click",checkSelection)
        })
    }
    lyricCount ++

    //Animates lyric based on current index of the lyricArr
    lyricLine.textContent=lyricToAnimate
}



// playRound - prompts current player with a lyric and song title options

function playRound () {
    
    lyricCount = 0
     //resets timer to say 10 seconds
    count = 10
    timeLeft.textContent = count
    madeSelection=false
    songId.textContent=""
    wrongAnsList=[]
    genWrongAns ()
    let randomChoice

    // Sets current round song based on the index of gameSongs 
    currentSong=gameSongs[questionNum]
    lyricStr = currentSong.lyric
    lyricArr=lyricStr.split(" ")
    lyricToAnimate = ""
    questionNum++

    //Displays round's song # and animates lyric
    lyricLine.textContent=""
    question.textContent=`Song Number ${questionNum}`
    showLyric = setInterval(animateLyric, 380)


    // Sets answer to question and creates an array of choice (starting with answer)
    answer=currentSong.title
    choices = [answer]

    // Pops/Pushes each index from genWrongAns() to populate choices array with the wrong answers
    while (wrongAnsList.length>0) {
        let nextNum = wrongAnsList.pop()
        choices.push(musicLibEdit[nextNum].title)
    }

    // Randomly sorts choices to option buttons and adds eventlistener to each (checkSelection)
        // prevents first choice being the answer
    for (let i=0; i<4;i++) {
        randomNum = rndNum(choices.length)
        randomChoice = choices[randomNum]
        optionsArr[i].textContent=randomChoice
        optionsArr[i].classList.add("optBtns_hover")
        choices.splice(randomNum,1)
    }  
}


// timer - displays time left to answer the question

function timer () {
    timeLeft.textContent = count

    // if player doesn't select an answer & time runs out
    if (count === 0 && !madeSelection) {
        
        clearInterval(countdown)
        playIncorrectSound ()
        // prevents player to select an option once time is up
        optionsArr.forEach(item => {
            item.classList.remove("optBtns_hover")
            item.removeEventListener("click", checkSelection)
        })
        madeSelection=true
        round++
        songId.textContent=`Time is up! The answer is ${currentSong.title} by ${currentSong.artist}`
        // continues game
        if (round<9) {
            switchPlayer()
    
            setTimeout(playRound,3000)
        }
        //ends game
        else {
            setTimeout(endGame, 3000)
        }
    }
    count --
}




// checkSelection - will determine if the player selected the right answer
    // updates score based on right/wrong answer
    // will invoke endGame() if rounds>8

function checkSelection (e) {

    // prevents player from reselecting a choice from current question
    optionsArr.forEach(item => {
        item.classList.remove("optBtns_hover")
        item.removeEventListener("click", checkSelection)
    })
    clearInterval(countdown)
    madeSelection=true

    round++

    // Sets the button clicked to playerSelection
    let playerSelection = e.target.textContent

    // Player makes correct selection, plays correct sound and displays green background
    //for the button selected
    if (playerSelection===answer) {
        playCorrectSound()
        e.target.classList.add("correct")
        songId.textContent=`Correct!!! The answer is ${currentSong.title} by ${currentSong.artist}`

        // Adds 1 point to the current player's score
        if (currentPlayer==="p1") {
            player1Score++
        }
        else {
            player2Score++
        }
    }
    //Player makes incorrect selection, plays incorrect sound and displays red background 
    // for the button selected
    else {
        playIncorrectSound ()
        e.target.classList.add("wrong") 
        songId.textContent=`Incorrect!!! The answer is ${currentSong.title} by ${currentSong.artist}`
    }
    // Removes selected choices background (green or red)
    setTimeout(function () {
        e.target.classList.remove("correct")
        e.target.classList.remove("wrong")
    },3000)

    //Continues game 
    if (round<9) {
        setTimeout(switchPlayer, 3000)

        setTimeout(playRound,3000)
    }
    //Moves to endGame
    else {
        setTimeout(endGame, 3000)
    }

}



// switchPlayer - switches to the next player

function switchPlayer () {
    if (currentPlayer==="p1") {
        currentPlayer="p2"
        displayCurrentPlayer.textContent="Player 2: Pick the Correct Song!"
    }
    else {
        currentPlayer="p1"
        displayCurrentPlayer.textContent="Player 1: Pick the Correct Song!"
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


// playGameMusic - plays game music

function playGameMusic () {
    gameMusic.src="sounds/game_music.wav"
    gameMusic.loop = true
    gameMusic.play()
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
    currentSong = ""
    currentPlayer = "p1"
    musicLib = []
    musicLibEdit = ""
    roundLib = ""
    answer = ""
    choices = []
    wrongAnsList = []
    madeSelection = false
    displayCurrentPlayer.textContent="Player 1"

}



/* ~~~~~~~~~~~~~~~~~EVENTLISTENERS ~~~~~~~~~~~~~~~~ */

// Play button event listener
startBtn.addEventListener("click",startGame)


// homescreen button

homeBtn.addEventListener("click",returnHome)






