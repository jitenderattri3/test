/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {ImagePropTypes, StyleSheet, TextInput} from 'react-native';

const InputText = (props) => {
  return (
    <TextInput
      style={styles.input1}
      placeholder={props.placeholder}
      textContentType="password"
      secureTextEntry={props.secure}
      onChangeText={(text) => props.onTextChange(text)}
    />
  );
};

const styles = StyleSheet.create({
  input1: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default InputText;
