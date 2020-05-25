
// 2 parmaters for listener, what needs to happen, then what happens next
// in this case it is a click, then run handleClick function
// This will look for the first button, add an event listener to listen for
// clicks, and then run a function


// Step 2: To add the event listenter to all of the buttons that we want
// we want we will create a a for loop, with a variable i, and when i is less than
// the length of the array that is returned for all of the document elements
// that are slected with the class .drum it will run

// Then took step two and created a variable number of buttons to make it clear
// what was happening - and then put the event listener in a for loop

// note the [i] in the documentqerury - because it will increment by 1, until
// the length of the array, it will add an event listener to 1, then 2, then 3,
// etc until it hits 7




// Detect Button Press

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

});
}


// Detect key press 
document.addEventListener("keydown",function(event){

  makeSound(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;

    default: console.log(buttonInnerHTML);

  }

}
