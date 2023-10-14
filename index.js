const soundData = [
    {
        name: "rain",
        path: "files/assets/sounds/rain.mp3",
        chect: false,
        audio: new Audio("files/assets/sounds/rain.mp3"),
        value:50
    },
    {
        name: "summer",
        path: "files/assets/sounds/summer.mp3",
        chect: false,
        audio: new Audio("files/assets/sounds/summer.mp3"),
        value:100
    },
    {
        name: "winter",
        path: "files/assets/sounds/winter.mp3",
        chect: false,
        audio: new Audio("files/assets/sounds/winter.mp3"),
        value:100
    },
]
const startAudio = () => {
    soundData.forEach(e => {
        if (e.chect) {
            e.audio.play();
            e.value=e.value
        }
        else {
            e.audio.pause();
              outputUpdate(100)
        }
    })
}
const start = (names) => {
    soundData.forEach(e => {
        if (e.name == names) {
            e.chect = !e.chect;
        }
        else {
            e.chect = false;
        }
    })
    startAudio();
  
}
const btn = document.querySelectorAll('button')
btn.forEach(e => e.addEventListener('click', (e) => {
    let name = e.target.dataset.name;
    start(name);
}))



function outputUpdate(vol){
    console.log(vol);
soundData.forEach(e=>{
    e.audio.volume=vol/100;
})
}

let inout=document.querySelector('input').value
console.log(inout);
