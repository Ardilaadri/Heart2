var eyeColor = ["#e4383b", "#e95244", "#ee6c4d", "#ed7e63", "#eb9079", "#e7b4a5", "#f3dad2", "#fff"]
var i = 0;

document.querySelector("button").addEventListener("click", function(){
    i = i < eyeColor.length ? ++i : 0;
    document.getElementById("left").style.backgroundColor = eyeColor[i]
})