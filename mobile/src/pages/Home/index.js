import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import bomba from '../../assets/bomba.png';
import parada from '../../assets/parada.png';
import navigate from '../../assets/navigate.png';
import truck from '../../assets/truck.png';
import emergency from '../../assets/emergency.png';

export default function Home() {
  const navigation = useNavigation();

  function handleRedirect() {
    navigation.navigate('Navigation');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo}/>
      </View>
      <View style={styles.content}>
        <View style={styles.blockContent}>
          <TouchableOpacity activeOpacity={0.6} style={styles.boxIxon} onPress={handleRedirect}>
            <Image source={bomba}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.boxIxon} onPress={handleRedirect}>
            <Image source={parada}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.boxIxon} onPress={handleRedirect}>
            <Image source={navigate}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.boxIxon} onPress={handleRedirect}>
            <Image source={truck}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.bottonEmergency}>
          <Image source={emergency}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020024",
  },
  logo: {
    width: 120,
    height: 60,
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#020024",
    alignItems: "center",
    justifyContent: "center",
  },
  blockContent: {
    backgroundColor: "#f5f5f5",
    width: 350,
    height: 350,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20
  },
  boxIxon: {
    width: 125,
    height: 125,
    backgroundColor: "#020024",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60
  },
  bottonEmergency: {
    width: 290,
    height:80,
    backgroundColor: "#FD3030",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  }
});
