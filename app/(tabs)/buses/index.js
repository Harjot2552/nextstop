import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View style={styles.container}>
       <LinearGradient
              // Background Linear Gradient
              colors={['#0061FF', 'transparent']}
              style={styles.background}
            />
      <Text style={styles.heading}>Buses Nearby</Text>
      <Link  
      href={{pathname: "/buses/details", params: {BusNo: 61, BusTime: 5}}}
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
          <Text style={styles.text}>09</Text>
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
    backgroundColor: "#60EFFF",
    height: "100%",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
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
