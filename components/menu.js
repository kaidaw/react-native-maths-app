import { View, Button, Alert } from "react-native";
import styles from "../styles/styles";
import { tenFrameConstructor, tenFrameSorter } from "../functions/functions";

const Menu = ({ tenFrame, setTenFrame, setTestNumber, setScore, setPause }) => {
  //I decided to show the menu component all the time, although it is on the bottom so it can be covered by the
  //numerical keyboard when the user is inputting their answers. This is a deliberate design choice
  //as I feel like the user would only need to do one or the other; tapping anywhere else on the screen
  //closes the numerical keyboard. I have not included an instruction to this effect as I feel it is intuitive.
  //The menu items I considered important are:
  //Instructions (which takes you to the instructions page from anywhere in the game in case you are unsure what to do)
  //Sort: this is an option which makes the ten frame easier to read if a user wants a bit of help
  //Reset: this option resets the game.
  return (
    <View style={styles.menu}>
      <View style={styles.button}>
        <Button
          onPress={() => {
            setPause(true);
          }}
          title="Instructions"
        ></Button>
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            setTenFrame(tenFrameSorter(tenFrame));
          }}
          title="Sort"
        ></Button>
      </View>
      <View style={styles.button}>
        <Button
          title={"Reset"}
          onPress={() => {
            Alert.alert(
              "Whaaaaaat?",
              "Are you sure you want to reset your progress?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => {
                    setTestNumber(0),
                      setScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                      setTenFrame(tenFrameConstructor);
                  },
                },
              ]
            );
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Menu;
