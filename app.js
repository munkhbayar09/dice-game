// toglogchiin eeljiig hadgalah huvsagchdddd, negdugeer toglogch "0"  hoyerdugaarhiig "1"
var activePlayer = 1;


// toglogchiin tsugluulsan onoog hadgalah huvsagch
var scores = [0, 0];

// toglogchiin eeljindee avah onoog tsugluulah
var roundScore = 0;

// shoonii al taliig buusniig hadgalah huvi, 1-6 utga randomoor
var dice = Math.floor (Math.random () * 6) + 1;

// div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;

// программ эхлэхэд бэлдэх
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(" .dice").style.display = "none";

console.log("shoo :" + dice);
