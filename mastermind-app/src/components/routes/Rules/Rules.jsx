import React from 'react'
import StyledRules from './Rules.styled'

const Rules = () => {
    return (
        <StyledRules>
            <h1>Rules</h1>
            <p>- To start, the computer picks a random sequence of colors (possibly including duplicate colors).</p>
            <p>- The objective of the game is to guess the exact sequence that the computer chose</p>
            <p>- Fill in your guesses by pressing the color buttons along the bottom of the screen</p>
            <p>- When you are ready to submit, press the check mark button to the left of the code pegs</p>
            <p>- After you submit, the computer will fill in the key pegs to the left to give you information about your guess</p>
            <p>- For each peg that is the correct position and correct color, a black key peg will be added</p>
            <p>- For each peg that is the right color but the wrong position, a white key peg will be added</p>
            <p>- Continue guessing until you either find the correct sequence or run out of attempts.</p>
            <br /><br />
            <p>To play in hard mode with 5 pegs and 8 colors, go to the settings page</p>
            <p>Please log in to track your statistics!</p>
        </StyledRules>
    )
}

export default Rules
