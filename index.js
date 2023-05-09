function soundFunc(index)
{
    switch(index){
        case 'w':
            new Audio('sounds/crash.mp3').play();
            break;
        case 'a':
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case 's':
            new Audio('sounds/snare.mp3').play();
            break;
        case 'd':
            new Audio('sounds/tom-1.mp3').play();
            break;
        case 'j':
            new Audio('sounds/tom-2.mp3').play();
            break;
        case 'k':
            new Audio('sounds/tom-3.mp3').play();
            break;
        case 'l':
            new Audio('sounds/tom-4.mp3').play();
            break;
        default:
            console.log();
    }
}

var buttonsLen = document.querySelectorAll(".drum").length;
for(var i=0; i<buttonsLen; i++){ 
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        soundFunc(buttonInnerHTML);
    });  
}
    
document.addEventListener("keydown", function(event){
    var lettersInnerHTML = event.key;
    soundFunc(lettersInnerHTML);
});

