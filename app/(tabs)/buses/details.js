import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";


const IntroductionScreen = () => {
  const { BusNo } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Bus Number {BusNo}</Text>
      <Text style={styles.text}>
        Hi, I’m Harjot Singh, a passionate web developer and 
         interactive designer currently pursuing an 
         Interactive Design and Technology diploma at SaskPolytech. 
        I specialize in HTML, CSS, JavaScript, React.js, Tailwind CSS, WordPress, and Figma, 
        bringing creative ideas to life through modern, user-friendly web experiences.
      </Text>
      <Text style={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
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
});

export default IntroductionScreen;
