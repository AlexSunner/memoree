# Memoree

Memoree is an engaging memory card game that challenges players to match pairs of cards depicting animals. With a delightful interface and an exciting shuffle mechanic, players aim to test and enhance their memory skills. Celebrate victories and restart the fun with a popup message and a simple "Restart Game" button when you conquer the challenge!

The live link can be found here - <https://alexsunner.github.io/memoree/>

## Planning

### Before creating this project I made a wireframe, visualizing the final product beforehand

- I wanted the game to be fully responsive for different devices, ensuring an optimal and enjoyable experience whether played on a desktop, tablet, or mobile device.
- I wanted to have kids-friendly cards, featuring adorable animals that would engage young players and create a family-friendly gaming environment.
- I wanted to have a clean popup message when the game finishes, displaying a simple and congratulatory message like "Congratulations! You won!" to enhance the overall user experience.

![Wireframe](https://github.com/AlexSunner/memoree/blob/main/assets/readmephotos/wireframe.jpg?raw=true)
![Responsive Mockup](https://github.com/AlexSunner/memoree/blob/main/assets/readmephotos/memoreeresponsive.jpg?raw=true)

## Features

Here is a presentation of the different features added into Memoree.

- __Scoreboard__

  - The Memoree scoreboard not only tracks your score but also displays the guiding message "Pick two cards and see if they match!" It enhances the gaming experience, providing a visual snapshot of your progress and encouraging improved memory skills.
![Scoreboard](https://github.com/AlexSunner/memoree/blob/main/assets/readmephotos/scoreboard.jpg?raw=true)

- __Game Area__

  - The Memoree game area with vibrant, kid-friendly cards create an engaging environment. This visually appealing section invites players to explore, offering a delightful experience as they match pairs and sharpen their memory skills.
![Game Area](https://github.com/AlexSunner/memoree/blob/main/assets/readmephotos/opencards.jpg?raw=true)

- __Restart Button__

  - The "Restart Game" button provides a quick and convenient way to reset the game, allowing players to embark on a new memory challenge with just a click. Simple yet essential, this button ensures a seamless and enjoyable gaming experience.

![Restart Button](https://github.com/AlexSunner/memoree/blob/main/assets/readmephotos/restartbutton.jpg?raw=true)

- __Popup Window__
  
  - The popup window elegantly announces the end of the game with a congratulatory message, creating a delightful moment of victory for the players. Its clean design enhances the overall gaming experience, providing a visually appealing way to celebrate success.

## Testing

- Testing Memoree's mechanics involved meticulous evaluation of the scoring system, ensuring accurate tracking and display of points.
- Extensive testing was conducted on card matching and non-matching scenarios to guarantee the game's responsiveness and logical flow.
- The popup message underwent thorough examination to ensure clarity and a user-friendly experience.
- The restart button was rigorously tested to confirm its effectiveness in resetting the game while maintaining a seamless transition.

### Media Query Responsiveness

- With a maxmimum width of 400 pixels, the images intelligently adjust to a smaller size, optimizing visibility and playability.
- For wider screens, specifically those with a minimum width of 770 pixels, the game layout dynamically reconfigures, displaying cards in four rows with three cards each. This adaptive approach ensures an engaging and visually appealing presentation, regardless of the user's device.

### Validator Testing

- HTML
  - No errors or warnings were found when passing through the [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Falexsunner.github.io%2Fmemoree%2F)
- CSS
  - No errors or warnings were found when passing through the [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falexsunner.github.io%2Fmemoree%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - One warning was returned when testing the code in [JSHint](https://jshint.com/) JavaScript Line 33: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (frontCard, card, gameArea, match). I am using an immediately invoked function expression (IIFE) inside a loop to create a new scope for each iteration, aiming to capture the current value of the loop variable. The scoping is being handled correctly, thus I can ignore the warning.
