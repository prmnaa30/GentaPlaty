const orderForm = document.getElementById('form-content');
const sendBtn = document.getElementById('submitOrder');
const defaultText = document.getElementById('orderDefault');
const sentText = document.getElementById('orderSent');

// send form data to google sheet
orderForm.addEventListener('submit', (e) => {
    // reset ukuran button
    sendBtn.style.transform = 'scale(1)';
    
    // lower input, select and textarea opacity after submit
    orderForm[0].style.opacity = '.5';
    orderForm[1].style.opacity = '.5';
    orderForm[2].style.opacity = '.5';
    orderForm[3].style.opacity = '.5';
    orderForm[4].style.opacity = '.5';
    orderForm[5].style.opacity = '.5';

    e.preventDefault();
    let data = new FormData(orderForm);
    fetch('https://script.google.com/macros/s/AKfycbxrvhmN11KwkbmyBCKMtvbxRy89GRPqfmiXcspaLDX5hFbvm-rnwZMIJW-xWv3rGJPO/exec', {
        method: "POST",
        body: data
    });

    // reset form setelah 1.1 detik
    setTimeout(() => {
        orderForm.reset();
        orderForm.style.opacity = '.3';
    }, 1500);
    setTimeout(() => {
        // return orderForm opacity
        orderForm.style.opacity = '1';

        // return input, select, textarea opacity
        orderForm[0].style.opacity = '1';
        orderForm[1].style.opacity = '1';
        orderForm[2].style.opacity = '1';
        orderForm[3].style.opacity = '1';
        orderForm[4].style.opacity = '1';
        orderForm[5].style.opacity = '1';

    }, 1700);
});

function changeSendBtn() {
    defaultText.style.display = 'none';
    sentText.style.display = 'inline';
    sendBtn.style.backgroundColor = 'rgba(228, 140, 67, 0.9)';

    setTimeout(() => {
        defaultText.style.display = 'inline';
        sentText.style.display = 'none';
        sendBtn.style.backgroundColor = '#E48C43';
    }, 1500);
}

// submit button hover
sendBtn.addEventListener('mouseenter', hoverBtn);
function hoverBtn() {
    sendBtn.style.transform = 'scale(1.008)';
}

sendBtn.addEventListener('mouseleave', hoverBtn2);
function hoverBtn2() {
    sendBtn.style.transform = 'scale(1)';
}