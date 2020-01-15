//waits until page is loaded first
$(document).ready(function(){

    //applies colour red to paragraphs on click
 
    $("p").click(function(){
        $("p").css('color', 'red');
    });

    //applies color lightblue to h2 elements on hover
  
    $("h2").hover(function(){
        $("h2").css('background-color', 'lightblue');
    });
    /* Increases font size of h2 to 1.5em on hover and returns to 1em when no longer on hover
    */

    $("#hr_html").hover(function(){
        $("#hr_html").css('font-size', '1.5em');
    }, function(){
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_mysql").hover(function(){
        $("#hr_mysql").css('font-size', '1.5em');
    }, function(){
        $("#hr_mysql").css('font-size', '1em');
    });

    $("#hr_python").hover(function(){
        $("#hr_python").css('font-size', '1.5em');
    }, function(){
        $("#hr_python").css('font-size', '1em');
    });

    $("#hr_jquery").hover(function(){
        $("#hr_jquery").css('font-size', '1.5em');
    }, function(){
        $("#hr_jquery").css('font-size', '1em');
    });

    $("#hr_django").hover(function(){
        $("#hr_django").css('font-size', '1.5em');
    }, function(){
        $("#hr_django").css('font-size', '1em');
    });

       $("#hr_css").hover(function(){
        $("#hr_css").css('font-size', '1.5em');
    }, function(){
        $("#hr_css").css('font-size', '1em');
    });


    /*applies colour black to body background when mouse enters over buttons 
    and applies colour grey to body background when mouse leaves buttons*/
   
    $(".bottom_button").hover(function(){
        $("body").css("background-color", "black");
    }, function(){
        $("body").css("background-color", 'grey');
    });
    //
  
});