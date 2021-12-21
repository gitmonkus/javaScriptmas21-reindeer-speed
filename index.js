const speedometer = document.getElementById("speedometer")
const currentPlace = document.getElementById("destination")
const select = document.getElementById("select")
const time = document.getElementById("time")
const audio = new Audio('audio/audio.mp3')
document.getElementById('cutey').addEventListener('click', function() {
    audio.volume = .4
    this.style.animation = 'cutey 1s 45 ease-in-out'
    audio.play()
})

time.addEventListener('change', calculateSpeed)
select.addEventListener('change', calculateSpeed)

let currentLocation = ""
let timeTaken = 0
let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    timeTaken = time.value
    if (timeTaken > 0) {
         for (let dest in destination) {
        if (currentLocation === destination[dest].name) {
            speed = Math.floor(destination[dest].distanceFromPrevDestination / timeTaken)
            speedometer.textContent = speed
            currentPlace.textContent = currentLocation
            break
        }
    }
   
    } 
}

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.

   // Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.