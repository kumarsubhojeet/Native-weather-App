import React from 'react';
import { StyleSheet, Text, View } from "react-native";


export default function WeatherDeatils({Data , atmos , temp}) {
  return (
    <>
    <View style={styles.Weather_Main}>
    <View style={styles.Weather_wrapper}>
    <View style={styles.Weather_heading}>
            <Text style={styles.weather_headng}>Weather Details</Text>
    </View>

    <View style={styles.Weather_details}>
            <Text style={styles.weather_headng_det}>CityName: {Data.city}</Text>
            <Text style={styles.weather_headng_det}>Country: {Data.country}</Text>
            <Text style={styles.weather_headng_det}>Temperature: {temp.temperature}  C</Text>
            <Text style={styles.weather_headng_det}>Condition: {temp.text} </Text>
            <Text style={styles.weather_headng_det}>Humidity: {atmos.humidity} </Text>
            <Text style={styles.weather_headng_det}>visibility: {atmos.visibility} </Text>
    </View>

    </View>
    </View>
    </>
  )
 
}


const styles = StyleSheet.create({
    Weather_Main:{
        textAlign: 'center',
        marginVertical: 40
    },
    weather_headng:{
        fontSize: 18,
        color: '#2f4f4f',
        textAlign: 'center',
    },
    Weather_details:{
        textAlign: 'justify',
        marginVertical: 20
    },
    weather_headng_det:{
        paddingBottom: 15,
        color: '#708090',
        fontSize: 16,
    }
  })