// zoom
    let zoomin = document.querySelectorAll(".zoom-icon")[0]
    let zoomout = document.querySelectorAll(".zoom-icon")[1]
    let content = document.querySelector(".content ")

    let zoomLevel = 1;  
    let rootFontSize = 14;  
  
    zoomin.addEventListener("click", () => {  
  if (zoomLevel < 2) {  
    zoomLevel = zoomLevel + 0.1;  
    rootFontSize = rootFontSize + 2;  
    content.style.fontSize = `${rootFontSize}px`;  
  }  
});  
zoomout.addEventListener("click", () => {  
  if (zoomLevel > 1) {  
    zoomLevel = zoomLevel - 0.1;  
    rootFontSize = rootFontSize - 2;  
    content.style.fontSize = `${rootFontSize}px`;  
  }  
}); 
// background

let blue = document.querySelector(".box1")
    blue.onclick = function() {
        document.querySelector(".content").style.background = "blue"
        
    }

let white = document.querySelector(".box2")
white.onclick = function() {
        document.querySelector(".content").style.background = "white"
    }


let green = document.querySelector(".box3")
green.onclick = function() {
        document.querySelector(".content").style.background = "green"
    }

let yellow = document.querySelector(".box4")
yellow.onclick = function() {
        document.querySelector(".content").style.background = "yellow"
    }

let red = document.querySelector(".box5")
red.onclick = function() {
        document.querySelector(".content").style.background = "red"
    }

// line and paragraph spacing

let big = document.querySelector("#big").value;
big.onclick = function(){
        document.querySelector(".content").style.lineHeight = "8";
}

let small = document.querySelector("#small").value;
small.onclick = function(){
  document.querySelector(".content").style.lineHeight = "3";
}

function myFunction(){
  document.getElementsByClassName("content").style.lineHeight = "10";
}

 // texAlign

 let left = document.querySelector("#left");
 left.onclick = function(){
  document.querySelector(".content").style.textAlign = "left";
 }

 let right = document.querySelector("#right");
 right.onclick = function(){
  document.querySelector(".content").style.textAlign = "right";
 }

 