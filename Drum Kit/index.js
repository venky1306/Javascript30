window.addEventListener("keydown", checkKeyPressed, false);

function trans(ele){
    ele.classList.add("scale-105", "border-emerald-500");
    setTimeout(myMessage, 100);
    function myMessage(){
        ele.classList.remove("scale-105", "border-emerald-500");
    }
}

function checkKeyPressed(evt) {
    if (evt.keyCode == "65") {
        console.log("You pressed 'A'.");
        var element = document.getElementById("a");
        trans(element);
        const aud = new Audio("sounds/clap.wav");
        aud.play();
    }
    if (evt.keyCode == "83") {
        console.log("You pressed 'S'.");
        var element = document.getElementById("s");
        trans(element);
        const aud = new Audio("sounds/hihat.wav");
        aud.play();
    }
    if (evt.keyCode == "68") {
        console.log("You pressed 'D'.");
        var element = document.getElementById("d");
        trans(element);
        const aud = new Audio("sounds/kick.wav");
        aud.play();
    }
    if (evt.keyCode == "70") {
        console.log("You pressed 'F'.");
        var element = document.getElementById("f");
        trans(element);
        const aud = new Audio("sounds/openhat.wav");
        aud.play();
    }
    if (evt.keyCode == "71") {
        console.log("You pressed 'G'.");
        var element = document.getElementById("g");
        trans(element);
        const aud = new Audio("sounds/boom.wav");
        aud.play();
    }
    if (evt.keyCode == "72") {
        console.log("You pressed 'H'.");
        var element = document.getElementById("h");
        trans(element);
        const aud = new Audio("sounds/ride.wav");
        aud.play();
    }
    if (evt.keyCode == "74") {
        console.log("You pressed 'J'.");
        var element = document.getElementById("j");
        trans(element);
        const aud = new Audio("sounds/snare.wav");
        aud.play();
    }
    if (evt.keyCode == "75") {
        console.log("You pressed 'K'.");
        var element = document.getElementById("k");
        trans(element);
        const aud = new Audio("sounds/tom.wav");
        aud.play();
    }
    if (evt.keyCode == "76") {
        console.log("You pressed 'L'.");
        var element = document.getElementById("l");
        trans(element);
        const aud = new Audio("sounds/tink.wav");
        aud.play();
    }
}