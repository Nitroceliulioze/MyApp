import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={gStyle.main}>
      <Image style={styles.image} source={{ uri: route.params.img }}/>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
      {/* <Button title="Open page" onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: 'mt-light',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151'
  },
  image: {
    width: '100%',
    height: 350,
  }
});
