import { Text, View, StyleSheet, ScrollView } from 'react-native';
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60EFFF',
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  text: {
    color: '#000',
    fontSize: 22,
  },
});
