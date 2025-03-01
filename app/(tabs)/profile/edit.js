import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Edit() {

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#0061FF", "transparent"]}
        style={styles.background}
      />
      <View style={styles.box}>
        <View style={styles.flex}>
            <Image
                    style={styles.image}
                    source={require("../../../assets/images/harjot.jpg")}
                  />
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
    fontSize: 22,
  },
  secondaryText: {
    color: "#B7B7B7",
  },
  box: {
    width: "auto",
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
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
});
