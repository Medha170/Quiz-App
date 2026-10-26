# Quiz App

A small front-end quiz application built with plain HTML, CSS, and JavaScript. It presents a short set of multiple-choice questions, tracks the player's score, and displays a final results screen.

## Features

- Landing page with a clear start button
- Multiple-choice quiz flow with randomized question order
- Score tracking and progress indicator
- Instant visual feedback for correct and incorrect answers
- Final summary screen with the latest score stored in `localStorage`
- Responsive layout using a simple, clean style

## Project structure

```text
.
├── README.md
└── Project 1 new/
    ├── index.html
    ├── game.html
    ├── end.html
    ├── style.css
    ├── script.js
    └── README.md (optional if added later)
```

## Files overview

- `Project 1 new/index.html` — home screen with the start button
- `Project 1 new/game.html` — quiz interface and question layout
- `Project 1 new/end.html` — final score page
- `Project 1 new/style.css` — visual styling and layout rules
- `Project 1 new/script.js` — quiz logic, scoring, and question handling

## How it works

1. The user opens the home page.
2. Clicking the "Play" button loads the quiz screen.
3. Questions are shuffled and displayed one at a time.
4. Selecting an answer adds points for correct responses and highlights the correct choice for wrong answers.
5. After all questions are answered, the app stores the score in `localStorage` and redirects to the final results page.
6. The final page shows the score and offers options to play again or return home.

## Running the app

This project is a static front-end app, so it does not require a package manager or build step.

### Option 1: Open directly in a browser

Open the file below in your browser:

```text
Project 1 new/index.html
```

### Option 2: Serve it locally

From the repository root, run:

```bash
cd /Users/medhashree/Desktop/Projects/copilot-worktrees/Quiz-App/medha170-effective-guacamole
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/Project%201%20new/
```

or directly:

```text
http://localhost:8000/Project%201%20new/index.html
```

## Customization ideas

- Add more quiz categories and questions
- Include a timer for each question
- Add difficulty levels or multiple rounds
- Introduce a leaderboard using `localStorage` or a backend
- Improve accessibility with better contrast and keyboard support

## Notes

This app is intentionally lightweight and beginner-friendly. It is a good example of using DOM manipulation in JavaScript to create a simple interactive experience without frameworks or libraries.
