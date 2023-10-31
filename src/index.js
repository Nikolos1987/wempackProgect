import { soundData } from "./soundData.js";
import './index.css'

const startAudio = () => {
    soundData.forEach(e => {
        if (e.chect) {
            e.audio.play();
            e.value = 1
        }
        else {
            e.audio.pause();
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
    let index = soundData.findIndex(e => e.name == names)
    startAudio();
    chengebg(names);
    range(names);
    renderUnput(index)

}
const btn = document.querySelectorAll('button');
btn.forEach(e => e.addEventListener('click', (e) => {
    let name = e.target.dataset.name;
    start(name);
}))


const chengebg = (url) => {
    document.querySelector('.blur').style.backgroundImage = `url('files/assets/${url}-bg.jpg')`
}
const range = (index) => {
    let inpt = document.querySelectorAll('.range')


}
function renderUnput(index) {
    let el = document.querySelector('.slider')
    if (el) {
        el.remove()
    }
    let inpt = document.querySelectorAll('.wrapper__BTN')
    inpt[index].insertAdjacentHTML("beforeend", `<div class="slider">
    <input id="myrange" type="range" value="100" max="100" min="0">
  </div>`)
    soundData.forEach(e => {
        e.audio.volume = 1
    });
    document.getElementById("myrange").addEventListener("change", function () {
        console.log(this.value);
        soundData[index].audio.volume = this.value / 100;
    });

}


