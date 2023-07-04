'use strict'

document.addEventListener('DOMContentLoaded', () => {
    alert('HELLO! TO COMPLETE LEVELS CHOOSE NUMBERS FROM LOW TO HIGH! GOOD LUCK!');

    let completed = 0,
        level = document.querySelector(`#level_${completed + 1}`),
        buttons = document.querySelectorAll(`#level_${completed + 1} div`),
        num = 0,
        timer = document.querySelectorAll('#timer div'),
        lvlTime = 0,
        mins = 0,
        secs = 0,
        msecs = 0,
        tmr = '';

    //CHANGING FOR NEXT LEVEL
    function changeLvl () {
        //Winners message
        alert(`🏆LEVEL COMPLETED🏆 |Time: ${lvlTime} |Levels completed: ${completed}, going to Level: ${completed + 1}|`);
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
            btn.classList.remove('click_anim');
        });

        num = 0;
    }

    //MAKES GAME WORK
    function game () {
        buttons.forEach (btn => {
            
            btn.addEventListener('click', () => {
                num++;

                if (num == 1) {
                    timing();
                }
                
                if (num != btn.id) {
                    restart();
                    resetTimer();
                } else if (buttons.length != num) {
                    btn.classList.add('click_anim');
                    setTimeout(() => {
                        btn.style.backgroundColor = 'black';
                        btn.style.border = 'none';
                    }, 300);
                } else {
                    completed++;

                    lvlTime = `${mins}m ${secs}s ${msecs}0ms`;

                    changeLvl();
                    resetTimer();
                }
            });
        });
    }

    // COUNTS TIME FOR LEVEL
    function timing () {
        tmr = setInterval(() => {
            msecs += 1;
            timer[2].innerHTML = msecs;
            if (msecs == 100) {
                msecs = 0;
                secs += 1;
                if (secs > 9) {
                    timer[1].innerHTML = secs;
                } else {
                    timer[1].innerHTML =`0${secs}`;
                }
            }
            if (secs == 60) {
                secs = 0;
                mins += 1;
                if (mins > 9) {
                    timer[0].innerHTML = mins;
                } else {
                    timer[0].innerHTML = `0${mins}`;
                }
            }
        }, 10);
    }

    // RESETS LEVEL TIMER
    function resetTimer () {
        clearInterval(tmr);
        mins = 0;
        secs = 0;
        msecs = 0;
        timer[0].innerHTML = '--';
        timer[1].innerHTML = '--';
        timer[2].innerHTML = '--';
        lvlTime = 0;
    }

    //CALLED FUNCTIONS
    game();
});