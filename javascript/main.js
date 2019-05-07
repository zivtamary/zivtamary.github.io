let currentPosition = pageYOffset;
window.onscroll = () => {
  let scrollPosition = pageYOffset;
  if (scrollPosition > currentPosition) {
    document.getElementById("navbar").style.top = "-50px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  currentPosition = pageYOffset;
};
