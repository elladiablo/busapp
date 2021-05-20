import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[loading, setloading] =useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bus Arrival Time</Text>
      <Text></Text>
      <Text style={styles.arrivalTime}>
        {loading ? "Loading...": "Loaded"}</Text>
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

});
