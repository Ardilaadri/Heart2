var eyeColor = ["#e4383b", "#e95244", "#ee6c4d", "#ed7e63", "#eb9079", "#e7b4a5", "#f3dad2", "#fff"]
var i = 0;
var eyeSize = ["100px", "40px"]
var topdir = ["-66px", "-40px"]
var leftdir = ["40px", "67px"]

document.getElementById("right").addEventListener("click", function(){
    i=i < eyeSize.length ? ++i : 0;document.getElementById("right").style.height = eyeSize[i]; 
    document.getElementById("right").style.width = eyeSize[i];  
    document.getElementById("right").style.top = topdir[i];
    document.getElementById("right").style.left = leftdir[i];
})

document.querySelector("button").addEventListener("click", function(){
    i = i < eyeColor.length ? ++i : 0;
    document.getElementById("left").style.backgroundColor = eyeColor[i]
})

