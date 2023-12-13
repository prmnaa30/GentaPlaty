// Deklrarasi Js untuk Overlay dan OverlayButton
const overlayContent = document.getElementById('overlay-content');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Button Hover
openBtn.addEventListener('mouseover', hoverFunc);
function hoverFunc() {
    document.getElementById('btn-text').style.maxWidth = '300px';
};
openBtn.addEventListener('mouseout', hoverFunc2);
function hoverFunc2() {
    document.getElementById('btn-text').style.maxWidth = '0';
};

// Overlay toggle
openBtn.addEventListener('click', openOverlay);
closeBtn.addEventListener('click', closeOverlay);

function openOverlay() {
    overlayContent.style.display = 'block';
};
function closeOverlay() {
    overlayContent.style.display = 'none';
};