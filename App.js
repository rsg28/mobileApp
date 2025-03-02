// import {
//   Dimensions,
//   StyleSheet,
//   StatusBar,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   Touchable,
//   TouchableHighlight,
//   Button,
//   Alert,
//   Platform,
// } from "react-native";

import { View } from "react-native";

// // View -> UIView
// export default function App() {
//   console.log("Program ready...");
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello World</Text>
//       <TouchableHighlight onPress={() => console.log("Image Tapped")}>
//         <Image
//           blurRadius={2}
//           source={{
//             width: 200,
//             height: 300,
//             uri: "https://picsum.photos/200/300",
//           }}
//         />
//       </TouchableHighlight>
//       <Button
//         color="orange"
//         title="Click Me"
//         onPress={() =>
//           Alert.alert("My Title", "My Message", [
//             { text: "Yes", onPress: () => console.log("Yes") },
//             { text: "No", onPress: () => console.log("No") },
//           ])
//         }
//       />
//       <View
//         style={{ backgroundColor: "dodgerblue", width: "50%", height: 70, }}
//       ></View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });

export default function App() {
  return (
    <View
      style={{
        background: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", // Esto es en el primary axis (horizontal en row y vertical column)
        alignItems: "center", // Secondary axis (opuesto a justifyContent)
        flexWrap: "wrap",
        alignContent: "center", // While align items only centers vertically within a group, this does that for the whole page
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // alignSelf: "flex-start",
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
    </View>
  );
}
