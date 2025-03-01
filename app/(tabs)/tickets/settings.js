import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SettingsScreen() {
  const { pass } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#0061FF", "transparent"]}
        style={styles.background}
      />
      <View style={styles.box}>
        <Text style={[styles.heading, styles.space]}>Valid Until</Text>
        <Text style={[styles.secondaryText, styles.space]}>
          Jan 2, 2025 at 11:59 PM
        </Text>
        <Text style={[styles.timeLeft, styles.space]}>15 hours left</Text>
        <View style={[styles.hr]}></View>
        <View style={[styles.flex, styles.space]}>
          <Text style={styles.heading}>Pass</Text>
          <Text style={styles.heading}>$4.99</Text>
        </View>
        <Text style={[styles.secondaryText, styles.space]}>
      Day Pass
        </Text>
        <View style={[styles.hr]}></View>
        <Text style={[styles.heading, styles.space]}>Purchase</Text>
        <Text style={[styles.secondaryText, styles.space]}>
        Dec 4, 2024 at 4:09 PM
        </Text>
        <View style={[styles.hr]}></View>
      </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60EFFF",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  text: {
    color: "#000",
    fontSize: 22,
  },
  secondaryText: {
    color: "#B7B7B7",
  },
  box: {
    width: "auto",
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: 700,
    color: "#000",
  },
  space: {
    marginTop: 6,
    marginBottom: 6,
  },
  hr: {
    width: "90%",
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeLeft: {
    backgroundColor: "#0061FF",
    width: "30%",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
});
