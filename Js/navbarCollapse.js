// Collapse Navbar
  var navbarCollapse = () => {
    if ($("#mainNav").offset().top > 40) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
 navbarCollapse();
 // Collapse the navbar when page is scrolled
 $(window).scroll(navbarCollapse);
