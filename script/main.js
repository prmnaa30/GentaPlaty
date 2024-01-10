// glightbox
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

var lightboxDescription = GLightbox({
    selector: '.glightbox1'
});

// isotope js sorting



// send form data to gsheet via gform
function postToGoogle() {
    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#phone").val();
    var field4 = $("#message").val();

    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf__SvxIVhiaaQJnE_BXx5UO4Rxdd1UaZpKOEqW4ZD3lmon8A/formResponse",
        
      //add your google form generated numbers below which are also the 'names' of your inputs     
      data: {
        "entry.1783196306": field1,
        "entry.1327648210": field2,
        "entry.909012860": field3,
        "entry.741269265": field4
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact-form').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact-form').trigger('reset');
      }
    });
    return false;
}