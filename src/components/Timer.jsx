import { StyleSheet, Text, View } from "react-native";

const Timer = ({ time }) => {
  const formateTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formateTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 0.2,
    padding: 0.3,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});

export default Timer;
