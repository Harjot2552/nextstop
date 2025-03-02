import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PrivacyPolicyModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header with Gradient */}
          <LinearGradient colors={["#60EFFF", "#1E90FF"]} style={styles.header}>
            <Text style={styles.heading}>Privacy & Policies</Text>
          </LinearGradient>

          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.text}>
              Welcome to our Privacy Policy section. Here you will find all the
              details regarding how we collect, use, and protect your
              information. 
              
              {"\n\n"}1. **Data Collection** {"\n"}
              We collect information to provide better services to all our
              users. This includes details such as name, email, and usage data.

              {"\n\n"}2. **Use of Data** {"\n"}
              The data collected is used to improve our services and enhance
              user experience.

              {"\n\n"}3. **Data Protection** {"\n"}
              We prioritize the security of your data and implement necessary
              measures to protect it.

              {"\n\n"}4. **Cookies & Tracking** {"\n"}
              Our app uses cookies and tracking technologies to personalize your
              experience.

              {"\n\n"}For more information, feel free to contact us!
            </Text>
          </ScrollView>

          {/* Close Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
  },
  modalContent: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  scrollView: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
