
$(document).ready(function(){
    $(".abs-menu").hide();

    $(".a-menu").click(function(){
            $(".abs-menu").slideToggle('slow');


    });

        var i = 1; 

        /*$("#img").click(function(){*/
            
         $("#next").click(function(){ 
                $("#img").fadeToggle('slow',function(){
                        i = i+1;
                        if(i > 4) {
                                i=1;
                        }
                        $("#img").hide().attr('src',"images/im" +i +".jpg");
                })
                $("#img").fadeToggle('slow')
        })
        $("#last").click(function(){ 
                $("#img").fadeToggle('slow',function(){
                        i = i-1;
                        if(i < 1) {
                                i=3;
                        }
                        $("#img").hide().attr('src',"images/im" +i +".jpg");
                })
                $("#img").fadeToggle('slow')
        }) 

        /*for(var a=0; a<10; a++){
        setTimeout( func, 2000)
        }*/
      /*  });*/

})
function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
          center: new google.maps.LatLng(51.5, -0.2), zoom: 10
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
      }
    