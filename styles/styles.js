import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menu: { marginBottom: 50 },
  tracker: { flexDirection: "row", height: 5, margin: 20 },
  progressTrackerContainer: {
    width: 250,
    height: 75,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
  },
  blank: { width: 20, height: 20, margin: 1, backgroundColor: "lightgrey" },
  pass: {
    width: 20,
    height: 20,
    margin: 1,
    backgroundColor: "lightgreen",
  },
  fail: { width: 20, height: 20, margin: 1, backgroundColor: "red" },
  menuContainer: { flex: 1, flexDirection: "flex-start" },
  pageContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  score: { borderWidth: 1, flex: 1 },
  title: { fontSize: 30, fontWeight: "bold" },
  center: { alignItems: "center" },
  header: { fontSize: 18, margin: 10 },
  finalScoreGood: { fontSize: 60, color: "green", fontWeight: "bold" },
  finalScoreMedium: { fontSize: 60, color: "black", fontWeight: "bold" },
  finalScoreBad: { fontSize: 60, color: "red", fontWeight: "bold" },
  descriptionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    margin: 15,
  },
  inactiveCell: {
    backgroundColor: "lightgrey",
    margin: 1,
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  activeCell: {
    backgroundColor: "lightgreen",
    margin: 1,
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  col: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  inputContainer: {
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: "green",
  },
  input: {
    backgroundColor: "offwhite",
    border: 1,
    height: 50,
    width: 50,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
  },
  button: { borderWidth: 1, borderRadius: 5, marginBottom: 5 },
  error: {
    color: "red",
  },
  antiError: {
    color: "green",
  },
});

export default styles;
