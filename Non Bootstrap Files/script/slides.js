var responsiveSlider = function() {
    var slides = document.getElementById("slides");
    var sliderWidth = slides.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length; //Mencari jumlah elemen li pada slideList menggunakan .length, hasilnya akan 3
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    var nextSlide = function() {
        if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } //jika count < items, property left pada slideList akan -(count*sliderWidth)px
        else if(count = items) {
            slideList.style.left = "0px";
            count = 1;
        } //jika count = items, property left direset menjadi 0px
    };

    var prevSlide = function() {
        if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    next.addEventListener("click", function() {
        nextSlide();
    });

    prev.addEventListener("click", function() {
        prevSlide();
    });

    setInterval(function() {
        nextSlide()
    }, 5000);
    
};
    
window.onload = function() {
    responsiveSlider();  
}