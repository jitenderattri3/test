/* eslint-disable prettier/prettier */
import Axios from 'axios';
import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import InputText from './welcome';
const LoginScreen = () => {
  const [state, setState] = useState({username: '', password: ''});

  const onButtonClick = async () => {
    try {
      const resp = await Axios.post('http://192.168.0.105:3000/users', state);
      console.log(resp.data);
      // console.log(state);
      // const res = await fetch('http://192.168.0.105:3000/users', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(state),
      // });

      // if (res.status === 200) {
      //   console.log('login successfully');
      // } else {
      //   console.log('login failed');
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <InputText
        onTextChange={(text) =>
          setState({username: text, password: state.password})
        }
        secure={false}
        placeholder="username"
      />
      <InputText
        onTextChange={(pass) =>
          setState({username: state.username, password: pass})
        }
        textContentType="password"
        placeholder="password"
        secure={true}
      />
      <Button title="Login" onPress={onButtonClick} />
      <Text style={{marginTop: 10}}>Forget password ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
});

export default LoginScreen;
