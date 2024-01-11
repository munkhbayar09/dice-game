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

document.querySelector(" .dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
      var diceNumber = Math.floor (Math.random () * 6) + 1;
      diceDom.style.display = "block";
      diceDom.src = "dice-" + diceNumber + ".png";
      

      alert("shoo buulaa :" + diceNumber);
});
