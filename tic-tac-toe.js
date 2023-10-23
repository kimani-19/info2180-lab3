window.onload =function() {
    const game =document.getElementById("game");
    const status =document.getElementById("status");
    const board =document.getElementById("board");
    const controls = document.getElementsByClassName("controls")[0];
    const button =document.querySelector(".board");

    const element = board.querySelectorAll("div");
    let play = 'X';
    
        function checkWinner() {
            const winningCombinations = [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
              if (i < 3) {
                return [i, i + 3, i + 6];
              } else if (i < 6) {
                return [i - 3, i, i + 3];
              } else if (i === 6) {
                return [0, 4, 8];
              } else {
                return [2, 4, 6];
              }
            });
    
        const isWinner = winningCombinations.some(combination => {
            const [first, second, third] = combination;
            return element[first].innerHTML === play && element[second].innerHTML === play && element[third].innerHTML === play;
          });
          
          if (isWinner) {
            status.innerHTML = `Congratulations! ${play} is the Winner!"`;
            status.classList.add('you-won');
            return true;
          }
        
      }

      function switchPlayer() {
        if (play === 'X') {
          play = 'O';
        } else {
          play = 'X';
        }
      }
    
      function resetBoard() {
        for (const square of element) {
          square.innerHTML = '';
          square.style.pointerEvents = 'auto';
          square.classList.remove('X', 'O');
        }
      
        if (status) {
          status.innerHTML = 'Move your mouse over a square and click to play an X or an O.';
          status.classList.remove('you-won');
        }
      
        if (play) {
          play = 'X';
        }
      }
    
      for (let i = 0; i < element.length; i++) {
        element[i].classList.add('square');
    
        element[i].addEventListener('click', () => {
          if (!element[i].innerHTML) {
            element[i].innerHTML = play;
            element[i].classList.add(play);
            element[i].style.pointerEvents = 'none';
    
            if (!checkWinner()) {
              switchPlayer();
            }
          }
        });
    
        element[i].addEventListener('mouseover', () => {
          element[i].classList.add('hover');
        });
    
        element[i].addEventListener('mouseout', () => {
          element[i].classList.remove('hover');
        });
      }
    
      button.addEventListener('click', resetBoard);
    };
