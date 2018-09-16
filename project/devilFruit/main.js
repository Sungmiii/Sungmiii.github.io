let myImage = 0;
randomShow();
function randomShow(){
    let x = document.getElementsByClassName("devilfruit")
    for(let i =0; i<x.length; i++){
        x[i].style.display= "none"
    }
    myImage++;
    if(myImage > x.length){myImage =1}
    x[myImage-1].style.display = "block";
    setTimeout(randomShow, 2000);
}

