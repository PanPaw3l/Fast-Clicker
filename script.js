document.addEventListener("DOMContentLoaded", function(event) {

    const title = document.getElementById("title");
    const counter = document.getElementById("counter");

    function collision() {
        var i;
        for (i = 1; i <= 25; i++) {
            var rect = document.getElementById(i);
            var currentFill = rect.getAttribute("fill");
            if (currentFill=="red")
                rect.addEventListener("mousemove", over);
        }
        randrect();
    }

    function all() {
        var i;
        for (i = 1; i <= 25; i++) {
            var rect = document.getElementById(i);
            var currentFill = rect.getAttribute("fill");
            rect.setAttribute("fill", "red");
            rect.removeEventListener("mouseup", addPoint);
            rect.removeEventListener("mousemove", over);
        }
        collision();
    }

    function over(){
        var score;
        score = document.getElementById("counter");
        alert("Your score is: " +counter.innerHTML);
        location.reload();
    }

    function addPoint(){
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }

    function RedGreen(id) {
        var rect = document.getElementById(id);
        rect.removeEventListener("mousemove", over);
        var currentFill = rect.getAttribute("fill");
            if(currentFill == "red")
                rect.setAttribute("fill", "green");
    }

    function click(id){
        var rect = document.getElementById(id);
        rect.addEventListener("mouseup", addPoint);
    }

    function test() {
        console.log("txt");
    }

    function timeout() {
        alert("You have reached time limit. Your score is: " +counter.innerHTML);
    }

    function randrect(){
        var random = Math.floor(Math.random() * 25 + 1);
        RedGreen(random);
        click(random);
        setTimeout(all, 2000);
        setTimeout(timeout, 60000);
    }

    collision();

});
