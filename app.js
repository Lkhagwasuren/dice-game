// Тоглогчийн ээлжийг халгалах хувисагч, 1-р тоглогчийг 0,2-р тоглогчийг 1, гэж тэмдэглэе.
var activePlayer = 1;
// Toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
// Toglogchiin eeljindee tsugluulj baigaa onooghadgalah huwisagch
var roundScore = 0;
// Shooni ali talaaraa buusniig hadgalah heregtei 1-6gesen utgaene huwisagchid sanamsargvigeer vvsgej ugnu

//programm ehelhed beltgey
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + '.png';
});
