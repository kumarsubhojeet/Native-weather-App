import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import axios from "axios";
import Weatheret from '../Compo/WeatherDeatils'


export default function Home() {
  const [search, setsearch] = useState("");
  const [Data , setData] = useState([])
  const [temp, settemp] = useState([]);
  const [atmos , setatmos] = useState([]);

  const options = {
    method: "GET",
    url: "https://yahoo-weather5.p.rapidapi.com/weather",
    params: { location: `${search}`, format: "json", u: "c" },
    headers: {
      "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      "x-rapidapi-key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
    },
  };

  const WeatherAPI = async () => {
    if(!search){
        alert("Please Enter City Name")
    }
    else{
        try {
            const res = await axios.request(options);
            setData(res.data.location);
            settemp(res.data.current_observation.condition);
            setatmos(res.data.current_observation.atmosphere);
          } catch (error) {
            console.log(error);
          }
    }
  };



  return (
    <>
      <View style={styles.Home_Main}>
        <View style={styles.Home_wrapper}>
          <View style={styles.Home_heading}>
            <Text style={styles.weather_headng}>Weather App.</Text>
          </View>

          <View style={styles.Home_Input_main}>
            <TextInput
              style={styles.input}
              onChangeText={setsearch}
              value={search}
              placeholder="Enter City Name..."
            />

            <Button
            style={styles.Home_btn}
              onPress={WeatherAPI}
              title="Search"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />

            <Weatheret Data={Data} temp={temp} atmos={atmos} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  weather_headng: {
    color: "green",
    fontSize: 22,
    textAlign: "center",
    marginTop: 65,
    marginBottom: 15,
  },
  Home_wrapper :{
      width: "80%",
      display: "flex",
      justifyContent: "center",
      marginHorizontal: 40
      
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Home_btn:{
    marginVertical: 20
  }
});
