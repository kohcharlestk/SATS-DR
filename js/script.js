// initialize functions
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('select').formSelect();
    $('.datepicker').datepicker();
});


// completed buttons fade out
document.querySelector('#btn-confirm-1').addEventListener('click', () => {
    document.querySelector('#btn-completed-1').classList.add('disabled');
});

document.querySelector('#btn-confirm-2').addEventListener('click', () => {
    document.querySelector('#btn-completed-2').classList.add('disabled');
});


// LCC Green buttons
document.querySelector('#btn-lcc1-up-confirm-1').addEventListener('click', () => {
    document.querySelector('#icc1-btn-1').classList.add('disabled');
});

document.querySelector('#btn-lcc2-up-confirm-1').addEventListener('click', () => {
    document.querySelector('#icc2-btn-2').classList.add('disabled');
});

// LCC Red buttons
document.querySelector('#btn-icc2-drop-confirm-1').addEventListener('click', () => {
    document.querySelector('#icc-btn-3').classList.add('disabled');
});

document.querySelector('#btn-icc1-drop-confirm-1').addEventListener('click', () => {
    document.querySelector('#icc-btn-4').classList.add('disabled');
});


// tick GREEN buttons effects

// green button 1 -->
var mBtn1 = document.getElementById("btn-confirm-off-1");
var tickBtn1 = document.getElementById("btn-off-1");
var colorBtn1 = document.getElementById("m-color-dis-2");

mBtn1.addEventListener("click", tickFunction1);

function tickFunction1() {
    tickBtn1.innerHTML = "done"; 
    colorBtn1.classList.add('disabled');       
}

// green button 2 -->
var mBtn2 = document.getElementById("btn-confirm-off-2");
var tickBtn2 = document.getElementById("btn-off-2");
var colorBtn2 = document.getElementById("m-color-dis-4");

mBtn2.addEventListener("click", tickFunction2);
  
function tickFunction2() {
    tickBtn2.innerHTML = "done"; 
    colorBtn2.classList.add('disabled');       
}

// green button 3 -->
var mBtn3 = document.getElementById("btn-confirm-off-3");
var tickBtn3 = document.getElementById("btn-off-3");
var colorBtn3 = document.getElementById("m-color-dis-6");

mBtn3.addEventListener("click", tickFunction3);

function tickFunction3() {
    tickBtn3.innerHTML = "done"; 
    colorBtn3.classList.add('disabled');       
}

// tick RED buttons effects

// red button 1 -->
var mBtn4 = document.getElementById("btn-confirm-up-1");
var tickBtn4 = document.getElementById("btn-up-1");
var colorBtn4 = document.getElementById("m-color-dis-1");

mBtn4.addEventListener("click", tickFunction4);

function tickFunction4() {
    tickBtn4.innerHTML = "done"; 
    colorBtn4.classList.add('disabled');       
}

// red button 2 -->
var mBtn5 = document.getElementById("btn-confirm-up-2");
var tickBtn5 = document.getElementById("btn-up-2");
var colorBtn5 = document.getElementById("m-color-dis-3");

mBtn5.addEventListener("click", tickFunction5);

function tickFunction5() {
    tickBtn5.innerHTML = "done"; 
    colorBtn5.classList.add('disabled');       
}

// red button 3 -->
var mBtn6 = document.getElementById("btn-confirm-up-3");
var tickBtn6 = document.getElementById("btn-up-3");
var colorBtn6 = document.getElementById("m-color-dis-5");

mBtn6.addEventListener("click", tickFunction6);

function tickFunction6() {
    tickBtn6.innerHTML = "done"; 
    colorBtn6.classList.add('disabled');       
}
