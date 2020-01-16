# Code Quiz
​
#### Code-Quiz-Repo, 12/04/2019
​
#### By Elijah Broaddus
​
## Description

<img width="1136" alt="Screen Shot 2020-01-15 at 11 41 07 PM" src="https://user-images.githubusercontent.com/50716060/72493982-86b66300-37f0-11ea-9513-20e5747ceecb.png">


Code-Quiz is a quiz application that can be modified to suit the user's needs. 

##Features
* Quiz loops through questions in separate Javascript file.
* Points are added to user score when a correct answer is selected. 
* Final score is calclulated when last question is reached. 
* Score is calculated by combining total points earned from selecting correct answers and time left upon completion.
 
​
​
## Setup/Installation Requirements
​
* No setup needed. Questions can be modified in the questions.js file. When adding or subtracting questions, please see note in script.js, as the end of the quiz is determined by the final click of the next button. The variable "nextCount" needs to be set to the same number of questions in the questions object (in the if statement) in order to end at the appropriate time. The variable "minutes" in the setTime() function needs to be changed to an appropriate length as well. 
​
​
​
## Known Bugs
​
Highscores are not saved on a server. Upon restart, local storage is cleared, and the highscores drop-down menu will clear. 
​
## Support and contact details
​
Please email us for further questions at elijahlb@gmail.com
​
## Technologies Used
​
HTML
​
CSS

Bootstrap
​
Javascript
​
​
### License
​
Copyright(c) 2019 by Elijah Broaddus
