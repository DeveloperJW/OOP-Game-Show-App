# Phrase Hunter - OOP JS Game App

- Purpose of this project: 

  - This project is created for the purpose of JavaScript Full Stack TechDegree - Unit 04 with TeamTreehouse. 
  
  - The app is deployed to GitHub pages: 
  
    https://developerjw.github.io/OOP-Game-Show-App/
  
  
- Project Description:
  - Using JavaScript, you’ll create an array of phrases and create two JavaScript classes with specific
  properties and methods. You'll create a class for the game, and a phrase class to help with creating phrases.
  
  - The App will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.
  
  - Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase.
  If the letter is in the phrase, the game board displays the chosen letters on the screen.
  
  - A player continues to select letters until they guess they phrase (and win), or make five incorrect guesses (and lose).
  
  - If the player completes the phrase before they run out of guesses, a winning screen appears.
  If the player guesses incorrectly 5 times, a losing screen appears.
  
  - A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that
  letter on the onscreen keyboard.
  
  

Extra Credit:
-
- Add keyboard functionality

    Let players use the computer keyboard to enter guesses. You'll need to use the keypress event.
- Reset the Game

    Add a button to the “success” and “failure” screens that resets the game. You’ll have to reset the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.