//app.js to perform basic DOM selection, add event handlers, and to reset the game when it ends
let resetButton=document.querySelector('#btn__reset');
let overlay=document.querySelector('#overlay');
let qwerty=document.getElementById('qwerty');
let qwertyButtons=document.querySelectorAll('#qwerty button');
//resetDisplay function hides the start screen overlay.
const resetDisplay = () =>{
    overlay.style.display = 'none';
    };

//markButton(): this function is called when a player selects a letter.
// It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
const markButton = (button) =>{
    button.disabled=true;
};

//Add an event listener to the "Start Game" button which calls the resetDisplay() function,
// creates a new Game object, and starts the game.
resetButton.addEventListener('click',(event)=>{
    console.log(event.target);
    console.log('button clicked');
    resetDisplay();
});

//Add event listeners to each of the keyboard buttons,
// so that clicking a button calls the markButton() function.
qwerty.addEventListener('click',(event)=>{
    if (event.target.className==='key'){
        console.log('button '+event.target.textContent+' is clicked');
        markButton(event.target);
    }
});