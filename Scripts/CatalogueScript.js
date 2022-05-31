function showArtbooks() {
  document.getElementById("artbookCatalogue").style.display = "block";
}

function showStories() {
  document.getElementById("storiesCatalogue").style.display = "block";
}

function showComics() {
  document.getElementById("comicsCatalogue").style.display = "block";
}

function closePopup() {
  document.getElementById("artbookCatalogue").style.display = "none";
  document.getElementById("storiesCatalogue").style.display = "none";
  document.getElementById("comicsCatalogue").style.display = "none";
}

var senseSpeed = 5;
var previousScroll = 0;
$(window).scroll(function (event) {
  var scroller = $(this).scrollTop();
  if (scroller - senseSpeed > previousScroll) {
    $("div.test").filter(":not(:animated)").slideUp();
  } else if (scroller + senseSpeed < previousScroll) {
    $("div.test").filter(":not(:animated)").slideDown();
  }
  previousScroll = scroller;
});
