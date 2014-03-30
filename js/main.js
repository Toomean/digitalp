var menuObj = {
	body : $('body'),
	elem : $('.nav-trigger')
};
menuObj.elem.click(function(){
	menuObj.body.toggleClass('open-menu');
});

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

