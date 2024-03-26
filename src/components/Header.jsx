import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header = ({ setTime, currentTime, setCurrentTime }) => {
  const handlePress = (i) => {
    const newTime = i === 0 ? 25 : i === 1 ? 5 : 15;

    setCurrentTime(i);
    setTime(newTime * 60);
  };

  return (
    <View style={styles.container}>
      {options.map((option, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => handlePress(i)}
          style={[styles.itemStyle, 
                currentTime !== i && {borderColor: "transparent"}]}
        >
          <Text style={{fontWeight: "bold"}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  itemStyle: {
    width: "33.3%",
    borderWidth: 3,
    padding: 10,
    borderColor: "#FFF",
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center"
  },
});

export default Header;
