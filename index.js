
var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){

var press=this.innerHTML; 

makesound(press);
buttonanimate(press);


});
}


document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimate(event.key);
});



function makesound(key){
switch(key)
{
    case "w":
        var audi=new Audio("sounds/crash.mp3");
        audi.play();
        break;
        case "a":
        var audi=new Audio("sounds/kick-bass.mp3");
        audi.play();
        break;
        case "s":
        var audi=new Audio("sounds/snare.mp3");
        audi.play();
        break;
        case "d":
        var audi=new Audio("sounds/tom-1.mp3");
        audi.play();
        break;
        case "j":
        var audi=new Audio("sounds/tom-2.mp3");
        audi.play();
        break;
        case "k":
        var audi=new Audio("sounds/tom-3.mp3");
        audi.play();
        break;
        case "l":
        var audi=new Audio("sounds/tom-4.mp3");
        audi.play();
        break;

   default:
}
}
function buttonanimate(event)
{
     var activebutton=document.querySelector("."+event);
     activebutton.classList.add("pressed");

     setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    },100);
}