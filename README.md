# Manipulative Maths Readme

## Installation guide:

- `mkdir [repository_name]`
  - create folder for repo
- `cd [repository_name]`
  - navigate to repo
- `git clone git@github.com:kaidaw/whiterosemaths.git`
  - Clones repository from github
- `cd whiterosemaths`
  - Changes directory to root of project
- `npm i`
  - Installs project
- `npm start`
  - Starts project
- Install expo go on mobile
- Go to camera scan qr code and click the link which appears- you may have to do this a couple of times


<h2>User guide</h2>

Once you are in the application, you should see the following instructions:

 <p>
Welcome to Manipulative Maths! <br/>
Your challenge is to work through a series of 10 puzzles <br/>
where you are required to correctly count the number of active <br/>
squares- these show up in green.  <br/>
The answer will always be between One and Ten (1 and <br/>
10). There are no trick questions!  <br/>
Press the 'answer' box to begin and type your answer, <br/>
then press 'confirm' to move onto the next question. You will <br/>
see your total score at the end!  <br/>
Good luck!
 </p>
  
  <p>
  I would like to take this opportunity to highlight a few aspects of my experience building this application: <br/>
  
  1: This was my first experience using React Native so a lot of the time I spent on this project was researching
  how to use this framework. I am very pleased with how well I did for my first attempt! Although for future projects
  I would definitely spend more time implementing things like typescript (I completely ignored this for this project,
  as I wanted to focus more on the core functionality of the app rather than spending too long making it perfect and
  running out of time; I like to build first and refine after). <br/>
  
  2: I was able to test this project only on my own iPhone, so unfortunately I cannot be 100% sure that it works equally well
  using android. This is a limitation of the timeframe I was able to develop this project within. <br/>

  </P>
  
  <h3>BONUS QUESTION:</h3>
  
  
  > Suppose we also wanted to make a new quiz with different questions,
  where the user is given a number and is tasked with representing that
  number in an interactive ten-frame. Think about how you might implement this,
  and write down a few points when you submit.
  
  <p>
  The first idea that comes to mind for implementing an interactive ten frame where the user is
  tasked with representing a number in the most logical way would be: <br/>
  First create a database with every possible combination of representations for a given number. <br/>
  An easy example of this would be the number '9' where you would have ten possibilities
  (essentially, one for each possible blank square). <br/>
  You would then prompt users to input what they perceive to be both the best and the worst possible ways of
  representing this (the user interface would be simple to implement; squares with an 'on off' state which are pressable)
  The data collected from what the user determined to be the most and least useful representations (most useful could be that the blank
  square is at the start thereby immediately making it obvious that it is a 9 and not a 10; least useful could be with the blank square
  possibly at the end, meaning it could be mistaken for a 10 or somewhere in the middle). With more users inputting answers and
  a database of answers being collected, it would be very easy to compare the user's responses with the average responses
  and to give them a score based on this.
  </P>
