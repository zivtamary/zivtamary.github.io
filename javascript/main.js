//Hide NavBar on scroll

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    document.getElementById("navbar").style.top = "-50px";
   } else {
    document.getElementById("navbar").style.top = "0px";
   }
   lastScrollTop = st;
});

window.onscroll = () => {
  if (pageYOffset == 0) {
    document.getElementById("navbar").style.top = "0px";
  }
}

// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});