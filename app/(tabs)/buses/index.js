import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from "@expo/vector-icons/Ionicons";

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
      <TouchableOpacity style={styles.buses}>
        <View>
          <Text style={styles.text}>61</Text> <Text style={styles.secondaryText}>Confedration Terminal</Text>
        </View>
        <View>
          <Text style={styles.text}>05</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </TouchableOpacity></Link>

      <Link asChild
      href={{pathname: "/buses/details", params: {BusNo: 65, BusTime: 0}}}
      >
      <TouchableOpacity style={styles.buses}>
        <View>
          <Text style={styles.text}>65</Text> <Text style={styles.secondaryText}>City Center</Text>
        </View>
        <View>
          <Text style={styles.text}>00</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </TouchableOpacity>
      </Link>

      <Link asChild 
      href={{pathname: "/buses/details", params: {BusNo: 63, BusTime: 9}}}
      >
      <TouchableOpacity style={styles.buses}>
        <View>
          <Text style={styles.text}>63</Text> <Text style={styles.secondaryText}>Hampton Village</Text>
        </View>
        <View>
          <Text style={styles.text}>09</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </TouchableOpacity>
      </Link>

      <Link asChild
      href={{pathname: "/buses/details", params: {BusNo: 82, BusTime: 3}}}
      >
      <TouchableOpacity style={styles.buses}>
        <View>
          <Text style={styles.text}>82</Text> <Text style={styles.secondaryText}>Center mall</Text>
        </View>
        <View>
          <Text style={styles.text}>03</Text>
          <Text style={styles.secondaryText}>minutes</Text>{" "}
        </View>
      </TouchableOpacity>
      </Link>
      <Link asChild href={{
        pathname: '/tickets'
      }}> 
      <TouchableOpacity >
        <View style={[styles.flex, styles.cta]}>
        <Text style={[ {margin: 0, fontSize: 23, color: '#fff', fontWeight: 600}]}>Buy Tickets</Text>
        <Ionicons name={"folder-open"} color="#fff" size={24} />
        </View>
      </TouchableOpacity>
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
  flex:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  space:{
    marginTop: 4,
    marginBottom: 4,
  },
  cta:{
    backgroundColor: '#0061FF',
    padding: 15,
    width: '95%',
    borderRadius: 5,
    marginTop: 10,

  },
});
