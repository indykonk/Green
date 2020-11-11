
    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

    $('body').scrollspy({
      target: '#main-nav'
    });

    // Add smooth scrolling
    $('#main-nav a').on('click', function (e) {
      // Check for a hash value
      if (this.hash !== '') {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function () {
          // Add hash to URL after scroll
          window.location.hash = hash;
        });
      }
    });

    // Portfolio 

$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
    

// Payment

$(function () {
  $('[data-toggle="popover"]').popover()
})