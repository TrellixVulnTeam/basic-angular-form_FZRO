# Getting started with Angular
### exercise in week 10 (29/11/2021 - 03/12/2021) of our BeCode training
## Published page
N/A
## Challenge
To get right back into the swing of things, our coaches at [BeCode](https://becode.org/) decided to introduce us to a new Framework, [Angular!](https://angular.io/)  
By following [this exercise](https://github.com/becodeorg/ANT-Lamarr-5.34/tree/main/2.The-Hill/angular/intro) step by step we are hoping to get a basic understanding of Angular, typescript and the Angular CLI commands.

## The objective of this exercise

* Make a basic Angular form
* Take the information provided by the user and save it to the provided node.js api
* Send https requests from an angular app to a node server

## Tools and languages used

|  | Description |
| ----------- | ----------- |
| ![windows10](angular-form\src\assets\README\windows10-logo.png) | Running Windows 10 |
| ![vsCode](angular-form\src\assets\README\vscode-logo.png) | Working with PHPStorm as IDE |
| ![Angular](angular-form\src\assets\README\Angular-logo.png) | Project built with Angular |
| ![git](angular-form\src\assets\README\git-logo.png) | Using git for version control |
| ![github](angular-form\src\assets\README\github-logo.png) | Hosting my files on github |

## Timeline
* Day1 (:date: 29/12/2021)
  * After the exercise briefing by coach [Tim](https://github.com/Timmeahj) I made sure to pull the latest version of our [course material](https://github.com/becodeorg/ANT-Lamarr-5.34)
  * Having read through the readme file I tackled the installation of Angular/CLI first
    * :exclamation: I ran into some issues with PowerShell returning errors about script running permissions.
      * found the solution [here](https://stackoverflow.com/questions/58032631/why-powershell-does-not-run-angular-commands) and [here](https://www.javatpoint.com/npm-clear-cache)
      * having done the above mentioned steps, I could now run `ng` commands in PowerShell
    * Once I got my project up and running including the live server `ng serve --port 4500` I got stuck into the coding part of the exercise and
  * I read through some of the Angular documentation on forms and the formBuilder but decided not to use the last at this point.
  * Eventually I decided to just try coding as I went
  * I managed to get a simple form displayed in the app
    * Bit by bit I went through the steps and added the required functionality
    * Since I had emptied out both the `app.component.html` and the `app.component.ts` I had also removed the link to its stylesheet so I added it back on to test the conditional styling
    * The `regex patterns` were a headache as per usual
      * The first and last name allows for all letters between a and z(lower or uppercase) and some special characters (space, dash and apostrophe)
      * The email address needs 'string' + @ + 'string' + . + 'string' at least, meaning it will accept an email address of a@b.c
      * The phone number is limited to take only belgian numbers (always having a 4 between the country code or 0 prefix and the actual number)
        * 0032 4 xx xx xx xx
        * +32 4 xx xx xx xx
        * 0 4 xx xx xx xx
      * I also make sure the 2 numbers making up the provider number are between 60 and 99 (group 3)
    * Once all that was working I disabled the button until the form is valid
    * and I added the novalidate property to the form to prevent automatic browser validation
    * I also rearranged my folder structure to ensure the `server` folder gets added tot he repository
    * Mid afternoon commit and push at :clock3: 3:20PM
    * It took me longer than I care to admit to figure out the issue with console logging upon submit
      * turns out my method and my form variable had the same name, so the method could not get called
      * THANKS Jorg and Daryl for letting me Ducksplain through the issues
    * I tried generating a new service but something had gone wrong along the way and I got an error from angular
      * so I made a project backup, deleted the remote repository, created a new angular project, copied the files I needed back into the new project and `git init` the whole thing
      * Somehow the issue got fixed and I now have an `addFriend` service that imports the {httpClient} from angular.
    * Tomorrow starts at step 15
    * Final push of day 1 at :clock5: 5:10 PM
* Day 2 (:date: 30/11/2021)
  *  decided to continue using VSCode on Windows 10 for the rest of the week (change it up a bit...)
  *  First thing, get the `ng serve --port 4500` command out of the way and check if everything still works the way I left it yesterday
  *  the further along in the exercise I get the more I feel like the steps are really holding my hand.It appears to get easier to understand what is being asked of me.
  *  I read through step 15, checked the Angular [documentation on http requests](https://angular.io/guide/http) and managed to get things working with only a minimum of errors along the way
  *  In step 16 of the exercise we got to the server part. It took a few minutes to figure out that I had to specify the method path in the `onSubmit()` function, but it appears to be working as intended now.
  *  Time for a `git commit` :clock10: at 10AM

## To Do
This to do list is for personal use, the full to do list is added at the start of the challenge and as we complete
objectives they will be moved up into the timeline section and ticked off using emotes such as :heavy_check_mark:

### must-haves
1. A form with **at least** these input fields :heavy_check_mark:
   1. first name
   2. last name
   3. email
   4. phone number
   5. a select element for the favorite language
2. Visual error reporting (some indication the user made an error) :heavy_check_mark:
3. Form validation :heavy_check_mark:
4. A friend list (by sending a get request to the local node server)
5. A Post request to add to your friend list :heavy_check_mark:

### Nice to have
1. Email validation :heavy_check_mark:
2. Phone number validation :heavy_check_mark:
3. separate adding friends (the form) from the friend list (the display)
4. Add some extra fields
   1. profile picture?
   2. Signature move?
   3. Favorite meme?
   4. gender
   5. ...
5. Try another app.GET function (be creative)
   1. a list of people that like PHPStorm
   2. Randomized friend list (20 people)
   3. A list based on age