const p = document.getElementById("p");

function func(image){
    p.src = image.src;
    p.parentElement.style.display="block";
    
}