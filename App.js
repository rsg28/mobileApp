import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  useEffect(async ()=>{
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
  }, [])
  return <AccountScreen />;
}
