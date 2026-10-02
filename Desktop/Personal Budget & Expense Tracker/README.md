# Personal Budget & Expense Tracker

## Description
This project is a responsive and polished Personal Budget & Expense Tracker web application built to manage daily expenses and track financial status visually.

## Features Built
- **Color Palette & Typography:** Applied a professional color scheme and integrated custom Google Fonts (`Poppins`) for improved visual hierarchy.
- **Card Layout & Box Model:** Utilized CSS Box Model properties (`margin`, `padding`, `border`, and `border-radius`) to structure major sections into distinct, modern visual cards.
- **Expense Table & Form Styling:** Styled inputs, buttons, table headers, and alternating row colors to enhance user experience and readability.

# SpendWise Dashboard Shell

SpendWise Dashboard Shell is the foundational frontend layout for the SpendWise personal finance capstone project. It provides a clean, modern, and fully responsive dashboard structure built with pure HTML5, CSS Grid, and Flexbox.

## Features Built

- **Sidebar Navigation:** Contains app branding and navigational links styled using Flexbox.
- **Header Section:** Features a dynamic greeting, user profile section, and notification icons.
- **Category Cards:** Includes six financial breakdown cards (Food & Dining, Transport, Rent & Housing, Entertainment, Savings, and Utilities) populated with realistic static data.
- **Modern Layout Techniques:** 
  - **CSS Grid** is used for the overall application layout shell.
  - **Flexbox** handles the internal alignment for the header, sidebar items, and card structures.
- **CSS Custom Properties (Variables):** Centralized theme management defined on the `:root` selector for brand colors, text colors, and backgrounds.
- **Micro-interactions:** Smooth hover and keyboard focus animations (`transform` and `box-shadow`) lasting under 250ms.
- **Responsive Design:** Automatically collapses into an optimized single-column layout for screens below 768px.
- **Dark Theme Support:** Automatically adapts to the user's operating system preference using `@media (prefers-color-scheme: dark)`.

## Technologies Used
- HTML5 (Semantic elements)
- CSS3 (Grid, Flexbox, Custom Properties, Media Queries)
- FontAwesome (For dashboard icons)

## How to Run
1. Clone the repository.
2. Open `index.html` in any modern web browser or use Live Server in VS Code.

# SpendWise Project

## What SpendWise Does
SpendWise is a web application designed to help users track their personal budgets. It allows users to input their total budget and expenses, calculates the remaining balance, and displays the financial status clearly.

## JavaScript Concepts Implemented
- **Variables (`let`)**: Used to store application data such as `totalBudget`, `totalExpenses`, and `remainingBalance`.
- **User Input (`prompt`)**: Used to interactively collect financial data from the user.
- **Functions**: Encapsulate the core calculation logic (`calculateBudget`) to keep the code organized and reusable.
- **DOM Manipulation**: Updates the HTML document dynamically to show results to the user.

## How Variables are Being Used
Variables are declared using `let` to hold numerical values representing financial data entered by the user, making it easy to update and reference them throughout the script.

## How User Input is Collected
The application uses JavaScript `prompt()` dialog boxes to ask the user for their budget and expense values directly in the browser.

## How Calculations are Performed
The application subtracts the `totalExpenses` variable from the `totalBudget` variable using standard arithmetic operators (`-`) to compute the `remainingBalance`.

## How Functions Help Organize the Code
Functions isolate specific tasks—such as gathering input, processing calculations, and updating the UI—making the code modular, easier to read, and simpler to debug.