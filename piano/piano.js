const pianokeys = document.querySelectorAll(".piano-keys .key");
let audio=new Audio("tunes/a.wav");
const playtune=(key) => {
    audio.src=`tunes/${key}.wav`;
    audio.play();
}
pianokeys.forEach(key =>{
    key.addEventListener("click",() => playtune(key.dataset.key));
});