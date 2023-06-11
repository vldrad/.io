'use strict'

document.addEventListener('DOMContentLoaded', () => {

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
            btn.style.backgroundColor = 'white';
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
                    btn.style.backgroundColor = 'gray';
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