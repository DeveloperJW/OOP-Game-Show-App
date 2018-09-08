//Game.js to create a Game class with methods for starting and ending the game, handling interactions,
// getting random phrases, checking for a win, and removing a life counter.
class Game{
    constructor(){
        this.missed=0;//number of missed guesses
        this.phrases=[new Phrase("how are you"), new Phrase("hello"), new Phrase("you win")];//an array of phrases to use with the game
    }
    getRandomPhrase(){
        const randomNum=Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomNum];
    }
    get randomPhrase(){
        // return Math.floor(Math.random()*this.phrases.length);
        return this._randomPhrase;
    }
    set randomPhrase(randomPhrase){
        this._randomPhrase=randomPhrase;
    }
    //this method checks to see if the button clicked by the player matches a letter in the phrase.
    handleInteraction(item){
        // if selected word matches, call the showMatchedLetter() method and call checkForWin()
        //if true show the letter onto the screen, else call removeLife()
        let letter;
        /*
        use ternary operator to check if the type is string or button
        if user trigger the event by clicking the button, we get the letter by .textContent
        if user trigger the event by pressing keyboard, we use the key value as string
        */
        typeof item==='string'? letter= item: letter=item.textContent;
        if (this.randomPhrase.checkLetter(letter)){
            item.className+= ' chosen';// make the background color of correct choice purple
            this.randomPhrase.showMatchedLetter(letter);
            this.checkForWin();
        } else{
            // console.log(this.randomPhrase.phrase);//log the phrase to console to double check for development purpose
            item.className+=' wrong';//make the background color of wrong choice orange
            this.removeLife();
        }
    }//end of handleInteraction

    //this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife(){
        let removeEl = document.querySelector('#scoreboard ol li');
        removeEl.parentNode.removeChild(removeEl);
        this.missed++;
        if (this.missed>=5){
            this.gameOver();
        }
    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin(){
        const totalLetterLength= document.querySelectorAll('#phrase .letter-multiple').length+
            document.querySelectorAll('#phrase .letter').length;//all letters on screen
        const totalShownLength= document.querySelectorAll('#phrase .show').length;//total shown length
        if (totalLetterLength===totalShownLength){
            this.gameOver();
        }
    }
    //this method displays a message if the player wins or a different message if they lose.
    gameOver(){
        let message = document.querySelector('#game-over-message');
        let resetButton=document.querySelector('#btn__reset');
        let overlay=document.querySelector('#overlay');
        overlay.style.display='';
        if (this.missed<5){
            // player might win
            message.innerText= "You Win!";
            resetButton.innerText= "Play Again";
            overlay.className='win';//change the background color
        } else{
            //player lose
            message.innerText="You Lose!";
            resetButton.innerText= "Try Again";
            overlay.className='lose';
        }
        this.resetGame();

    }
    //calls the getRandomPhrase() method, and adds that phrase to the board by calling the
    // Phrase class' addPhraseToDisplay() method.
    startGame(){
        const selectedPhrase=this.getRandomPhrase();
        this.randomPhrase=selectedPhrase;
        selectedPhrase.addPhraseToDisplay();
    }

    //reset the game function
    resetGame(){
        //reset the missed guess of user back to 0
        this.missed=0;
        // reset all buttons been disabled
        let disabledButton= document.querySelectorAll('#qwerty button[disabled]');
        for (let i=0; i<disabledButton.length; i++){
            disabledButton[i].disabled=false;
            disabledButton[i].className='key';
        }
        // next, reset all lives
        let scoreboard=document.querySelector('#scoreboard ol');
        scoreboard.innerHTML= `
<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`;
    }

}