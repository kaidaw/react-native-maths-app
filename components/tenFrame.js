import { View } from "react-native";
import styles from "../styles/styles";
import TenFrameRow from "./tenFrameRow";

const TenFrame = ({ tenFrame, correctAnswer }) => {
  //This is a visual representation of the number the user is asking to ascertain and input. It is a two by five grid
  //and uses green to denote active cells and grey to denote inactive cells. See TenFrameRow component for how this works.
  return (
    <View>
      <View style={styles.col}>
        <TenFrameRow
          tenFrame={tenFrame}
          correctAnswer={correctAnswer}
          row={0}
        />
        <TenFrameRow
          tenFrame={tenFrame}
          correctAnswer={correctAnswer}
          row={1}
        />
      </View>
    </View>
  );
};

export default TenFrame;
