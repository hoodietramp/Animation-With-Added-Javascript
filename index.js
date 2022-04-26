// console.log('hello world');


// for(i=0;i<5;i++){
//     console.log('this is iteration ' + i);
// }

// let a = ['cat', 'dog', 23, 24, 25]
   
//       console.log(a);

var buttonFirst = document.querySelector('button');
var boxFirst = document.getElementById('changeMe');
var boxSecond = document.getElementById('smallBox');

// button.onclick = function changeColor() {
    
//     if(box.style.background == 'red') {
//         box.style.background = 'blue';

//     } else {
//         box.style.background = 'red';
//     }
// }

function changeColor() {
    
    if(boxFirst.style.background == 'black') {
        boxFirst.style.background = 'blue';
    } else if (boxFirst.style.background == 'blue'){
        boxFirst.style.background = 'pink';
    } else if (boxFirst.style.background == 'pink'){
        boxFirst.style.background = 'yellow';
    } else if (boxFirst.style.background == 'yellow'){
        boxFirst.style.background = 'aqua';
    } else if (boxFirst.style.background == 'aqua'){
        boxFirst.style.background = 'violet';
    } else {
        boxFirst.style.background = 'black';
    }
}
function changeSmallBox() {
    
    if(boxSecond.style.background == 'white') {
        boxSecond.style.background = 'red';
    }else {
        boxSecond.style.background = 'white';
    }
}