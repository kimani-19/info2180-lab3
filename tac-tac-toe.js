// 'use strict';

window.onload = function() {

    const game = document.getElementById("game");
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const controls = document.getElementsByClassName("controls")[0];
    const button = document.getElementsByClassName("btn")[0];

    const elem = board.querySelectorAll('div');
    let play ="X";


    for(let i=0; i<=8;i++){
       elem[i].setAttribute("class","square");

           elem[i].addEventListener('click',function(){
                // plays[i]=play;
                elem[i].innerHTML=play;
                elem[i].classList.add(play);

                if(play=="O"){
                    play='X';
                    // plays[i]=play;
                    elem[i].innerHTML=play;
                    elem[i].classList.add(play);
            
                }
                else{
                    play="O";
                    // plays[i]=play;
                    elem[i].innerHTML=play;
                    elem[i].classList.add(play);
                }
                elem[i].style.pointerEvents = 'none';

                if (
                    elem[0].innerHTML=="X" && elem[1].innerHTML=="X" && elem[2].innerHTML=="X" || 
                    elem[3].innerHTML=="X" && elem[4].innerHTML=="X" && elem[5].innerHTML=="X" ||
                    elem[6].innerHTML=="X" && elem[7].innerHTML=="X" && elem[8].innerHTML=="X" || 
                    elem[0].innerHTML=="X" && elem[3].innerHTML=="X" && elem[6].innerHTML=="X" || 
                    elem[1].innerHTML=="X" && elem[4].innerHTML=="X" && elem[7].innerHTML=="X" || 
                    elem[2].innerHTML=="X" && elem[5].innerHTML=="X" && elem[8].innerHTML=="X" || 
                    elem[2].innerHTML=="X" && elem[4].innerHTML=="X" && elem[6].innerHTML=="X" || 
                    elem[0].innerHTML=="X" && elem[4].innerHTML=="X" && elem[8].innerHTML=="X" ){
                    status.innerHTML='Congratulations! X is the Winner!"'
                    status.classList.add('you-won');

                }
                else if(
                    elem[0].innerHTML=="O" && elem[1].innerHTML=="O" && elem[2].innerHTML=="O" || 
                    elem[3].innerHTML=="O" && elem[4].innerHTML=="O" && elem[5].innerHTML=="O" ||
                    elem[6].innerHTML=="O" && elem[7].innerHTML=="O" && elem[8].innerHTML=="O" ||
                    elem[0].innerHTML=="O" && elem[3].innerHTML=="O" && elem[6].innerHTML =="O" ||
                    elem[1].innerHTML=="O" && elem[4].innerHTML=="O" && elem[7].innerHTML=="O" ||
                    elem[2].innerHTML=="O" && elem[5].innerHTML=="O" && elem[8].innerHTML=="O" ||
                    elem[2].innerHTML=="O" && elem[4].innerHTML=="O" && elem[6].innerHTML=="O" ||
                    elem[0].innerHTML=="O" && elem[4].innerHTML=="O" && elem[8].innerHTML=="O" ){
                    status.innerHTML='Congratulations! O is the Winner!"'
                    status.classList.add('you-won');
                    
            
                }
                       

            });

            

           elem[i].addEventListener('mouseover',function(){
               elem[i].classList.add('hover');

            });
           elem[i].addEventListener('mouseout',function(){
               elem[i].classList.remove('hover');

            });
    }

    
    button.addEventListener('click',()=>{
        for(let i=0; i<=8;i++){
            elem[i].innerHTML=null;
            elem[i].style.pointerEvents = 'auto';
            status.innerHTML='Move your mouse over a square and click to play an X or an O.'
            status.classList.remove('you-won');
            elem[i].classList.remove('O');
            elem[i].classList.remove('X');


        }
     
    });





};