import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight ,ImageBackground, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Splash from '../../assets/bgGradient.png'
import Logo from '../../assets/icon_alpha.png'

export default function Login() {
  const navigation = useNavigation();

  function handleRedirect() {
    navigation.navigate('Home');
  }

  return (
    <ImageBackground  source={Splash} style={styles.container}>
      <View style={styles.logoView}>
          <Image source={Logo} />
      </View>
      <View style={styles.optionLogin}>
          <TouchableHighlight style={styles.btnFacebook} onPress={handleRedirect}>
              <Text style={styles.txtDefault} >Facebook</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnGoogle} onPress={handleRedirect}>
              <Text style={styles.txtDefault} >Google</Text>
          </TouchableHighlight>
          <Text style={styles.txtOu} >Ou</Text>
          <TouchableHighlight style={styles.btnEmail} onPress={handleRedirect}>
              <Text style={styles.txtDefault} >Email</Text>
          </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView:{
    flex:4,
    justifyContent:"center",
    alignItems:"center"
  },
  optionLogin:{
    flex:6,
    alignItems:"center",
    paddingTop: 40
  },
  btnFacebook:{
    width: 300,
    height: 40,
    borderRadius:20,
    backgroundColor:"#0A0AA4",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  btnGoogle:{
    width: 300,
    height: 40,
    borderRadius:20,
    backgroundColor:"#E82424",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  btnEmail:{
    width: 300,
    height: 40,
    borderRadius:20,
    backgroundColor:"#998F87",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  txtDefault:{
    fontSize: 20,
    fontWeight: "bold",
    color:"white"
  },
  txtOu:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color:"white"
  }
});

