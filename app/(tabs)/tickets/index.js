import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
      <Link
        href={{
          pathname: "/tickets/settings",
          params: { pass: false },
        }}
        style={styles.button}
      >
        Go to Settings screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#000",
  },
});
