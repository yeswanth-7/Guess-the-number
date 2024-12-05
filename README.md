# 🎯 Number Guessing Game

A **fun and simple JavaScript-based game** where players attempt to guess a randomly generated number between a specified range. Challenge your intuition and logic to crack the number!

---

## 🕹️ How It Works

1. 🎲 **Random Number Generation**: The program generates a secret number between `min` and `max`.
2. 🤔 **Player Input**: You are prompted to guess the number.
3. 💡 **Feedback**:
   - If your guess is **too low**, the program hints: `"Too low. Try again."`
   - If your guess is **too high**, the program hints: `"Too high. Try again."`
4. 🏆 **Victory**:
   - When the correct number is guessed, you'll see a congratulatory message.
   - The program reveals how many attempts it took to guess the number.

---

## ✨ Features

- 🎯 **Dynamic Range**: Generates a random number within a specified range (`min` to `max`).
- ✅ **Input Validation**: Ensures the entered value is a valid number within the range.
- 🔄 **Instant Feedback**: Provides immediate clues to guide you toward the answer.
- 📊 **Track Attempts**: Keeps count of the number of guesses.

---

## 📋 Prerequisites

- A modern web browser with **JavaScript enabled**.

---

## 🚀 How to Run

1. **Create a JavaScript File**: Save the game logic into a file (e.g., `game.js`).
2. **Set Up an HTML File**: Include the JavaScript file in an HTML file like this:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Number Guessing Game</title>
   </head>
   <body>
       <h1>🎯 Number Guessing Game</h1>
       <p>Follow the prompts to guess the number!</p>
       <script src="game.js"></script>
   </body>
   </html>
# 🎯 Number Guessing Game

---

## 🚀 How to Run

1. **Open the HTML File**: Open the HTML file in your browser.
2. **Start Playing**: Follow the on-screen prompts to guess the number.

---

## 🔍 Code Explanation

### Key Variables

- **`min`**: The minimum value for the number range.
- **`max`**: The maximum value for the number range.
- **`answer`**: The secret randomly generated number to guess.
- **`attempt`**: Tracks the number of attempts made by the player.
- **`running`**: A flag to control the game loop.

### Main Logic

1. A `while` loop keeps the game running until the correct number is guessed.
2. User input is collected using `window.prompt()`.
3. Input is validated to ensure:
   - It's a number.
   - It's within the specified range (`min` to `max`).
4. Feedback guides the player:
   - **Too low**: `"Too low. Try again."`
   - **Too high**: `"Too high. Try again."`
   - **Correct**: `"Congratulations! The answer is <correct number>. You found the number in <attempts> attempts."`

---

## 🖼️ Example Output

### Initial Prompt
### Feedback Examples
- **Too low**: `Too low. Try again.`
- **Too high**: `Too high. Try again.`
- **Correct**: `Congratulations! The answer is 42. You found the number in 5 attempts.`

---

## 💡 Notes

- You can adjust the range of the game by modifying the values of `min` and `max`.
- To enhance the game, you can:
  - Add a **replay option** after a win.
  - Display a **guess history**.
  - Introduce **difficulty levels**.

---
