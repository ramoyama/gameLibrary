const target = document.getElementById('start');

const bordcontent =  document.getElementById('bord');
bordcontent.style.display = "none";

const cardcontent = document.getElementById('card');
cardcontent.style.display = "none";

const historylist = document.getElementById('list');

const form = document.getElementById('form');



function erase(){
  target.style.display ="none";
}

function bord(){
  target.style.display ="none";
  bordcontent.style.display = "flex";
}

function card(){
  target.style.display ="none";
  cardcontent.style.display = "flex";
}

function add(){
  // 新しいHTML要素を作成
  const text = document.getElementById('text');
  var new_element1 = document.createElement('p');
  new_element1.textContent = text.value;
  historylist.insertBefore(new_element1,historylist.firstChild);
  form.reset();
}
