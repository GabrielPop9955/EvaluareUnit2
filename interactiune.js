var myIndex = 0;
function slideshow() {
	
    var i;
    var x = document.getElementsByClassName("imagini");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideshow, 3000); 
}
