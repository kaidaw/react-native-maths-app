import { Text, View } from "react-native";
import ProgressTracker from "./progressTracker";
import styles from "../styles/styles";

const Score = ({ score }) => {
  //Component for calculating and rendering the user's final score and giving a semi-personal message depending on the outcome
  const scoreCalculator = (scoreArray) => {
    let finalScore = 0;
    for (let point of scoreArray) {
      if (parseInt(point) === 1) {
        finalScore += 1;
      }
    }
    return finalScore;
  };
  let pointsTally = scoreCalculator(score);
  return (
    <View style={styles.container}>
      {parseInt(pointsTally) > 8 && (
        <View style={styles.center}>
          <Text style={styles.header}>
            Well done! You finished with a score of:
          </Text>
          <ProgressTracker score={score} />
          <Text style={styles.finalScoreGood}>{scoreCalculator(score)}</Text>
        </View>
      )}
      {parseInt(pointsTally) > 5 && parseInt(pointsTally) < 8 && (
        <View style={styles.center}>
          <Text style={styles.header}>You finished with a score of:</Text>
          <ProgressTracker score={score} />
          <Text style={styles.finalScoreMedium}>{scoreCalculator(score)}</Text>
        </View>
      )}
      {parseInt(pointsTally) < 5 && (
        <View style={styles.center}>
          <Text style={styles.header}>Oops! You finished with a score of:</Text>
          <ProgressTracker score={score} />
          <Text style={styles.finalScoreBad}>{scoreCalculator(score)}</Text>
        </View>
      )}
      <Text>To keep practicing, press "Reset" in the menu below</Text>
    </View>
  );
};

export default Score;
