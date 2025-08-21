<div align="center">
   
# ONE: Oracle Next Education

# Secret Friend Challenge
Secret Friend: a website developed with HTML, CSS, and JavaScript for the ONE (Oracle Next Education) program. Created for study and portfolio purposes.

![last-commit](https://img.shields.io/github/last-commit/dougpsnts/challengeSecretFriend?style=flat&logo=git&logoColor=white&color=0080ff) ![repo-top-language](https://img.shields.io/github/languages/top/dougpsnts/challengeSecretFriend?style=flat&color=0080ff) ![repo-language-count](https://img.shields.io/github/languages/count/dougpsnts/challengeSecretFriend?style=flat&color=0080ff)

<p><em>Built with the tools and technologies:</em></p>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black) ![Css](https://img.shields.io/badge/CSS-0A16A9.svg?style=flat&logo=Css&logoColor=white)
</div>

## Features

- Can add or remove as many names as you want;
- Randomly picks a name to be your Secret Friend;
- Can hide the name of the last name drawn in order to not spoil the secret when playing with more than one person;
- Restart button;
- Buttons with nice pressing animations;
- An error message is prompted if the input is empty(Please type a valide and unic name!);
- A warning is displayed when all the inputed names have been drawn (There is no more friends to draw.);
- Fully responsive!

## How does it work?

1. Stores user inputs (friends' names) in two arrays:

   - Friends array is displayed and updated as it grows or shrinks;
   - Shuffled array just stores the names.

2. When the `Draw a secret friend` button is pressed the system checks if there are any elements inside the Shuffled array:

   1. If there are:

      - An element from the Shuffled array is picked randomly;
      - Said element is then stored in a variable and this new variable is displayed as the Shuffled Friend result;
      - Said element is then removed from the Shuffled array.

   2. If Shuffled array is empty:
      - Displays a "There are no more names to draw!" message and disables the draw and hide buttons.

## Usage

1. Type the name of your friends and click `Add` or press <kbd>Enter</kbd>;
2. Names will be displayed as tags, click on the X aside the name remove it from the list if you wish;
3. Click on `Draw a secret friend` to randomly pick a name;
4. Click on `Hide secret name` to hide the current result;
5. Repeat the steps 3 and 4 as long as need;
6. Click on `Restart game` to clear everything and start a fresh game.
7. When there are no more names left to be drawn, you can reset the game.

## Media

https://github.com/user-attachments/assets/b9ebb0d8-05a8-45e9-a6b7-7a64a3744582

</div>
