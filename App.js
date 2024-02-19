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
{
  /* <Image
  source={linkForMyImg}
  style={{ width: 150, height: 150, objectFit: "contain" }}
/> */
}
const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("./src/fonts/Manrope-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const linkForMyImg = {
    uri: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  console.log(COURSES);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.test}>Hello World!</Text>
        <StatusBar style="auto" />
        <Switch />
        <Text style={styles.textBottom}>
          This app running on {Platform.OS.toUpperCase()}
        </Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={COURSES}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  containerScroll: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  test: {
    marginBottom: 20,
    fontFamily: "Manrope-Bold",
    fontSize: 30,
  },
  textBottom: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  },
});
