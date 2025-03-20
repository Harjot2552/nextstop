# 🚍 NextStop - A Public Transit App

NextStop is a mobile application built with **React Native**, **React**, **Expo**, and **Expo Router**. Inspired by the Transit app, it provides users with essential public transportation features, including bus schedules, ticket management, and profile customization.

---

## ✨ Features

### 🚌 Buses Tab
- View available buses in your area.
- Tap on a bus to see its **arrival time** and **route details**.

### 🎫 Tickets Tab
- Displays **active tickets** for easy access.
- Browse and purchase new tickets directly from the app.

### 👤 Profile Tab
- Edit personal details like **name, email, and profile picture**.
- Access app settings and **view privacy policies** through a modal.

---

## 🛠 Technologies Used

This app is built using modern web and mobile technologies:

- ⚛ **React** - Frontend framework
- 📱 **React Native** - Mobile app development
- 🚀 **Expo** - Simplified development & deployment
- 🏗 **Expo Router** - Seamless navigation

---

## 📝 Modal Implementation Example

A **modal** is used in the Profile tab to display the privacy policy. Below is an example of how it was implemented:

```jsx
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function PrivacyPolicyModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.heading}>Privacy & Policies</Text>
          </View>
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
              {"\n\n"}3. **Data Protection**{"\n"}
              We prioritize the security of your data and implement necessary
              measures to protect it.
              {"\n\n"}4. **Cookies & Tracking**{"\n"}
              Our app uses cookies and tracking technologies to personalize your
              experience.
              {"\n\n"}For more information, feel free to contact us!
            </Text>
            <Text style={styles.logo}>NextStop</Text>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
```

---

## 🚀 Installation & Setup

Follow these steps to set up the project locally:

1️⃣ **Clone the repository:**
```sh
git clone https://github.com/Harjot2552/NextStop.git
```

2️⃣ **Navigate to the project directory:**
```sh
cd NextStop
```

3️⃣ **Install dependencies:**
```sh
npm install
```

4️⃣ **Start the development server:**
```sh
expo start
```

---

## 🔮 Future Improvements

🔹 Implement all **20 screens** from the original design prototype.  
🔹 Add **real-time bus tracking** for better user experience.  
🔹 Improve UI/UX based on user feedback.  
🔹 Add **multi-language support** for global accessibility.  

---

