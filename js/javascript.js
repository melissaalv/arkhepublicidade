jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() >= 100) {
       $(".navbar").addClass("menudiferente");
      } else {
       $(".navbar").removeClass("menudiferente");
      }
    });
  });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function footer_botom() {
    var footer_position = $('#missaot').offset().top;
    var footer_height = $('#missaot').height();
    var tela_height = $(window).height();
    var margin = tela_height-footer_position-footer_height;
    $('#missaot').css({"margin-top": margin+'px'});}
    
    footer_botom();
    $(window).resize(function() {
    $('#missaot').css({"margin-top": '0px'});
    footer_botom();});