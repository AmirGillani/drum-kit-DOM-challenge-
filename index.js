// querySelectorAll(".drum").length will fetch all elements whose class is drum then calculate their length

//this function will only add event listner to elements

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // whenever button is clicked then click event will occour that will call anonmious function

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // this operator fetch currently clicked element

        this.style.color = "white";

        var check = this.innerHTML;

        makeSound(check);
        animation(check);
    });
}

document.addEventListener("keypress", function (event) {

    //event.key holds keyboard letter u pressed

    // write it on console to view all properties of keypress event object
    //document.addEventListener("click",function(event){
    //     console.log(event);
    //     });
    makeSound(event.key);
    animation(event.key);
})

// make sound

function makeSound(key) {
    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;

        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;

        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;

        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(check);
            break;
    }

}

function animation(check) {

    // add class to element eg , .w, .k, .j etc
    document.querySelector("." + check).classList.add("pressed");

    // remove pressed class after 1 second
    setTimeout(function () {
        document.querySelector("." + check).classList.remove("pressed");
    }, 100)
}

