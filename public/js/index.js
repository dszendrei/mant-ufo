// ------------- NAVBAR ------------- //
var bodyDiv = document.getElementById('bodyDiv');
var navCancel = document.getElementById("nav-cancel");
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
    navCancel.style.display = "none";
    bodyDiv.className = "nothing";

  });

var navBtn = document.getElementById("nav-btn").addEventListener('click', function () {
  if (navCancel.style.display == "none") {
    navCancel.style.display = "block";
    bodyDiv.className = "stop-scrolling";
  }
  else {
    navCancel.style.display = "none";
    bodyDiv.className = "nothing";
  }
});

navCancel.addEventListener('click', function () {
    navCancel.style.display = "none";
    bodyDiv.className = "nothing";
});

// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function wheelScroll(evt) {
  if (bodyDiv.className == 'stop-scrolling') return;
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-10);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }
  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      goDown();
    }
    if (delta >= scrollSensitivitySetting) {
      goUp();
    }
  }
}

function touchScroll(ts, te) {
  if (bodyDiv.className == 'stop-scrolling') return;
  delta = te - ts;
  console.log('para');
  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      goDown();
    }
    if (delta >= scrollSensitivitySetting) {
      goUp();
    }
  }
}

function goDown() {
  //Down scroll
  ticking = true;
  if (currentSlideNumber !== totalSlideNumber - 1) {
    currentSlideNumber++;
    nextItem();
  }
  slideDurationTimeout(slideDurationSetting);
}

function goUp() {
  //Up scroll
  ticking = true;
  if (currentSlideNumber !== 0) {
    currentSlideNumber--;
  }
  previousItem();
  slideDurationTimeout(slideDurationSetting);

}

function goto(slide) {
//slide numbering is like array from 0 to total-1
  if (currentSlideNumber == 0) {
    goToSlide(currentSlideNumber, slide)
  } else if (currentSlideNumber == 1) {
    goToSlide(currentSlideNumber, slide)
  } else if (currentSlideNumber == 2) {
    goToSlide(currentSlideNumber, slide)
  } else if (currentSlideNumber == 3) {
    goToSlide(currentSlideNumber, slide)
  } else if (currentSlideNumber == 4) {
    goToSlide(currentSlideNumber, slide)
  } else if (currentSlideNumber == 5) {
    goToSlide(currentSlideNumber, slide)
  } else if (currentSlideNumber == 6) {
    goToSlide(currentSlideNumber, slide)
  } else if (currentSlideNumber == 7) {
    goToSlide(currentSlideNumber, slide)
  }

}

function goToSlide(currentSlideNumber, slide) {
    if (currentSlideNumber<slide) {
        for (let i = currentSlideNumber; i < slide; i++) {
            goDown();
        }
    } else {
        for (let i = slide; i < currentSlideNumber; i++) {
            goUp();
        }
    }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
var ts;

//window.addEventListener(mousewheelEvent, _.throttle(wheelScroll, 60), false);
window.addEventListener(mousewheelEvent, $.throttle(60, wheelScroll), false);
window.addEventListener("touchstart", function(e) {
  ts = e.touches[0].clientY;
}, false);
window.addEventListener("touchend", function(e) {
  var te = e.changedTouches[0].clientY;
  touchScroll(ts, te);
}, false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}
