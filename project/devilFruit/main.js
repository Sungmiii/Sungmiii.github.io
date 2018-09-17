let myImage = 0;
let time;

let clearTime = imageShow();
function imageShow(){
    let x = $(".devilfruit")
    for(let i =0; i<x.length; i++){
        x[i].style.display= "none"
    }
    myImage++;
    if(myImage > x.length){myImage =1}
    x[myImage-1].style.display = "block";
    time = setTimeout(imageShow,500);
}
imageShow();

$("#randombtn").click(function(){
    clearTimeout(time);
    if($("#imagepick").hasClass("gomu")){
     $("#fruitInfo").append("Gomu Gomu Fruit")
    }else if($("#imagepick").hasClass("ito")){
     $("#fruitInfo").append("Ito Ito Fruit\t")  
    }else if($("#imagepick").hasClass("mere")){
     $("#fruitInfo").append("Mere Mere Fruit")  
    }else if($("#imagepick").hasClass("ope")){
      $("#fruitInfo").append("Ope Ope Fruit")  
    }else if($("#imagepick").hasClass("sara")){
        $("#fruitInfo").append("Sara Sara Fruit")  
    }else if($("#imagepick").hasClass("arttidevilfruti")){
        $("#fruitInfo").append("Artificial Devil Fruti")  
    }else if($("#imagepick").hasClass("awa")){
         $("#fruitInfo").append("Awa Awa Fruit")  
    }else if($("#imagepick").hasClass("bara")){
        $("#fruitInfo").append("Bara Bara Fruit")  
    }else if($("#imagepick").hasClass("batto")){
        $("#fruitInfo").append("Batto Batto Fruit")  
    }else if($("#imagepick").hasClass("gol")){
         $("#fruitInfo").append("Gol Gol Fruit")  
    }
    
})
