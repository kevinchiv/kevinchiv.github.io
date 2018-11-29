$(document).ready(function() {
  $(document).scroll(function(){ 
    const time = 600;
    let scrollRatio = $(document).scrollTop()/window.innerHeight;

    if (scrollRatio >= 2.3) {
      for (let i = 0; i<4; i++) {
        const index = i + 1;
        const selectorString = "#g" + index;
        $("#photo-gallery >" + selectorString).fadeTo(time * index, 1);
      };
    }
  });


  let rotated = [false, false, false, false, false, false, false, false,
                  false, false, false, false, false, false, false, false];
  
  $(".gallery-item").click(function() {
    const index = $(".gallery-item").index(this);
    //const item = $(".gallery-item").get(index);
    // console.log(rotated[index]);
    if (rotated[index] == false) {
      rotated[index] = true;
      $(this).css({'transform' : 'rotateY('+ 180 +'deg)'}); 
      $(this).find("img").css('opacity', '0');
      $(this).find("#recipe-button").css({'transform' : 'rotateY('+ 180 +'deg)'});
      $(this).find("p").css({'transform' : 'rotateY('+ 180 +'deg)'});  
      $(this).find("#recipe-button").css('display', 'flex');
      $(this).css('cursor', 'default');
      $(this).css('box-shadow', '-10px 20px 25px 5px #C5C5C5')
    }

    else {
      rotated[index] = false;
      $(this).css({'transform' : 'rotateY('+ 0 +'deg)'}); 
      $(this).find("img").css('opacity', '1');
      $(this).find("p").css({'transform' : 'rotateY('+ 0 +'deg)'});  
      $(this).find("#recipe-button").css('display', 'none');
      $(this).css('cursor', 'default');
      $(this).css('box-shadow', '10px 20px 25px 5px #C5C5C5')
    }
  });
});

