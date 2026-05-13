// Тоглогчийн ээлжийг халгалах хувисагч, 1-р тоглогчийг 0,2-р тоглогчийг 1, гэж тэмдэглэе.
var activePlayer = 0;
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
// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
    // 1-6 dotorh sanamsargui neg too gargaj awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Shoornii zuragiigweb deer gargaj irne
    diceDom.style.display = "block";
    // buusan sanamsargui tooni hargalzah shoonii zurgiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + '.png';
    // buusan too n 1ees ylgaatai bol idewhtei toglogchiin  eeljiin onoog oorchilno
    if (diceNumber !== 1) {
        //1-ees yalgaatai too buulaa. buusan toog toglogchid nemj ogno
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        //1 buusan tul toglogchiin eeljiigene hesegt solij ogno
        switchToNextPlayer()
    }
});
// HOLD towchnii eventlistener
document.querySelector(".btn-hold").addEventListener("click", function () {
    // ug toglogchiin tsugluulsan eeljnii ongoog global onoon deer n nemj ogno.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 10) {
        document.getElementById("name-" + activePlayer).textContent = 'Winner!!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        switchToNextPlayer()
    }
    // delgets deer onoog n oorchilno

    switchToNextPlayer()
});
// ene function n togloh eeljiig daraachiin toglogchruu shiljvvldeg
function switchToNextPlayer() {
    // ene toglogchiin tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //  toglogchiin eeljiig nogoo tolgoch ruu shiljvvlne
    //herew idewhtei toglogch 0 baiwl idewhitei toglogchiig 1 bolgo
    // ugui bol idewhitei toglogchiig 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Ulaan tsegiig shiljvvleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //shoog tvr alga bolgono
    diceDom.style.display = "none";
}

// shine togloom ehlvvleh towchni eventlistener
document.querySelector(".btn-new").addEventListener('click')