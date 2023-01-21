import { View, TextInput } from "react-native";
import styles from "../styles/styles";

const KeyboardInput = ({ setAnswer, answer }) => {
  //This component simply handles the keyboard input for the user to input their answer.
  //I considered the idea of hardcoding ten buttons numbered through 1-10 but it seemed
  //more elegant to use the provided numeric keypad option. This meant that there was the possibility
  //for the user to input erroneous data, but this was easy to handle with error messages.
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setAnswer}
        value={answer && answer}
        placeholder="Answer:"
        keyboardType="numeric"
      ></TextInput>
    </View>
  );
};

export default KeyboardInput;
