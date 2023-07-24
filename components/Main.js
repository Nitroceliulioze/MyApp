import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from "react-native";
import { gStyle } from "../styles/style";
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
    const [news, setNews] = useState([
      {name: 'Google', anons: 'Google!!!', full: 'Google is cool', key: '1', img: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'},
      {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool', key: '2', img: 'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png'},
      {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool', key: '3', img: 'https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png'},
    ])

    const [modalWindow, setModalWindow] = useState(false)
   
    const addArticle = (article) => {
      setNews((list)=> {
        article.key = Math.random().toString()
        return [
          article,
          ...list
        ]
      });
      setModalWindow(false);
    }
    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
        <Ionicons name="close-circle" size={24} color="red" style={styles.iconClose}  onPress={() => setModalWindow(false)}/>
        <View style={gStyle.main}> 
          <Text style={styles.title}>Form to add news</Text>
          <Form addArticle={addArticle}/>
        </View>
        </Modal>
        <Ionicons name="add-circle-sharp" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
        <Text style={[gStyle.title, styles.header]}>First Page</Text>
       <FlatList data={news} renderItem={({item})=>(
        <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate('FullInfo', item);}}>
          <Image style={styles.image} source={{uri: item.img}}/>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.anons}>{item.anons}</Text>
        </TouchableOpacity>
       )}/>       
      </View>
    );
 
}

const styles = StyleSheet.create({
  iconClose: {
    textAlign: 'right',
    marginTop: 10,
    marginRight: 10
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 10,
  },
  header: {
    marginBottom: 30
  },
  item: { 
    width: '100%',
    marginBottom: 30,

  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  image: {
    width: '100%',
    height: 350,
  }
});
