import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoal() {
    props.onDeleteItem(props.id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoal}
        style={({ pressed }) => pressed && styles.passedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  passedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
