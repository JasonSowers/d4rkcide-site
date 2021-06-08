window.onload = function(){
var drop = document.getElementById("#drop");

var image = document.getElementById("#drop_img");

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function loopIt(times, min, max){
    for (let i = 0; i < times; i++) {

        setTimeout(function(){
        drop.setAttribute('display', 'none');
        image.setAttribute('display', 'none');
        }, random(min, max));

        setTimeout(function(){
            drop.setAttribute('display', 'block');
            image.setAttribute('display', 'block');
        },random(min, max) );        
    }
}

setInterval(function(){ 
drop.setAttribute('display', 'block');
image.setAttribute('display', 'block');
    setTimeout(function(){
        loopIt(12, 10, 100)
    },random(1000, 2500) );

    setTimeout(function(){
        drop.setAttribute('display', 'block');
        image.setAttribute('display', 'block');
    },random(2000, 4000) ); 

    setTimeout(function(){
        loopIt(25, 10, 500)
    },random(2000, 5000) );

    drop.setAttribute('display', 'block');
    image.setAttribute('display', 'block');

    setTimeout(function(){
        drop.setAttribute('display', 'block');
        image.setAttribute('display', 'block');
    },random(7000, 10000) ); 

    setTimeout(function(){
        loopIt(25, 10, 1000)
    },random(2000, 5000) );

    setTimeout(function(){
        loopIt(15, 10, 40)
    },random(1000, 1500) );

    setTimeout(function(){
        loopIt(50, 10, 4000)
    },random(25000, 50000) );


    drop.setAttribute('display', 'block');
    image.setAttribute('display', 'block');

}, 120000);

}