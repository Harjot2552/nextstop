import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';

const IntroductionScreen = () => {
  const { BusNo, BusTime } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#0061FF', 'transparent']}
        style={styles.background}
      />
      <View>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/images/saskatoon.jpg")}
        />
      </View>
      <View style={styles.busNumber}>
        <View style={styles.details}>
          <View>
            <Text>{BusNo}</Text>
            <Text>in {BusTime} minutes</Text>
          </View>
          <View>
            <Ionicons name={"folder-open"} color="#000" size={24} />
          </View>
        </View>
        <View style={styles.details}>
          <View>
            <Text>Go</Text>
            <Text>in 6 minutes</Text>
          </View>
          <View>
            <Ionicons name={"folder-open"} color="#000" size={24} />
          </View>
        </View>
      </View>

      <View style={styles.busStops}>
        <Text style={styles.heading}>Bus Stops</Text>
        <View style={styles.stops}>
        <Text style={styles.stoptext}>Stop 1</Text>
        <Text  style={styles.stoptext}>Stop 1</Text>
        <Text style={styles.stoptext}>Stop 1</Text>
        <Text style={styles.stoptext}>Stop 1</Text>
        <Text style={styles.stoptext}>Stop 1</Text>
        </View>
      </View>
      <View style={styles.cta}>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 20,
    backgroundColor: "#60EFFF",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
    color: "#007bff",
  },
  footer: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 20,
  },
  tinyLogo: {
    width: "100%",
    height: 300,
  },
  busNumber: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "40%",
    height: 70,
    padding: 12,
  },
  busStops:{
    marginTop: 15,
    marginLeft: 21,
  },
  heading:{
    fontSize: 25,
    fontWeight: 700,
    color: '#fff'
  },
  stops:{
    marginTop: 14,
  },
  stoptext:{
    fontSize: 17,
    lineHeight: 24,
    color: "#fff",
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});

export default IntroductionScreen;
