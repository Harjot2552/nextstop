import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Button,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0061FF", "transparent"]}
        style={styles.background}
      />
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/harjot.jpg")}
        />
        <Text style={[styles.heading, styles.space, { textAlign: "center" }]}>
          Harjot Singh
        </Text>
        <Text
          style={[styles.secondaryText, styles.space, { textAlign: "center" }]}
        >
          @Harjot2552
        </Text>
        <View style={[styles.btnGroup, styles.space]}>
          <Link href={{
            pathname: 'profile/edit',
          }} asChild>
            <TouchableOpacity >
              <View style={[styles.button, styles.space, styles.flex]}>
              <Text style={styles.text}>Edit Profile</Text>
              <Ionicons name={"pencil"} color="#fff" size={24} />
              </View>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity onPress={() => Alert.alert("Under development!")}  style={[styles.button, styles.space, styles.flex]}>
            <Text style={styles.text}>Payment Settings</Text>
            <Ionicons name={"card"} color="#fff" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Under development!")} style={[styles.button, styles.space, styles.flex]}>
            <Text style={styles.text}>App Settings</Text>
            <Ionicons name={"settings"} color="#fff" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Under development!")} style={[styles.button, styles.space, styles.flex]}>
            <Text style={styles.text}>Customer Support</Text>
            <Ionicons name={"call"} color="#fff" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Under development!")} style={[styles.button, styles.space, styles.flex]}>
            <Text style={styles.text}>Insights</Text>
            <Ionicons name={"information-sharp"} color="#fff" size={24} />
          </TouchableOpacity>
        </View>
        <Text style={styles.logo}>NextStop</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#60EFFF",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  secondaryText: {
    color: "#B7B7B7",
  },
  box: {
    width: "auto",
    margin: 10,
    padding: 15,
    paddingTop: 35,
    backgroundColor: "white",
    borderRadius: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 0,
    borderRadius: 100,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  heading: {
    fontSize: 22,
    fontWeight: 700,
    color: "#000",
  },
  space: {
    marginTop: 6,
    marginBottom: 6,
  },
  hr: {
    width: "90%",
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0061FF",
    padding: 12,
    borderRadius: 5,
  },
  logo:{
    fontSize: 35,
    color: '#B7B7B7',
    fontWeight: 700,
    textAlign: 'center',
    margin: 20,
    letterSpacing: 3,
    opacity: 0.6,

  }
});
