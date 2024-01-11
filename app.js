// toglogchiin eeljiig hadgalah huvsagchdddd, negdugeer toglogch "0"  hoyerdugaarhiig "1"
var activePlayer = 1;


// toglogchiin tsugluulsan onoog hadgalah huvsagch
var scores = [0, 0];

// toglogchiin eeljindee avah onoog tsugluulah
var roundScore = 0;

// shoonii al taliig buusniig hadgalah huvi, 1-6 utga randomoor
var diceNumber = Math.floor (Math.random () * 6) + 1;

// div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;

// программ эхлэхэд бэлтгэх

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = '0';

document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(" .dice")

diceDom.style.display = "none";

// shoog shideh event
document.querySelector(".btn-roll").addEventListener("click", function () {

// 1-6 hurtel sanamsargui gargaj avna
      var diceNumber = Math.floor (Math.random () * 6) + 1;

// shoonii zurgiig web deer gargaj irne
      diceDom.style.display = "block";

// buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
      diceDom.src = "dice-" + diceNumber + ".png";

// buusan too 1-s ylgaatai bol nemegduulne
      if (diceNumber !== 1){
            // 1-s ylgaatai buulaa nemegduul
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
      }
      else {
            // 1 buulaa solino
            // ene toglogchiin eeljiin onoog 0 bolgono
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;

            
            // eeljiin shiljuulne
            // idevhtee toglogch 0 baival 1 bolgo
            // ugui bol 0 bolgo
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

            // ulaan tsegiig shiljuul
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            // shoog tur alga bolgoh
            diceDom.style.display = "none";


            // if(activePlayer === 0) {
            //       activePlayer = 1;
            // }
            // else {
            //       activePlayer = 0;
            // }

      }
});
