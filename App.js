import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function App() {

  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true); {/**passando o ! de negaçao lá no onPress ele pega o estado hidePass q estava true e passa pra falso */}


  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#FFFFFF"
          value={input}
          onChangeText={(texto) => setInput(texto)}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}> 
        {hidePass 
          ?
          <Ionicons name="eye" color="#FFFFFF" size={25} />
          :
          <Ionicons name="eye-off" color="#FFFFFF" size={25} />
      }
          
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#121212',
    borderRadius: 5,
    height: 50,
    alignItems: 'center'
  },
  input: {
    width: '85%',
    height: 50,
    color: '#FFFFFF',
    padding: 8,
    fontSize: 18
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
