$(function(){
  $('.header .gnb>ul>li>a').on('click', function(e){
    // 윈도우 사이즈가 다시 커졌을 때도 누르면 나옴. 고치려면
    if($(window).width() < 769) {
      e.preventDefault();
      $('.smenu').hide();
      $(this).next().show();
    }    
  })

  // 윈도우 사이즈가 다시 커졌을 때 메뉴가 열려있음. 고치려면
  $(window).on('resize', function() {
    $('.smenu').removeAttr('style') //smenu에 style(display)을 뺀다
  })

  $('.mbtn').on('click', function(){
    $('.header .gnb').toggleClass('on')
  })
})