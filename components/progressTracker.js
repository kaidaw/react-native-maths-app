import { View, Text } from "react-native";
import styles from "../styles/styles";

const ProgressTracker = ({ score }) => {
  //This component tracks the score through ten rounds and gives a visual indicator of:
  //1: how many rounds have passed and 2: which rounds have passed or failed
  //In future updates this could be refactored to handle a variable number of rounds
  return (
    <View style={styles.progressTrackerContainer}>
      <Text>Progress Tracker</Text>
      <View style={styles.tracker}>
        {score.map((point, i) => {
          if (parseInt(point) === 0) {
            return <View key={i} style={styles.blank}></View>;
          }
          if (parseInt(point) === 1) {
            return <View key={i} style={styles.pass}></View>;
          }
          if (parseInt(point) === 2) {
            return <View key={i} style={styles.fail}></View>;
          }
        })}
      </View>
    </View>
  );
};

export default ProgressTracker;
