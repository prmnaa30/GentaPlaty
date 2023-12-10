///====//beverages//====///
const bevMenu = document.getElementById('beverage-menu');
const bevButton = document.getElementById('bevButton');

// open expand function
bevButton.addEventListener('click', bevExpand);
function bevExpand(){
    bevMenu.style.maxHeight = '915px';
    // 200ms setelah foodButton di klik, eksekusi fungsi scrollFunc()
    setTimeout(() => {
        scrollFunc();
    }, 200);
    // scroll ke elemen dengan id #beverage-menu
    function scrollFunc() {
        bevMenu.scrollIntoView();
    }
} 
// close expand function
bevMenu.addEventListener('mouseleave', bevClose);
function bevClose() {
    bevMenu.style.maxHeight = '0';
}

///====//foods//====///
const foodMenu = document.getElementById('food-menu');
const foodButton = document.getElementById('foodButton');

// open expand function
foodButton.addEventListener('click', foodExpand);
function foodExpand() {
    foodMenu.style.maxHeight = '915px';
    // 200ms setelah foodButton di klik, eksekusi fungsi scrollFunc()
    setTimeout(() => {
        scrollFunc();
    }, 200);
    function scrollFunc() {
        // scroll ke elemen dengan id #food-menu
        foodMenu.scrollIntoView();
    }
}
// close expand function
foodMenu.addEventListener('mouseleave', foodClose);
function foodClose() {
    foodMenu.style.maxHeight = '0';
}