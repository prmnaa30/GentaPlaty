const forms = document.querySelector('#feedback');
const button = document.getElementById('submitBtn');
const submitText = document.getElementById('beforeSent');
const submittedText = document.getElementById('afterSent');

// send form data to google sheet
forms.addEventListener('submit', (e) => {
    button.style.transform = 'scale(1)';
    e.preventDefault();
    let data = new FormData(forms);
    fetch('https://script.google.com/macros/s/AKfycbxrvhmN11KwkbmyBCKMtvbxRy89GRPqfmiXcspaLDX5hFbvm-rnwZMIJW-xWv3rGJPO/exec', {
        method: "POST",
        body: data
    });

    // setelah 1000ms (1 detik), tutup overlay dan reset form
    setTimeout(() => {
        document.getElementById('overlay-content').style.display = 'none';
        forms.reset(); // reset form 
    }, 1000);
});

function changeSubBtn() {
    // mengubah text tombol submit dari Submit menjadi Submitted
    submitText.style.display = 'none';
    submittedText.style.display = 'inline';
    button.style.backgroundColor = 'rgba(228, 140, 67, 0.8)';

    // mengembalikan text dari Submitted menjadi Submit supaya jelas bahwa form bisa diisi lagi
    setTimeout(() => {
        submitText.style.display = 'inline';
        submittedText.style.display = 'none';
        button.style.backgroundColor = '#E48C43';
    }, 1100);
}

// submit button hover
button.addEventListener('mouseenter', hoverBtn);
function hoverBtn() {
    button.style.transform = 'scale(1.017)';
}

button.addEventListener('mouseleave', hoverBtn2);
function hoverBtn2() {
    button.style.transform = 'scale(1)';
}