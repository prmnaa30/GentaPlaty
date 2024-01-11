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
var $grid = $('#container-items').isotope({
  itemSelector: '.list-items',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    price: function( itemElem ) {
      var price = $( itemElem ).find('.price').text();
      return parseFloat( price.replace( /[\(\)]/g, '') );
    }
  }
});

// bind sort button click
$('.sort-btn').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  $grid.isotope({ sortBy: sortValue });
});

// change active class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});


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

// back to top
$(".back-to-top").click(function () { 
  $(window).scrollTop(0);
});

// send wa ke genta
function sendWa(jenis) {
  window.open("https://wa.me/62881037782126?text=Halo%20Kak%2C%20untuk%20platycerium%20jenis%20" + jenis + "%20apakah%20tersedia%3F")
}