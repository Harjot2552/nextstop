import { Text, View, StyleSheet  } from 'react-native';


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.buses}>
        <View><Text style={styles.text}>61</Text> <Text >Confedration Terminal</Text></View>
        <View><Text style={styles.text}>05</Text><Text >minutes</Text> </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buses:{
    // flex: 2,
    backgroundColor: '#fff',
    width: '90%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  }
});
