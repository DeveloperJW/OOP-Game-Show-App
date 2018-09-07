//app.js to perform basic DOM selection, add event handlers, and to reset the game when it ends
let game=new Game();

let resetButton=document.querySelector('#btn__reset');
let overlay=document.querySelector('#overlay');
let qwerty=document.getElementById('qwerty');
//resetDisplay function hides the start screen overlay.
const resetDisplay = () =>{
    overlay.style.display = 'none';
};

//markButton(): this function is called when a player selects a letter.
// It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
const markButton = (button) =>{
    button.disabled=true;
    //call handleInteraction() method of the Game.js
    game.handleInteraction(button);
};

//Add an event listener to the "Start Game" button which calls the resetDisplay() function,
// creates a new Game object, and starts the game.
resetButton.addEventListener('click',()=>{
    console.log('reset button clicked');
    resetDisplay();
    //calls the resetDisplay() function, creates a new Game object, and starts the game.
    // game=new Game();
    game.startGame();
});

//Add event listeners to each of the keyboard buttons,
// so that clicking a button calls the markButton() function.
qwerty.addEventListener('click',(event)=>{
    if (event.target.className==='key'){
        console.log(event.target.textContent);
        console.log('button '+event.target.textContent+' is clicked');
        markButton(event.target);
    }
});