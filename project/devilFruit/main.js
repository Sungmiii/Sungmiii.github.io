let myImage = 0;
let time;

/* function for imageslide  */
function imageShow(){
    let x = $(".devilfruit")
    for(let i =0; i<x.length; i++){
        x[i].style.display= "none"
    }
    myImage++;
    if(myImage > x.length){myImage =1}
    x[myImage-1].style.display = "block";
    time = setTimeout(imageShow,200);
}
/* current image fruit info shows up */
$("#randombtn").click(function(){
    clearTimeout(time);
    
    function checkFruit(){
        let text;
        let currentImage = $(".imgarea img");
        //if(currentImage.style.display ="block"){}
        switch(currentImage){
            case currentImage.hasClass("gomu"):
            text = "Gomu Gomu Fruit";
            break;
            case currentImage.hasClass("ito"):
            text = "Ito Ito Fruit";
            break;
            case currentImage.hasClass("mera"):
            text = "Mera Mera Fruit";
            break;
            case currentImage.hasClass("ope"):
            text = "Ope Ope Fruit";
            break;
            case currentImage.hasClass("sara"):
            text = "Sara Sara Fruit";
            break;
            case currentImage.hasClass("arttidevilfruti"):
            text = "Artificial Devil Fruit";
            break;
            case currentImage.hasClass("awa"):
            text = "Awa Awa Fruit";
            break;
            case currentImage.hasClass("bara"):
            text = "Bara Bara Fruit";
            break;
            case currentImage.hasClass("batto"):
            text = "Batto Batto Fruit";
            break;
            case currentImage.hasClass("gol"):
            text = "Gol Gol Fruit";
            break;
            default:
            text = "Nothing for you"
        }
        $("#fruitInfo").html(text)
    }
    checkFruit();  
})

imageShow();

