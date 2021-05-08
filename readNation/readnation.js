/*
Just target teh paragraph-wrapper and change teh dipla yto block. Then remove the modals
*/

var messageDivs = document.querySelectorAll(".paragraph-wrapper");

for (var i = 0; i < messageDivs.length; i++) {
    var cur = messageDivs[i];
    cur.style.display = 'block'
    cur.classList.remove('datawall-content');
}
document.querySelector("body").classList.remove('evolok-loaded', 'ev-modals', 'modal-open');