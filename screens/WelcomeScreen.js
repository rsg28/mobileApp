import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Alert,
  Text,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.loginButton}
        onPress={() => Alert.alert("Logging in", "Welcome")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.registerButton}
        onPress={() => Alert.alert("Logging in", "Welcome")}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#4ecdc4",
    marginBottom:10
  },

  loginButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#fc5c65",
    marginBottom: 10
  },
});

export default WelcomeScreen;
