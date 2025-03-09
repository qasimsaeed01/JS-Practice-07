//click events

let button = document.getElementById("clickbutton");

button.addEventListener("click", function(){
    button.style.backgroundColor = "black"
    button.innerText = "Clicked"
});

// dbclick events   task 2


let doubleClick = document.getElementById("doubleclickbutton");

doubleClick.addEventListener("dblclick", function(){
     alert("double clicked");
     doubleClick.innerText = "clicked"
});


// mouse over event task 3

let mouseOver = document.getElementById("paragraph");

mouseOver.addEventListener("mouseover", function(){
    mouseOver.style.backgroundColor = "yellow"
    
    mouseOver.addEventListener("mouseout", function(){
        mouseOver.style.backgroundColor = "white"

    })
});

// key words event
// key down event
document.addEventListener("keydown", function(event) {
    document.getElementById("paragraph2").textContent = " " + event.key;
});

//key up event  task 6

document.addEventListener("keyup", function() {
    document.getElementById("inputText").textContent = " " + event.key;
  

});
 
//focus event task 7

document.getElementById("input2").addEventListener("focus", function() {
    this.style.backgroundColor = "red";
});

// blur event task 8

document.getElementById("input2").addEventListener("blur", function() {
    this.style.backgroundColor = "white";
});


// change event task 9

document.getElementById("dropdown").addEventListener("change", function() {
    let selectedValue = this.value; 
    document.getElementById("selectedOption").textContent = selectedValue; } );

 // load events task 10

 window.onload = function() {
    alert("welcome to the page"); 
 }


 // resize event task 11
 window.addEventListener("resize", function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById("para3").textContent = `${width} x ${height}`;});


    // scroll event task 12
    window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    document.getElementById("para4").textContent = scrollTop;});

    // copy event task 13

    document.getElementById("textInput").addEventListener("copy", function() {
        alert("You copied some text!");
    });

    // paste event task 14
    document.getElementById("pasteText").addEventListener("paste", function() {
        alert("You pasted some text!");
    });

    // drag event task 15
    document.getElementById("draggable").addEventListener("dragstart", function() {
        this.textContent = "I'm being dragged!";
    });

    // drop   here event task 16
    let dropZone = document.getElementById("dropZone");
    


    dropZone.addEventListener("drop", function(event) {
        event.preventDefault();
        dropZone.innerText = "droped";
        });


