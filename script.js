'strict mode';
let bbCard = document.getElementById('baseballCard');
let flipper = document.getElementById('flipper');
let isFlipped = /flipped/gi;

function flip(el) {
  el.className = isFlipped.test(el.className) ? '' : 'flipped';
}

bbCard.addEventListener("click", function() {
  flip(flipper);
}, false);