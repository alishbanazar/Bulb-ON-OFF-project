var img = document.getElementById("img1");

function on(){
    img.src = "images/on.png"
}

function off(){
   img.src = "images/off.png"
   document.getElementById("off").disabled = false
}