// declare input display id to use easily
let display = $('#display')[0];

//function add number into the display input and added continuely
function insert(num) {
    display.value = display.value + num
};

// refactoring function without onclick in html
/* $('button').click(function(){
    let val = $(this).toString();
    if(!isNaN(val)){
     $('#display').val(val.substring(0,10));
    }
}) */

//function operation from input value, use eval: I read eval is not so great 
//but I am not able to figure it out without eval func really want to give up this part
function total() {
    let val = display.value;
    display.value = eval(val);
    
}

// clear function
$('#clear').click(function(){
  $('#display').val('');
});

//back function
$('#remove').click(function(){
    let val = display.value;
    display.value = val.substring(0,val.length-1);
});






