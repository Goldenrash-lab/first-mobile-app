import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  View,
  Platform,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import regBG from "./src/images/reg_bg.jpg";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("./src/fonts/Manrope-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBack}
          resizeMode="cover"
          source={regBG}
        >
          <View style={styles.form}>
            <Text>Реєстрація</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
    objectFit: "contain",
  },
  form: {
    // flex: 1,
    alignItems: "center",
    borderColor: "red",
    // justifyContent: "center",
    borderWidth: 5,
    backgroundColor: "#fff",
    marginVertical: "75%",
  },
});
