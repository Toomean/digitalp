var menuObj = {
	body : $('body'),
	elem : $('.nav-trigger')
};
menuObj.elem.click(function(){
	menuObj.body.toggleClass('open-menu');
});

$('.cubes').hover(
  function(){

  },
  function(){
    if($('.name-block.active')[0]) {
      $('.name-block.active').removeClass('active');
    }
    console.log('off');
  }
);

$('.name-block').hover(
  function() {

    $('.name-block.active').removeClass('active');

    $(this).addClass('active');
  },
  function() {

  }
);

$('.price').hover(
  function() {
    $(this).addClass('active');
  },
  function() {
    $(this).removeClass('active');
  }
);

$( ".link-headliners").click(function () {
    $( 'html, body').animate({
        scrollTop: $( ".content" ).offset().top
    }, 1000);
});

$( ".link-register").click(function () {
    $( 'html, body').animate({
        scrollTop: $( ".pricing" ).offset().top
    }, 1000);
});

$( ".link-reports").click(function () {
    $( 'html, body').animate({
        scrollTop: $( ".reports" ).offset().top
    }, 1000);
});

$( ".link-contacts").click(function () {
    $( 'html, body').animate({
        scrollTop: $( "footer" ).offset().top
    }, 1000);
});


