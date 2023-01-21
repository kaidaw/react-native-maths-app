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
        {!pause&&<Menu
          tenFrame={tenFrame}
          setTenFrame={setTenFrame}
          setTestNumber={setTestNumber}
          setScore={setScore}
          setPause={setPause}
        ></Menu>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
