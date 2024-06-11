

jQuery(document).ready(function(){
    const numb = $(".drum").length;

    for(let i=0;i<numb;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",()=>{
            var letter = $(".drum")[i].textContent;
            actions(letter);
        });
    }

     $(document).keypress(value=>{
         actions(value.key);
         console.log(value.key)
     });
     
     function actions(value){
     switch(value){
         case "w":
             var audio = new Audio("sounds/crash.mp3");
             audio.play();
         break;
     
         case "a":
             var audio =new Audio("sounds/kick-bass.mp3");
             audio.play();
         break;
     
         case "s":
             var audio = new Audio("sounds/snare.mp3");
             audio.play();
         break;
         case "d":
             var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
         break;
         case "j":
             var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
         break;
         case "k":
             var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
         break;
         case "l":
             var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
         break;
     
         default:
             alert("press correct button");
     }
     }
})
