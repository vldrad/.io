'use strict'

document.addEventListener('DOMContentLoaded', () => {
    alert('HELLO! TO COMPLETE LEVELS CHOOSE NUMBERS FROM LOW TO HIGH! GOOD LUCK!');

    let completed = 0,
        level = document.querySelector(`#level_${completed + 1}`),
        buttons = document.querySelectorAll(`#level_${completed + 1} div`),
        num = 0;

    //CHANGING FOR NEXT LEVEL
    function changeLvl () {
        //Winners message
        alert(`🏆LEVEL COMPLETED🏆 |Levels completed: ${completed}, going to Level: ${completed + 1}|`);
        //Hiding previous level
        level.style.display = 'none';
        //Changing value for [level]
        level = document.querySelector(`#level_${completed + 1}`)
        //Changing value for [buttons]
        buttons = document.querySelectorAll(`#level_${completed + 1} div`);
        //Showing next level
        level.style.display = 'flex';

        game();

        num = 0;
    }

    //RESTARTING LEVEL IF PLAYER FAILS
    function restart () {
        buttons.forEach (btn => {
            btn.style.backgroundColor = 'whitesmoke';
            btn.style.border = '3px solid red';
            btn.classList.remove('click_anim');
        });

        num = 0;
    }

    //MAKES GAME WORK
    function game () {
        buttons.forEach (btn => {
            
            btn.addEventListener('click', () => {
                num++;
                
                if(num != btn.id) {
                    restart();
                } else if (buttons.length != num) {
                    btn.classList.add('click_anim');
                    setTimeout(() => {
                        btn.style.backgroundColor = 'black';
                        btn.style.border = 'none';
                    }, 300);
                } else {
                    completed++;
    
                    changeLvl();
                }
            });
        });
    }

    //CALLED FUNCTIONS
    game();
});