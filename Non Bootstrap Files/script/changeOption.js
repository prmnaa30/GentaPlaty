const drinkSelect = document.getElementById('drinks');
const drinkType = document.getElementById('drinkType');
const blank = document.getElementById('blank');
const iced = document.getElementById('iced');
const hot = document.getElementById('hot');

// .value digunakan untuk mendapatkan isi dari value
// pada input pilihan dengan id #drinks //
// eventListened 'change' akan memeriksa perubahan pilihan 
// saat memilih drink. //
drinks.addEventListener('change', changeOpt);
function changeOpt() {
    if (drinkSelect.value == 'None') {
        //jika None, maka tidak dapat memilih iced/hot
        drinkType.disabled = true;
        drinkType.add(blank, drinkType[0]);
    }
    // untuk beverages yang hanya ada pilihan 'hot'
    else if (drinkSelect.value == 'Red-Eye' || drinkSelect.value == 'Hot-Chocolate') {
        blank.remove();
        drinkType.disabled = false;
        iced.disabled = true; //pilihan iced jadi tidak bisa dipilih
        hot.disabled = false; //pilihan hot jadi bisa dipilih
        hot.selected = true; //pilihan hot akan langsung terpilih
    }
    // untuk beverages yang hanya ada pilihan 'iced'
    else if (
        drinkSelect.value == 'Affogato' || 
        drinkSelect.value == 'Cold-Brew-Coffee' ||
        drinkSelect.value == 'Nitro-Cold-Brew' ||
        drinkSelect.value == 'Frappuccino' ||
        drinkSelect.value == 'Turkish-Coffee' ||
        drinkSelect.value == 'Matcha-Latte' ||
        drinkSelect.value == 'Squeezed-Lemonade' ||
        drinkSelect.value == 'Smoothies' ||
        drinkSelect.value == 'Italian-Soda' ||
        drinkSelect.value == 'Virgin-Mojito' ||
        drinkSelect.value == 'Mango-Tango' ||
        drinkSelect.value == 'Lemon-Tea'
        ) {
            blank.remove();
            drinkType.disabled = false;
            hot.disabled = true; //pilihan hot jadi tidak bisa dipilih
            iced.disabled = false; //pilihan iced jadi bisa dipilih
            iced.selected = true; //pilihan iced akan langsung dipilih
        }
    // untuk beverages yang ada pilihan 'iced' dan 'hot'
    else {
        blank.remove();
        drinkType.disabled = false;
        iced.disabled = false;
        hot.disabled = false;
    }
}

// return DrinkType disabled after form submit
document.getElementById('form-content').addEventListener('submit', resetDrinkType);
function resetDrinkType() {
    setTimeout(() => {
        drinkType.add(blank, drinkType[0]);
        drinkType.disabled = true;
    }, 1700);
}