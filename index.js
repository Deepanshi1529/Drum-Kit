
for(let i=0; i<7; i++ ){

    document.querySelectorAll("button")[i].addEventListener("click", function () {

    let buttonInnerHTML = this.innerHTML;   // to detect click press

    
    buttonAnimation(buttonInnerHTML);

    makeSound(buttonInnerHTML);  
        
});
    
}

  document.addEventListener("keydown",function(event){

    makeSound(event.key); // gives the character of key

    buttonAnimation(event.key);

  });// to detect keyword press

   

  function makeSound(key){

    switch (key) {

        case "w":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
           let kick = new Audio('sounds/kick-bass.mp3');
           kick.play();
           break;

        case "s":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(key);
        
       }

  }


  function buttonAnimation(value){
      
    document.querySelector("." + value).classList.add("pressed");

    setTimeout(function(){document.querySelector("." + value).classList.remove("pressed");}, 100);

  }

