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
    handleInteraction(letter){
        // if selected word matches, call the showMatchedLetter() method and call checkForWin()
        //if true show the letter onto the screen, else call removeLife()
        if (this.randomPhrase.checkLetter(letter.textContent)){
            this.randomPhrase.showMatchedLetter(letter.textContent);
            //checkForWin
            this.checkForWin();
        } else{
            console.log(this.randomPhrase.phrase);
            this.removeLife();
        }
    }//end of handleInteraction

    //this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife(){
        let removeEl = document.querySelector('#scoreboard ol li');
        removeEl.parentNode.removeChild(removeEl);
        this.missed++;
    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin(){

    }
    //this method displays a message if the player wins or a different message if they lose.
    gameOver(){
        let message = document.querySelector('#game-over-message');
        if (this.missed<5){
            // player might win
        } else{
            //player lose
            message.innerText="You Lose!";
        }

    }
    //calls the getRandomPhrase() method, and adds that phrase to the board by calling the
    // Phrase class' addPhraseToDisplay() method.
    startGame(){
        const selectedPhrase=this.getRandomPhrase();
        this.randomPhrase=selectedPhrase;
        selectedPhrase.addPhraseToDisplay();
    }

}