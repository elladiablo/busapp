
import React, {useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const[loading, setloading] =useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bus Arrival Time:</Text>
      <Text></Text>
      <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator size ="large"/>:"Loaded"}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style ={styles.buttonText}>Refresh!</Text>
      </TouchableOpacity>
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

  button: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    marginTop:20
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize:30
  },

  arrivalTime: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize:30
  }


});
