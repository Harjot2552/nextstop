import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Buses Nearby</Text>
      <Link href={{
          pathname: "/buses/details"
        }}>
      <View style={styles.buses}>
        <View>
          <Text style={styles.text}>61</Text> <Text>Confedration Terminal</Text>
        </View>
        <View>
          <Text style={styles.text}>05</Text>
          <Text>minutes</Text>{" "}
        </View>
      </View></Link>
      <View style={styles.buses}>
        <View>
          <Text style={styles.text}>65</Text> <Text>City Center</Text>
        </View>
        <View>
          <Text style={styles.text}>00</Text>
          <Text>minutes</Text>{" "}
        </View>
      </View>
      <View style={styles.buses}>
        <View>
          <Text style={styles.text}>63</Text> <Text>Hampton Village</Text>
        </View>
        <View>
          <Text style={styles.text}>9</Text>
          <Text>minutes</Text>{" "}
        </View>
      </View>
      <View style={styles.buses}>
        <View>
          <Text style={styles.text}>82</Text> <Text>Center mall</Text>
        </View>
        <View>
          <Text style={styles.text}>03</Text>
          <Text>minutes</Text>{" "}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    height: "100%",
  },
  heading:{
    fontSize: 32,
    color: "#fff",
    fontWeight: 800,
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
   
    marginBottom: 20,
  },
  buses: {
    // flex: 2,
    backgroundColor: "#fff",
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
