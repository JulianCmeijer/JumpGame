//
//

const startknop = document.querySelector(".startgame");
startknop.addEventListener('click', startspel);

function startspel() {
    document.querySelector('.startgame').style.display = 'none';
    document.querySelector('.game').style.display = 'block';
    const character = document.getElementById("character");
    const blok = document.getElementById("blok");
} 
//Wat niet van mijzelf is .style.display dit heb ik gegoogled. Ik wou weten hoe ik een style tijdelijk onzichtbaar kon maken. In dit geval is het de class ".game"  totdat de fuctie wordt uitgevoerd.

//hier wordt de score berekent//
let score = 0

setInterval (function() {
    score++ 
    document.getElementById("score_nummer").textContent = score;
}, 100);

//
// 

const jumpSound = new Audio('sound/jump_sound.mp3');
let soundPlaying = false;

function spring() {
    character.classList.add("animatie");
    setTimeout(() => character.classList.remove("animatie"), 500)

    if (!soundPlaying) {
        jumpSound.play();
        soundPlaying = true;
        jumpSound.addEventListener('ended', () => {
            soundPlaying = false;
        });
    }
} 
//Lijn 26, 27 en 33 t/m 36 zijn van AI. zie bronnenlijst voor prompts//
 
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        spring();
    }
})

//
//

function einde() {
    const blokcollide = blok.getBoundingClientRect();
    const blokX = blokcollide.x;
    const charactercollide = character.getBoundingClientRect();
    const characterY = charactercollide.y;
//Lijn 41 t/m 44 is van AI. Zie bronnenlijst voor promts//
    
//character rechts || character links//
if (blokX >= 20 + charactercollide.x || blokX <= charactercollide.x) {
    return;
}
else if (characterY > 131) {
    alert("Je hebt verloren loser")
    score = 0; //Score wordt weer terug naar 0 gezet wanneer de alert weg is. Je kan tijdens de alert zien wat je score is//
}}

setInterval(einde, 10)
     
//OVERZICHT//
//Lijn 26, 27, 33 t/m 36 en 41 t/m 44 zijn van AI. Zie bronnenlijst voor promts//
// 11 van 68 lijnen van AI//
//OVERZICHT//