import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.header}>Edit Pofile</Text>
      </View>
      <View style={styles.profileImage}>
        <Image
          style={styles.image}
          source={require("../../assets/image.png")}
        ></Image>
        <View style={styles.cameraBox}>
          <Ionicons name="camera-outline" size={24} color="white" />
        </View>
      </View>
      <Ionicons
        name="arrow-back"
        style={styles.iconBack}
        size={34}
        color="black"
      />
      <View style={styles.mainBox}>
        <View style={styles.textBox}>
          <Text style={styles.primaryText}>School</Text>
          <Text style={styles.secondaryText}>The Lawrenceville School</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.primaryText}>Email Address</Text>
          <Text style={styles.secondaryText}>danielrozar@gmail.com</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textBlue}>Name</Text>
          <Text style={styles.secondaryText}>Daniel Rozar</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textBlue}>Nick Name</Text>
          <Text style={styles.secondaryText}>R.Denial</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textBlue}>Emergency Contact</Text>
          <Text style={styles.secondaryText}>+1-98765421</Text>
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30,
    // backgroundColor: "red",
  },

  headerBox: {
    flex: 0.05,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
  },

  profileImage: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },

  mainBox: {
    flex: 0.6,
  },

  cameraBox: {
    height: 40,
    width: 40,
    position: "absolute",
    bottom: 40,
    right: 130,
    borderRadius: 100,
    backgroundColor: "#4361ee",
    alignItems: "center",
    justifyContent: "center",
  },

  textBox: {
    marginVertical: 30,
  },

  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#4361ee",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  iconBack: {
    position: "absolute",
    top: 20,
    left: 0,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },

  primaryText: {
    fontSize: 12,
    color: "#8d99ae",
  },

  secondaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  textBlue: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#023e8a",
  },

  line: {
    height: 2,
    width: "100%",
    backgroundColor: "#e5e5e5",
    marginTop: 5,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  buttonBox: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
