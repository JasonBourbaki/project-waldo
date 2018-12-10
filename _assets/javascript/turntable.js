
var playing = false;
function action(image){
  var audio = $(image).parent().find("audio").get(0);
  console.log(audio);
 	if(playing === false){
    audio.play();
    $(image).toggleClass("spin");
    $(image).removeClass("pause");
    playing = true;
  }else{
    audio.pause();
   	$(image).toggleClass("pause");
    $(image).removeClass("spin");
    playing = false;
  }	
}

// $(this).parent().children("audio");