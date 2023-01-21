import { View, Button } from "react-native";
import styles from "../styles/styles";
import { tenFrameConstructor } from "../functions/functions";

const ConfirmButton = ({
  answer,
  correctAnswer,
  setTenFrame,
  testNumber,
  setScore,
  setError,
  setTestNumber,
  setAnswer,
  score,
  setAntiError,
}) => {
  //Confirm Button component: confirms answer selection and checks validity of answer.
  //Possible outcomes:
  //Correct answer: updates progress bar and overall score, moves onto next quiz question, iterates question number
  //also: gives user a temporary 'well done' prompt
  //Incorrect answer: if valid, updates progress bar and overall score and iterates question number.
  //also: if the answer is within a range of 1 of the correct answer, gives user a temporary prompt letting them know
  //Invalid answer: sets error message informing the user why the input is invalid. This stays until a new number is inputted
  return (
    <View style={styles.button}>
      <Button
        title="Confirm"
        onPress={() => {
          if (!answer) {
            setError("Please select an answer");
            return;
          }
          if (parseInt(answer) > 10 || parseInt(answer) < 1) {
            setError("Please select a number which is between one and ten");
            setAnswer(null);
            return;
          }
          if (parseFloat(answer) % 1 !== 0) {
            setError("Come on, I'm not rounding for you. Whole numbers only");
            setAnswer(null);
            return;
          }
          if (parseInt(answer) === correctAnswer) {
            let newScore = [...score];
            newScore[testNumber] = 1;
            setScore(newScore);
            setAntiError("Nice job! You got that one right!");
            setTimeout(() => {
              setAntiError("");
            }, 2000);
          }
          if (parseInt(answer) !== correctAnswer) {
            let newScore = [...score];
            newScore[testNumber] = 2;
            setScore(newScore);
          }
          if (
            parseInt(answer) === correctAnswer + 1 ||
            parseInt(answer) === correctAnswer - 1
          ) {
            setAntiError("Close! You were just one off!");
            setTimeout(() => {
              setAntiError("");
            }, 2000);
          }
          setError("");
          setTestNumber(testNumber + 1);
          setAnswer(null);
          setTenFrame(tenFrameConstructor());
        }}
      ></Button>
    </View>
  );
};

export default ConfirmButton;
