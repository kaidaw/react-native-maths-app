import { View, Text } from "react-native";
import styles from "../styles/styles";

const TenFrameRow = ({ tenFrame, row }) => {
  //I have made this component modular simply to help with the rendering of the ten grid in a two by five pattern.
  //This works very simply by mapping over the data structure I have generated (see '../functions/functions.js': tenFrameConstructor function)
  return (
    <View key={row} style={styles.row}>
      {tenFrame.map((node) => {
        if (row === 0 && node.index > 4) {
          return;
        }
        if (row === 1 && node.index <= 4) {
          return;
        }
        if (node.value) {
          return <Text key={node.index} style={styles.activeCell}></Text>;
        } else {
          return <Text key={node.index} style={styles.inactiveCell}></Text>;
        }
      })}
    </View>
  );
};

export default TenFrameRow;
