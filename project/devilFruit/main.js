let myImage = 0;
let time;
imageShow();

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
        $('.devilfruit').each(function(){
            if($(this).css('display')==='block' && $(this).hasClass("gol")){
                text = "<h3>You pick the Gol Gol Fruit!</h3><p>You are able to telekinetically manipulate gold at will</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("batto")){
                text = "<h3>You pick the Batto Batto Fruit!</h3><p>You are able to turn into a vampire, drink lots of blood!</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("bara")){
                text = "<h3>You pick the Bara Bara Fruit!</h3><p>You are able to be immune to slashing attacks and to be able to split your own body apart into pieces and control the said pieces however they wish, mostly by levitating them away from your main body, your are a Splitting Human!!</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("awa")){
                text = "<h3>You pick the Awa Awa Fruit!</h3><p>You are able to emit and control soap and bubbles that can not only clean off dirt but can also \"clean off\" power, you are a Soap Human!</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("arttidevilfruti")){
                text = "<h3>You pick the Artificial Devil Fruit!</h3><p>This is man-made devil fruit and not sure the power, please let me know if you are aware of this fruit.</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("sara")){
                text = "<h3>You pick the Sara Sara Fruit!</h3><p>You are able to turn into an axolotl hybrid and a full axolotl at will.</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("ope")){
                text = "<h3>You pick the Ope Ope Fruit!</h3><p>You are able to create a spherical space or \"room\", in which you are able to complete control over the placement and orientation of the objects inside, you are a Free Modification Human!!</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("mera")){
                text = "<h3>You pick the Mera Mera Fruit!</h3><p>You are able to create, control, and transform into fire!</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("ito")){
                text = "<h3>You pick the Ito Ito Fruit!</h3><p>You are able to create and manipulate strings, you are a String Human!</p>";
            }else if($(this).css('display')==='block' && $(this).hasClass("gomu")){
                text = "<h3>You pick the Gomu Gomu Fruit!</h3><p>Your body has the properties of rubber, you are a Rubber Human!</p>";
            }
        })
        $("#fruitInfo").html(text)
    }
    checkFruit();
});      


$("#replaybtn").click(function(){
    imageShow();
    $("#fruitInfo").html("")    
});


