import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import Score from "./components/scoreCard";
import Menu from "./components/menu";
import Quiz from "./components/quiz";
import styles from "./styles/styles";
import { tenFrameConstructor } from "./functions/functions";

const App = () => {
  //Welcome to my app! I have documented the individual components to give an overview of how they work, but hopefully they
  //are also fairly self explanatory and self documenting as well!
  //
  //I would like to take this opportunity to highlight a few aspects of my experience building this application:
  //
  //1: This was my first experience using React Native so a lot of the time I spent on this project was researching
  //how to use this framework. I am very pleased with how well I did for my first attempt! Although for future projects
  //I would definitely spend more time implementing things like typescript (I completely ignored this for this project,
  //as I wanted to focus more on the core functionality of the app rather than spending too long making it perfect and
  //running out of time; I like to build first and refine after).
  //
  //2: I was able to test this project only on my own iPhone, so unfortunately I cannot be 100% sure that it works equally well
  //using android. This is a limitation of the timeframe I was able to develop this project within.
  //
  //BONUS QUESTION:
  //
  //Suppose we also wanted to make a new quiz with different questions,
  //where the user is given a number and is tasked with representing that
  //number in an interactive ten-frame. Think about how you might implement this,
  //and write down a few points when you submit.
  //
  //The first idea that comes to mind for implementing an interactive ten frame where the user is
  //tasked with representing a number in the most logical way would be:
  //First create a database with every possible combination of representations for a given number.
  //An easy example of this would be the number '9' where you would have ten possibilities
  //(essentially, one for each possible blank square).
  //You would then prompt users to input what they perceive to be both the best and the worst possible ways of
  //representing this (the user interface would be simple to implement; squares with an 'on off' state which are pressable)
  //The data collected from what the user determined to be the most and least useful representations (most useful could be that the blank
  //square is at the start thereby immediately making it obvious that it is a 9 and not a 10; least useful could be with the blank square
  //possibly at the end, meaning it could be mistaken for a 10 or somewhere in the middle). With more users inputting answers and
  //a database of answers being collected, it would be very easy to compare the user's responses with the average responses
  //and to give them a score based on this.
  const [tenFrame, setTenFrame] = useState(tenFrameConstructor());
  const [score, setScore] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [testNumber, setTestNumber] = useState(0);
  const [pause, setPause] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.menuContainer}>
        <StatusBar style="auto" />
        <View style={styles.pageContainer}>
          {pause ? (
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>Manipulative Maths</Text>
              <Text style={styles.description}>
                <Text>
                  {" "}
                  Welcome to Manipulative Maths! {"\n"}
                  {"\n"}Your challenge is to work through a series of 10 puzzles
                  where you are required to correctly count the number of active
                  squares- these show up in green. {"\n"}
                  {"\n"}The answer will always be between One and Ten (1 and
                  10). There are no trick questions! {"\n"}
                  {"\n"}Press the 'answer' box to begin and type your answer,
                  then press 'confirm' to move onto the next question. You will
                  see your total score at the end! {"\n"}
                  {"\n"}Good luck!
                </Text>
              </Text>
              <View style={styles.button}>
                {parseInt(testNumber) === 0 ? (
                  <Button
                    onPress={() => {
                      setPause(false);
                      setTestNumber(0);
                    }}
                    title="Begin"
                  ></Button>
                ) : (
                  <Button
                    onPress={() => {
                      setPause(false);
                    }}
                    title="Resume"
                  ></Button>
                )}
              </View>
            </View>
          ) : testNumber < 10 ? (
            <Quiz
              tenFrame={tenFrame}
              setTenFrame={setTenFrame}
              testNumber={testNumber}
              setTestNumber={setTestNumber}
              score={score}
              setScore={setScore}
            ></Quiz>
          ) : (
            <Score
              score={score}
              setScore={setScore}
              setTestNumber={setTestNumber}
            ></Score>
          )}
        </View>
        <Menu
          tenFrame={tenFrame}
          setTenFrame={setTenFrame}
          setTestNumber={setTestNumber}
          setScore={setScore}
          setPause={setPause}
        ></Menu>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
