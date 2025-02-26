import { Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from "expo-router";


export default function SettingsScreen() {

  const { pass } = useLocalSearchParams();


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings screen</Text>
      <Text style={styles.text}>Do you know how to pass parameter: { pass==true ? "Yes" : "No"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 22,
  },
});
