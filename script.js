$(document).ready(function(){

$(window).scroll(function(){

    if($(this).scrollTop() > 40){
        $('#scroll').fadeIn(); 
    }
    else{
        $('#scroll').fadeOut();
    }
    });

    $("#scroll").click(function(){
        $('html, body').animate({scrollTop:0}, 800);
    });

    });




