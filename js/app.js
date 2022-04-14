// Variables for audio


// this may cause perfomance problems and wierd behavior
// simple fix should be to understand memory management on the wen
// here is a resourse https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
function playSound(audioURL) {
    const audioObject = new Audio(audioURL)
    audioObject.play()
}

// this is totally unnnessary but i will leave
// it here incase something has to be done with it
function stopSound(audioObject, fadeSteps= 0.2) {
    let soundVolume = 1
    let soundTimer = setInterval(() => {
        soundVolume -= fadeSteps
        if (soundVolume <= 0) {
            clearInterval(soundTimer)
            soundVolume = 1
            audioObject.pause()
            audioObject.currentTime = 0
        }
    }, 50);
}

function audioIsPlaying(audioObject) {
    return !audioObject.paused
}

function initializeKeySound(elementSelector, audioURL) {
    document.querySelector(elementSelector).addEventListener("click", () => {
        playSound(audioURL)
    })
}

// Initialise sound on keypress
function initializeKeySoundOnKeypress(letter) {
    switch (letter) {
        case "a":
            initializeKeySound("#c3", "notes/C3.mp3")
            break;
        case "s":
            initializeKeySound("#d3", "notes/D3.mp3")
            break;
    }
}

// Play sound on keypress
document.addEventListener("keypress", (event) => {
    initializeKeySoundOnKeypress(event.key)
})

// C Notes
const cThree = new Audio()
// cThree.src = 'notes/C3.mp3'
initializeKeySound("#c3", "notes/C3.mp3")

const cFour = new Audio()
// cFour.src = 'notes/mC4.mp3'

initializeKeySound("#c4", "notes/mC4.mp3")

const cFive = new Audio()
// cFive.src = 'notes/C5.mp3'

initializeKeySound("#c5", "notes/C5.mp3")

const cSix = new Audio()
// cSix.src = 'notes/C6.mp3'
initializeKeySound("#c6", "notes/C6.mp3")

// C Sharp Notes
const cSharpFour = new Audio()
// cSharpFour.src = 'notes/Cs4.mp3'
initializeKeySound("#cs4", "notes/Cs4.mp3")

const cSharpFive = new Audio()
// cSharpFive.src = 'notes/Cs5.mp3'
initializeKeySound("#cs5", "notes/Cs5.mp3")

// D Notes
const dThree = new Audio()
// dThree.src = 'notes/D3.mp3'
initializeKeySound("#d3", "notes/D3.mp3")

const dFour = new Audio()
// dFour.src = 'notes/D4.mp3'
initializeKeySound("#d4", "notes/D4.mp3")

const dFive = new Audio()
// dFive.src = 'notes/D5.mp3'
initializeKeySound("#d5", "notes/D5.mp3")

// D Sharp Notes
const dSharpThree = new Audio()
// dSharpThree.src = 'notes/Ds3.mp3'
initializeKeySound("#ds3", "notes/Ds3.mp3")

const dSharpFour = new Audio()
// dSharpFour.src = 'notes/Ds4.mp3'
initializeKeySound("#ds4", "notes/Ds4.mp3")

// E Notes
const eThree = new Audio()
// eThree.src = 'notes/E3.mp3'
initializeKeySound("#e3", "notes/E3.mp3")

const eFour = new Audio()
// eFour.src = 'notes/E4.mp3'
initializeKeySound("#e4", "notes/E4.mp3")

const eFive = new Audio()
// eFive.src = 'notes/E5.mp3'
initializeKeySound("#e5", "notes/E5.mp3")

// F Notes
const fThree = new Audio()
// fThree.src = 'notes/F3.mp3'
initializeKeySound("#f3", "notes/F3.mp3")

const fFour = new Audio()
// fFour.src = 'notes/F4.mp3'
initializeKeySound("#f4", "notes/F4.mp3")

// F Sharp Notes
const fSharpThree = new Audio()
// fSharpThree.src = 'notes/Fs3.mp3'
initializeKeySound("#fs3", "notes/Fs3.mp3")

const fSharpFour = new Audio()
// fSharpFour.src = 'notes/Fs4.mp3'
initializeKeySound("#fs4", "notes/Fs4.mp3")

const fSharpFive = new Audio()
// fSharpFive.src = 'notes/Fs5.mp3'
initializeKeySound("#fs5", "notes/Fs5.mp3")

// G Notes
const gThree = new Audio()
// gThree.src = 'notes/G3.mp3'
initializeKeySound("#g3", "notes/G3.mp3")

const gFour = new Audio()
// gFour.src = 'notes/G4.mp3'
initializeKeySound("#g4", "notes/G4.mp3")

const gFive = new Audio()
// gFive.src = 'notes/G5.mp3'
initializeKeySound("#g5", "notes/G5.mp3")

// G Sharp Notes
const gSharpFour = new Audio()
// gSharpFour.src = 'notes/Gs4.mp3'
initializeKeySound("#gs4", "notes/Gs4.mp3")

// A Notes
const aThree = new Audio()
// aThree.src = 'notes/A3.mp3'
initializeKeySound("#a3", "notes/A3.mp3")

const aFour = new Audio()
// aFour.src = 'notes/A4.mp3'
initializeKeySound("#a4", "notes/A4.mp3")

const aFive = new Audio()
// aFive.src = 'notes/A5.mp3'
initializeKeySound("#a5", "notes/A5.mp3")

// A Sharp Notes
const aSharpThree = new Audio()
// aSharpThree.src = 'notes/As3.mp3'
initializeKeySound("#as3", "notes/As3.mp3")

const aSharpFour = new Audio()
// aSharpFour.src = 'notes/As4.mp3'
initializeKeySound("#as4", "notes/As4.mp3")

const aSharpFive = new Audio()
// aSharpFive.src = 'notes/As5.mp3'
initializeKeySound("#as5", "notes/As5.mp3")

// B Notes
const bThree = new Audio()
// bThree.src = 'notes/B3.mp3'
initializeKeySound("#b3", "notes/B3.mp3")

const bFour = new Audio()
// bFour.src = 'notes/B4.mp3'
initializeKeySound("#b4", "notes/B4.mp3")

const bFive = new Audio()
// bFive.src = 'notes/B5.mp3'
initializeKeySound("#b5", "notes/B5.mp3")
