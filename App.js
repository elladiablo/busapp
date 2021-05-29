
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const[loading, setloading] =useState(true);
  const[arrival,setArrival] =useState("");
  const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=83139";

  function loadBusStopData () {
    setloading(true);

    fetch (BUSSTOP_URL)
    .then ((response) => {
      //console.log(response.json)
      return response.json();
    })
    .then ((responseData)=> {
      //console.log("Original Data:");
        const myBus = responseData.services.filter(
        (item)=> item.no === "155"
        
      )[0];

      setArrival(myBus.next.time)
      setloading(false)
    
      });

  }

  useEffect(()=> {
    const interval =setInterval(loadBusStopData,2000);

    //Return the function to run when unmounting
    return ()=> clearInterval(interval);

  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bus Arrival Time:</Text>
      <Text></Text>
            <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator size ="large"/>:arrival}</Text>
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
