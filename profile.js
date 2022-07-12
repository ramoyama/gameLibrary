const gametab = document.getElementById('game_tab');
gametab.style.backgroundColor = "#d9d9d9";
gametab.style.color = "#333333";
gametab.style.borderBottom = "3px solid #c9624f"
const ruletab = document.getElementById('rule_tab');
const goodtab = document.getElementById('good_tab');

const gamecontent =  document.getElementById('game');
const rulecontent = document.getElementById('rule');
rulecontent.style.display = "none";
const goodcontent = document.getElementById('good');
goodcontent.style.display = "none";

function game(){
  gamecontent.style.display = "flex";
  rulecontent.style.display = "none";
  goodcontent.style.display = "none";

  gametab.style.backgroundColor = "#d9d9d9";
  gametab.style.color = "#333333";
  gametab.style.borderBottom = "3px solid #c9624f"

  ruletab.style.backgroundColor = "#fdfcfa";
  ruletab.style.color = "#9ca3af";
  ruletab.style.borderBottom = "none"

  goodtab.style.backgroundColor = "#fdfcfa";
  goodtab.style.color = "#9ca3af";
  goodtab.style.borderBottom = "none"
}

function rule(){
  gamecontent.style.display = "none";
  rulecontent.style.display = "flex";
  goodcontent.style.display = "none";

  ruletab.style.backgroundColor = "#d9d9d9";
  ruletab.style.color = "#333333";
  ruletab.style.borderBottom = "3px solid #c9624f"

  gametab.style.backgroundColor = "#fdfcfa";
  gametab.style.color = "#9ca3af";
  gametab.style.borderBottom = "none"

  goodtab.style.backgroundColor = "#fdfcfa";
  goodtab.style.color = "#9ca3af";
  goodtab.style.borderBottom = "none"
}

function good(){
  gamecontent.style.display = "none";
  rulecontent.style.display = "none";
  goodcontent.style.display = "flex";

  goodtab.style.backgroundColor = "#d9d9d9";
  goodtab.style.color = "#333333";
  goodtab.style.borderBottom = "3px solid #c9624f"

  gametab.style.backgroundColor = "#fdfcfa";
  gametab.style.color = "#9ca3af";
  gametab.style.borderBottom = "none"

  ruletab.style.backgroundColor = "#fdfcfa";
  ruletab.style.color = "#9ca3af";
  ruletab.style.borderBottom = "none"
}