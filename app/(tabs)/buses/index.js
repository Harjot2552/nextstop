import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Buses Nearby</Text>
      <Link  
      href={{pathname: "/buses/details", params: {BusNo: 61}}}
      asChild  
      >
      <Pressable style={styles.buses}>
        <View>
          <Text style={styles.text}>61</Text> <Text style={styles.secondaryText}>Confedration Terminal</Text>
        </View>
        <View>
          <Text style={styles.text}>05</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </Pressable></Link>

      <Link asChild
      href={{pathname: "/buses/details", params: {BusNo: 65}}}
      >
      <Pressable style={styles.buses}>
        <View>
          <Text style={styles.text}>65</Text> <Text style={styles.secondaryText}>City Center</Text>
        </View>
        <View>
          <Text style={styles.text}>00</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </Pressable>
      </Link>

      <Link asChild 
      href={{pathname: "/buses/details", params: {BusNo: 63}}}
      >
      <Pressable style={styles.buses}>
        <View>
          <Text style={styles.text}>63</Text> <Text style={styles.secondaryText}>Hampton Village</Text>
        </View>
        <View>
          <Text style={styles.text}>9</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </Pressable>
      </Link>

      <Link asChild
      href={{pathname: "/buses/details", params: {BusNo: 82}}}
      >
      <Pressable style={styles.buses}>
        <View>
          <Text style={styles.text}>82</Text> <Text style={styles.secondaryText}>Center mall</Text>
        </View>
        <View>
          <Text style={styles.text}>03</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </Pressable>
      </Link>
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
  secondaryText:{
    color: '#B7B7B7',
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
