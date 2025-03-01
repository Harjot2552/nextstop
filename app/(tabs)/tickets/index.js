import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  ToastAndroid,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AboutScreen() {
  const purchase = () => {
    ToastAndroid.showWithGravity(
      "Not Available",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#0061FF", "transparent"]}
        style={styles.background}
      />
      <View style={styles.box}>
        <Text style={styles.heading}>Your Passes</Text>
        <Link asChild href={{
          pathname: "/tickets/settings",
          params: {price: 4.99, pass: 'Adult Daily Pass', expire: '15 hours 40 minutes'},
        }}>
        <Pressable style={styles.yourPass}>
          <View style={styles.flex}>
            <Text
              style={[
                styles.heading,
                styles.space,
                { color: "#000", fontSize: 20 },
              ]}
            >
              Daily Pass
            </Text>
            <Ionicons name={"folder-open"} color="#000" size={24} />
          </View>
          <Text style={[styles.text, styles.space]}>Adult Day Pass</Text>
          <Text style={styles.hr}></Text>
          <Text style={[styles.text, styles.space]}>
            Expires in{" "}
            <Text style={styles.warning}>15 hours in 40 minutes</Text>{" "}
          </Text>
        </Pressable>
        </Link>
      </View>

      <View style={styles.box}>
        <Text style={styles.heading}>Bus Passes</Text>
        <View style={styles.yourPass}>
          <View style={styles.flex}>
            <Text
              style={[
                styles.heading,
                styles.space,
                { color: "#000", fontSize: 20 },
              ]}
            >
              Day Pass
            </Text>
            <Text
              style={[
                styles.heading,
                styles.space,
                { color: "#000", fontSize: 22 },
              ]}
            >
              $4.99
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              styles.space,
              { width: "70%", lineHeight: 20, color: "#B7B7B7" },
            ]}
          >
            It will be valid for 24-hours from the time you will activate it.
          </Text>

          <Text style={styles.hr}></Text>
          <Button color="#000" onPress={() => purchase()} title="Purchase" />
        </View>

        {/* ======================================================== */}
        <View style={styles.yourPass}>
          <View style={styles.flex}>
            <Text
              style={[
                styles.heading,
                styles.space,
                { color: "#000", fontSize: 20 },
              ]}
            >
              Weekly Pass
            </Text>
            <Text
              style={[
                styles.heading,
                styles.space,
                { color: "#000", fontSize: 22 },
              ]}
            >
              $24.99
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              styles.space,
              { width: "70%", lineHeight: 20, color: "#B7B7B7" },
            ]}
          >
          It will be valid for 24-hours from the time you will activate it.
          </Text>

          <Text style={styles.hr}></Text>
          <Button color="#000" onPress={() => purchase()} title="Purchase" />
        </View>

        {/* ============================================================ */}
        <View style={styles.yourPass}>
          <View style={styles.flex}>
            <Text
              style={[
                styles.heading,
                styles.space,
                { color: "#000", fontSize: 20 },
              ]}
            >
              Monthly Pass
            </Text>
            <Text
              style={[
                styles.heading,
                styles.space,
                { color: "#000", fontSize: 22 },
              ]}
            >
              $89.99
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              styles.space,
              { width: "70%", lineHeight: 20, color: "#B7B7B7" },
            ]}
          >
         It will be valid for 24-hours from the time you will activate it.
          </Text>

          <Text style={styles.hr}></Text>
          <Button color="#000" onPress={() => purchase()} title="Purchase" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60EFFF",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  text: {
    color: "#000",
  },
  heading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#fff",
  },
  box: {
    margin: 15,
    marginTop: 25,
  },
  space: {
    marginTop: 4,
    marginBottom: 4,
  },
  hr: {
    width: "90%", // Full width
    height: 1, // Thin line
    backgroundColor: "gray",
    marginVertical: 10, // Space above and below
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  warning: {
    color: "red",
  },
  yourPass: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "black",
  },
});
