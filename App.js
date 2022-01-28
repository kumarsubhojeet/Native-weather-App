import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";


import Home from "./Compo/Home";

export default function App() {
  return (
    <>
      <View style={styles.main}>
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
