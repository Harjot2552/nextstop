import { Text, View, StyleSheet,TouchableOpacity, Alert  } from 'react-native';
 import { Link } from 'expo-router'; 
 import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View style={styles.container}>
          <LinearGradient
              // Background Linear Gradient
              colors={['#0061FF', 'transparent']}
              style={styles.background}
            />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#60EFFF",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
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
