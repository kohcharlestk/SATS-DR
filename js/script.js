//  document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });

$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('select').formSelect();
    $('.datepicker').datepicker();
});


// remove pulse effect after...
document.querySelector('#btn-confirm-1').addEventListener('click', () => {
 

    document.querySelector('#m-color-dis-1').classList.add('disabled');
    document.querySelector('#m-color-dis-2').classList.add('disabled');
    document.querySelector('#m-color-dis-3').classList.add('disabled');
    document.querySelector('#m-color-dis-4').classList.add('disabled');
    document.querySelector('#m-color-dis-5').classList.add('disabled');
    document.querySelector('#m-color-dis-6').classList.add('disabled');

    document.querySelector('#btn-completed-1').classList.add('disabled');
});

// disable btn pickup at lcc -->

document.querySelector('#btn-lcc1-up-confirm-1').addEventListener('click', () => {
    document.querySelector('#icc1-btn-1').classList.add('disabled');
});

document.querySelector('#btn-lcc2-up-confirm-1').addEventListener('click', () => {
    document.querySelector('#icc2-btn-2').classList.add('disabled');
});


// display tick! -->

document.querySelector('#btn-confirm-up-1').addEventListener('click', () => {
    document.getElementById("btn-up-1").innerHTML = "done";
});

document.querySelector('#btn-confirm-off-1').addEventListener('click', () => {
    document.getElementById("btn-off-1").innerHTML = "done";
});

document.querySelector('#btn-confirm-up-2').addEventListener('click', () => {
    document.getElementById("btn-up-2").innerHTML = "done";
});

document.querySelector('#btn-confirm-off-2').addEventListener('click', () => {
    document.getElementById("btn-off-2").innerHTML = "done";
});

document.querySelector('#btn-confirm-up-3').addEventListener('click', () => {
    document.getElementById("btn-up-3").innerHTML = "done";
});

document.querySelector('#btn-confirm-off-3').addEventListener('click', () => {
    document.getElementById("btn-off-3").innerHTML = "done";
});



// document.querySelector('#modal-btn-2').addEventListener('click', () => {
//     document.querySelector('#btn-wave-2').classList.remove('pulse');

//     document.querySelector('#btn-wave-2').classList.add('btn-floating-disabled');

//     document.querySelector('#btn-done-2').classList.add('disabled');
// });

// document.querySelector('#modal-btn-3').addEventListener('click', () => {
//     document.querySelector('#btn-wave-3').classList.remove('pulse');

//     document.querySelector('#btn-wave-3').classList.add('btn-floating-disabled');

//     document.querySelector('#btn-done-3').classList.add('disabled');
// });



