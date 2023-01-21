import { View, Text } from "react-native";
import styles from "../styles/styles";
import TenFrame from "./tenFrame";
import KeyboardInput from "./keybordInput";
import ConfirmButton from "./confirmButton";
import { useState } from "react";
import ProgressTracker from "./progressTracker";

const Quiz = ({
  testNumber,
  setTestNumber,
  score,
  setScore,
  tenFrame,
  setTenFrame,
}) => {
  //This component largely ties together the components: ConfirmButton, KeyboardInput, TenFrame, ProgressTracker, and error/prompt messages
  //These components comprise the interactive user interface for the game, excluding the score screen, menu and introduction screen
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState("");
  const [antiError, setAntiError] = useState("");
  const correctAnswer = tenFrame.filter((node) => {
    return node.value;
  }).length;
  return (
    <View
      style={styles.container}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Text style={styles.title}>Manipulative Maths</Text>
      <ProgressTracker score={score}></ProgressTracker>
      <Text style={styles.header}>
        Challenge number: {testNumber + 1} of {score.length}
      </Text>
      <TenFrame tenFrame={tenFrame} correctAnswer={correctAnswer}></TenFrame>
      <KeyboardInput answer={answer} setAnswer={setAnswer}></KeyboardInput>
      <ConfirmButton
        answer={answer}
        correctAnswer={correctAnswer}
        setTenFrame={setTenFrame}
        testNumber={testNumber}
        setScore={setScore}
        setError={setError}
        setTestNumber={setTestNumber}
        setAnswer={setAnswer}
        score={score}
        setAntiError={setAntiError}
      ></ConfirmButton>
      {error && <Text style={styles.error}>{error}</Text>}
      {antiError && <Text style={styles.antiError}>{antiError}</Text>}
    </View>
  );
};

export default Quiz;
