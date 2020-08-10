# Mastermind Project Proposal

## Description

This project will be a free online version of the classic game 'Mastermind.'  Users will be able to play the game, both classic and alternate versions (different amounts of colors and different numbers of pegs).  Users will be able to play as a guest, or they can make an account which will track win/loss statistics for the different game types.

## Technologies

This project will be built with a frontend in React, and a backend in Ruby on Rails with Posgresql. Libraries that will be used include:

- Styled Components for styling in react
- Bcrypt for password hashing
- Charting library TBD for user stats

## Planning

#### MVP
The minimum viable product for this project is a working version of the Mastermind game with no additional game modes, with a simple user login and a basic win/loss counter for that user.

#### Post MVP
After the MVP is implemented, the following features will be considered.
- Play with different numbers of colors
- Play with different numbers of pegs
- Use a graphing library to show more interesting statistics
    - Average number of rows needed
    - Different stats for different game modes
- Use bcrypt to securly hash user passwords
- Build cool gameplay animations
- Have settings for different levels of game animation

## Data Models

- User Model
    - Name
    - Username/email
    - password

- Game Model
    - user_id
    - Data to let you reload last game

- Game Stats Model
    - Game type
    - Number of wins
    - Number of losses
    - Average Rows needed
    - Average Time to completion (for wins)

- A User has many GameStats
- GameStats belongs to a user

- If there becomes metadata related to a game type then it may end up warrenting it's own model.  (Perhaps I'll keep track of global game stats too :O )

## Wireframes

Wireframes are forthcoming.