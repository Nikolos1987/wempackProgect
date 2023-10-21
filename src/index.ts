import {soundData} from "./soundData";
import './index.css'
const startAudio = () => {
    soundData.forEach(e => {
        if (e.chect) {
            e.audio.play();
            e.value = e.value
        }
        else {
            e.audio.pause();
            outputUpdate(100)
        }
    })
}
const start = (names:string|undefined) => {
    soundData.forEach(e => {
        if (e.name == names) {
            e.chect = !e.chect;
        }
        else {
            e.chect = false;
        }
    })
    startAudio();
    chengebg(names);
    range(names);
}
const btn = document.querySelectorAll('button');
btn.forEach(e => e.addEventListener('click', (e) => {
    let name = (e.target as HTMLElement).dataset.name;
    start(name);
    
  
}))
function outputUpdate(vol:any) {
    soundData.forEach(e => {
        e.audio.volume = vol / 100;
    });
}

// let inout = document.querySelector('input').value
const chengebg = (url:string|undefined) => {
    let qery:HTMLElement|null=document.querySelector('.blur')
    if (typeof qery){
        (qery as HTMLElement).style.backgroundImage = `url('files/assets/${url}-bg.jpg')`
    }
  
}
const range = (names:string|undefined) => {
    let inpt:NodeListOf<HTMLElement> = document.querySelectorAll('.range')
    let index = soundData.findIndex(e => e.name == names)
    inpt.forEach(e => {
        e.style.display = 'none'
    })
    inpt[index].style.display = 'block'
}


