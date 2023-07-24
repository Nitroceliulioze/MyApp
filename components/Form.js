import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { gStyle } from "../styles/style";
import { Formik } from "formik";

export default function Form( { addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
            addArticle(values);
            action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
            style={styles.input}
              value={props.values.name}
              placeholder="Enter the Title"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
            style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Enter the subtext"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
            style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Enter the article"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
            style={styles.input}
              value={props.values.img}
              placeholder="Enter the Image url"
              onChangeText={props.handleChange("img")}
            />
            <Button title='Add New Article' onPress={props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5,
    }
});
