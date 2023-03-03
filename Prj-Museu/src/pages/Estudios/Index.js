import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, Switch, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useFonts } from 'expo-font';
export default function App() {
    const navigation = useNavigation();
   
    return(
        <View style={styles.borda}>
          <ImageBackground source={require('../../../assets/Fundo.jpg')} style={styles.imgD42}>
        <View style={styles.brnArea2}>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>Tipos de Arte</Text>
                 
               </View>
               
            </View>
            
            
            </View>
            
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Disney')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/NoiteEstrelada.jpg')} style={styles.imgD4}>
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
                  </View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pixar')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/Nerfetiti.jpg')} style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}> </View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dreamworks')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/OscarNiemeyer.jpg')}style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}></View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CartoonNetworks')} >
               <View style={styles.btnArea}>
               
               
                 <ImageBackground source={require('../../../assets/BeijoTimesSquare.jpg')}style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}> </View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               
              
      
      </ImageBackground>
            </View>
            
    )
}