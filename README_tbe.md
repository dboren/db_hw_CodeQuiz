#Code Quiz app by Daniel Boren


##Value Add Proposal

Create a short, timed multiple choice quiz to test user's knowlede of coding.


##Tech Stack

Demonstrates knowledge in using javascript to create and modify html elements dynamically according to user input.


##Components

App is comprised of modular discrete functions to generate each page.

Initialization function - Generates the launch page and loads saved user score entries from local storage.

Start quiz function - Loads first question and associated answer buttons as well as starting the timer.

All question pages follow similar template - One answer answer will trigger a "correct answer" response that adds to user's current score. Remaining answer buttons will trigger a "wrong answer" response that subtracts from user score and remaining seconds on timer by a set interval.

Both "correct answer" and "wrong answer" responses will load the next question.

Final questions correct and wrong responses will both stop the timer and trigger function that loads the end screen.

End screen - Prompts user to enter initials for score entry. Initials and associated score are then stored in local storage. End screen contains button to allow restarting the quiz without having to refresh the browser.