//Phrase.js to create a Phrase class to handle the creation of phrases
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