$('#expandButton').mouseover(function () { 
    $('#btn-text').css('max-width', '300px');
});

$('#expandButton').mouseout(function () { 
    $('#btn-text').css('max-width', '0');
});