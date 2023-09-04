'use strict';


const soundClick = new Audio('../sound/switch-sound.mp3');

const acceptButton = document.querySelector('.enter_window button'),
      rightJoyCon = document.querySelector('.right'),
      disclaimer = document.querySelector('.enter_window'),
      content = document.querySelector('.content');

acceptButton.addEventListener('click', () => {
    soundClick.play();
    rightJoyCon.classList.add('joycon_anim');
    rightJoyCon.style.top = '0';
    disclaimer.style.display = 'none';
    content.style.display = 'flex';
    setTimeout(() => {
        rightJoyCon.classList.remove('joycon_anim');
    }, 1000);
});