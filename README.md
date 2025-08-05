# Rock Paper Scissors

A console-based implementation of the classic Rock Paper Scissors game, built as part of The Odin Project's Foundations Course.

## Project Overview

This project creates a Rock Paper Scissors game that runs entirely in the browser console. The game pits a human player against a computer opponent over 5 rounds, keeping track of scores and declaring an overall winner.

## Learning Objectives

-   Practice JavaScript fundamentals
-   Work with functions, variables, and control flow
-   Implement game logic and user interaction
-   Use browser console for input/output
-   Practice problem-solving and pseudocoding

## Problem Solving Approach

For each step in this project, follow this methodology:

1. **Plan or pseudocode** your solution
2. **Write the code**
3. **Test your code** to ensure it works correctly

## Project Requirements

### Step 1: Setup the project structure

-   Create a new Git repository for your project
-   Create a blank HTML document with a script tag
-   Link to an external JavaScript file
-   Test JavaScript connection with `console.log("Hello World")`
-   Verify "Hello World" appears in browser console

### Step 2: Get computer choice

-   Create function `getComputerChoice()`
-   Randomly return "rock", "paper", or "scissors"
-   Use `Math.random()` method
-   Test function output with `console.log`

### Step 3: Get human choice

-   Create function `getHumanChoice()`
-   Use `prompt()` method to get user input
-   Return the user's choice
-   Assume user always enters valid input
-   Test function with `console.log`

### Step 4: Declare score variables

-   Create `humanScore` and `computerScore` variables in global scope
-   Initialize both variables to 0

### Step 5: Play a single round

-   Create function `playRound(humanChoice, computerChoice)`
-   Make `humanChoice` parameter case-insensitive
-   Console.log round winner message (e.g., "You lose! Paper beats Rock")
-   Increment appropriate score variable based on winner

### Step 6: Play the entire game

-   Create function `playGame()`
-   Move `playRound` function and score variables inside `playGame`
-   Play 5 rounds by calling `playRound` 5 times
-   Ensure choice functions are called for each round (not just once)
-   Declare overall winner at the end

## Technical Notes

-   Game runs entirely in browser console
-   No GUI elements required (those come in later lessons)
-   Use external JavaScript file for clean organization
-   Commit code to GitHub early and often
-   Focus on core functionality, not additional features

## File Structure

```
odin-rock-paper-scissors/
├── README.md
├── index.html
└── script.js
```

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Open browser developer tools (F12)
4. Navigate to Console tab
5. Run the game by calling `playGame()`

## Game Rules

-   Rock beats Scissors
-   Scissors beats Paper
-   Paper beats Rock
-   Game plays 5 rounds
-   Player with most wins at the end is the overall winner

---

_This project is part of The Odin Project's Foundations Course. For more information, visit [The Odin Project](https://www.theodinproject.com/)._
