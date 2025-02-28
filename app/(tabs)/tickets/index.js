import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
            <LinearGradient
                    // Background Linear Gradient
                    colors={['#0061FF', 'transparent']}
                    style={styles.background}
                  />
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
    backgroundColor: "#60EFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
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
