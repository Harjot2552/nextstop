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
            <Text style={styles.text}>{BusNo}</Text>
            <Text style={styles.textSecondary}>in {BusTime} minutes</Text>
          </View>
          <View>
            <Ionicons name={"bus"} color="#000" size={24} />
          </View>
        </View>
        <View style={styles.details}>
          <View>
            <Text style={styles.text}>Go</Text>
            <Text style={styles.textSecondary}>in 6 minutes</Text>
          </View>
          <View>
            <Ionicons name={"walk"} color="#000" size={24} />
          </View>
        </View>
      </View>

      <View style={styles.busStops}>
        <Text style={styles.heading}>Bus Stops</Text>
        <View style={styles.stops}>
        <Text style={styles.stoptext}>&#9758; Stop 1</Text>
        <Text  style={styles.stoptext}>&#9758; Stop 2</Text>
        <Text style={styles.stoptext}>&#9758; Stop 3</Text>
        <Text style={styles.stoptext}>&#9758; Stop 4</Text>
        <Text style={styles.stoptext}>&#9758; Stop 5</Text>
        </View>
      </View>
      <View style={styles.cta}>
        <Text style={styles.ctaHeading}>Contact NextStop</Text>
        <View style={styles.contact}>
          <Text style={styles.headingCta}>Help</Text>
          <Ionicons name={"help-circle"} color="#fff" size={29} />
        </View>
        <View style={styles.help}>
        <Text style={styles.headingCta}>Email Us</Text>
        <Ionicons name={"mail"} color="#fff" size={24} />
        </View>
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
    fontSize: 19,
    lineHeight: 24,
    color: "#555",
    fontWeight: 700,
  },
  textSecondary:{
    color: '#B7B7B7',
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
    borderRadius: 5,
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
    fontSize: 19,
    lineHeight: 24,
    color: "#fff",
    marginBottom: 15,
  },
  cta:{
    backgroundColor: "white",
    width: 'auto',
    justifyContent: 'center',
    margin: 21,
    borderRadius: 7,
  },
  ctaHeading:{
    margin: 15,
    fontSize: 22,
    fontWeight: 600,
    color: 'black',
    marginBottom: 5,

  },
  contact:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 13,
    alignItems: 'center',
    backgroundColor: '#0061FF',
    margin:15,
    marginBottom: 10,
    borderRadius: 5,
  },
  headingCta:{
    fontSize: 20,
    fontWeight: 700,
    color: '#fff'
  },
  help:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 13,
    alignItems: 'center',
    backgroundColor: '#0061FF',
    margin:15,
    marginTop: 4,
    borderRadius: 5,
  }
});

export default IntroductionScreen;
