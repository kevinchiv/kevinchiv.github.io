$(document).ready(function() {
  var ready = false;

  $("#page").fadeOut(0);

  setTimeout(function () {
      $("#page").fadeIn(600); 
      $("#greeting").fadeOut(50); 
      $("#loading").fadeOut(50);
  }, 2500);


  $('#definition').fadeOut(0);
  $('#history').fadeOut(0);
  $('h3').fadeOut(0);
  let time = 350;

  $(document).scroll(function(){
    let cursorTop = $(document).scrollTop();
    let innerHeight = window.innerHeight;
    
    if ($("#page").css('display') != 'none') {
      ready = true;
    } else {
      return;
    }

    let scrollRatio = cursorTop / innerHeight;

    if (scrollRatio >= 0.4 && ready ==  true) {
      $("#definition").fadeIn(time);
    };

    if (scrollRatio >= 1.4 && ready == true) {
      $("#history").fadeIn(time);
    };

    if (scrollRatio >= 2.4 && ready == true) {
      $("h3").fadeIn(time);
    };   
  });

  $(".nav-item").click(function(){
    time2 = 750;
    const index = $(".nav-item").index(this);
    if (index == 1) {
      $("#definition").fadeIn(time2);
      console.log('hi');
    }

    else if (index == 2) {
      $("#definition").fadeIn(time2);
      $("#history").fadeIn(time2*2);
    }

    else if (index == 3) {
      $("#definition").fadeIn(time2);
      $("#history").fadeIn(time2*2);
      $("h3").fadeIn(time2*3);
    }
  });
});

