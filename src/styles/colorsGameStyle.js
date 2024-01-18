import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorDisplay: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  colorButton: {
    width: 80,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
});
