
var playing = false;
function action(){
  var audio = document.getElementById("audio");
 	if(playing === false){
    audio.play();
    $("img").toggleClass("spin");
    $("img").removeClass("pause");
    playing = true;
  }else{
    audio.pause();
   	$("img").toggleClass("pause");
    $("img").removeClass("spin");
    playing = false;
  }	
}

// $(this).parent().children("audio");