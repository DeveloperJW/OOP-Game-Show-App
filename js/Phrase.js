//Phrase.js to create a Phrase class to handle the creation of phrases
/*
addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
Each letter is presented by an empty box, one list item for each letter.
See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the
game starts. When the player correctly guesses a letter, the empty box is replaced with a the matched letter
(see the showMatchedLetter() method below. Make sure the phrase displayed on the screen doesn't include spaces.

checkLetter(): checks to see if letter selected by player matches a letter in the phrase.

showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
 */
class Phrase{
    constructor(phrase){
        this.phrase=phrase;
    }

    /**
     * addPhraseToDisplay() method adds letter placeholders to the display when the game starts.
     */
    addPhraseToDisplay(){
        //first, generate the html of the content
        let contentHTMLFormat=`<ul>`;
        for (let i=0; i<this.phrase.length; i++){
            if (this.phrase[i] !==" ") {
                contentHTMLFormat += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            } else{
                contentHTMLFormat+=`<li class="hide space"> </li>`;
            }
        }
        // use DOM to add content
        contentHTMLFormat+=`</ul>`;
        const boxes=document.querySelector('#phrase');
        boxes.innerHTML=contentHTMLFormat;
    }//end of addPhraseToDisplay() method

    /**
     * checkLetter method checks to see if letter selected by player matches a letter in the phrase.
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
     * showMatchedLetter() method reveals the letter(s) on the board that matches player's selection.
     */
    showMatchedLetter(letter){
        // document.querySelectorAll(`li[class="hidden letter ${letter}"]`);
        const allLetters=document.querySelectorAll('#phrase li');
        for (let i=0; i<allLetters.length; i++){
            if (allLetters[i].textContent===letter){
                allLetters[i].className+=" show";
            }
        }//end of for loop
    }//end of showMatchedLetter method
}