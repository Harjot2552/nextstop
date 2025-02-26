import { Text, View, StyleSheet,TouchableOpacity, Alert  } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Welcome to My App</Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Button Pressed!")}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      <Link href="/buses/details" style={styles.button1}>
        Go to Details screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  button1:{
    marginTop: 30,
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
