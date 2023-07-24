import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { gStyle } from "../styles/style";


export default function Main({ navigation }) {
    const [news, setNews] = useState([
      {name: 'Google', anons: 'Google!!!', full: 'Google is cool', key: '1'},
      {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool', key: '2'},
      {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool', key: '3'},
    ])
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>First Page</Text>
       <FlatList data={news} renderItem={({item})=>(
        <TouchableOpacity onPress={()=>{navigation.navigate('FullInfo', item);}}>
          <Text>{item.name}</Text>
          <Text>{item.anons}</Text>
        </TouchableOpacity>
       )}/>

       
      </View>
    );
 
}

const styles = StyleSheet.create({});
