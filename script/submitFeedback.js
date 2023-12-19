const forms = document.querySelector('#feedback_form');

// send form data to google sheet
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(forms);
    fetch('https://script.google.com/macros/s/AKfycbxrvhmN11KwkbmyBCKMtvbxRy89GRPqfmiXcspaLDX5hFbvm-rnwZMIJW-xWv3rGJPO/exec', {
        method: "POST",
        body: data
    });

    // setelah 1000ms (1 detik), tutup overlay dan reset form
    setTimeout(() => {
        forms.reset(); // reset form 
    }, 1000);
});