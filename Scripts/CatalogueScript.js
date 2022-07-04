function showArtbooks() {
  document.getElementById("artbookCatalogue").style.display = "flex";
}

function showStories() {
  document.getElementById("storiesCatalogue").style.display = "flex";
}

function showComics() {
  document.getElementById("comicsCatalogue").style.display = "flex";
}

function showInterviews() {
  document.getElementById("interviewCatalogue").style.display = "flex";
}

function showCDs() {
  document.getElementById("cdCatalogue").style.display = "flex";
}

function closePopup() {
  document.getElementById("artbookCatalogue").style.display = "none";
  document.getElementById("storiesCatalogue").style.display = "none";
  document.getElementById("comicsCatalogue").style.display = "none";
  document.getElementById("interviewCatalogue").style.display = "none";
  document.getElementById("cdCatalogue").style.display = "none";
}

var senseSpeed = 5;
var previousScroll = 0;
$("div.indexButton").hide();
$(window).scroll(function (event) {
  if ($(this).width() < 769) {
    var scroller = $(this).scrollTop();
    if (scroller - senseSpeed > previousScroll) {
      $("div.indexButton").filter(":not(:animated)").slideUp();
    } else if (scroller + senseSpeed < previousScroll) {
      $("div.indexButton").filter(":not(:animated)").slideDown();
    }
    previousScroll = scroller;
  } else {
    $("div.indexButton").hide();
  }
});
