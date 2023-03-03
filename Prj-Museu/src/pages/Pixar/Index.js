import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useFonts } from 'expo-font';
export default function App() {
   function navegar(indiceAnimal){
      navigation.navigate("AnimaçãoPixar", {indice:indiceAnimal})
   }
   function navegarInfo(indiceInfo){
      navigation.navigate("Config", {indice:indiceInfo})
   }
    const navigation = useNavigation();
    const [loaded] = useFonts({
      Walter: require('../../../assets/fonts/Disney family 1.ttf'),
      
    });
    
    
    return(
    <View style={styles.borda}>
      <ImageBackground source={require('../../../assets/Fundo.jpg')} style={styles.imgD42}>
        <View style={styles.brnArea2}>
            <TouchableOpacity onPress={() => navigation.navigate('Estudios')}><View style={styles.btnArea}><Image source={require('../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>Escultura</Text>
                 
               </View>
               
            </View>
            
            <TouchableOpacity onPress={() => navegarInfo(1)}> <View style={styles.btnArea}><Image source={require('../../../assets/8687336_ic_fluent_line_horizontal_3_icon.png')} style={styles.imgD2}></Image></View></TouchableOpacity>
            </View>
            
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navegar(0)} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/Venus.jpg')} style={styles.imgD4}></Image>
             
                 
               </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.botao} onPress={() => navegar(1)} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/Nerfetiti.jpg')} style={styles.imgD4}></Image>
              
                 
               </View>
               </TouchableOpacity>
               </View>
               <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navegar(2)} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/Pesador.jpg')} style={styles.imgD4}></Image>
               
                 
               </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.botao} onPress={() => navegar(3)} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/pietaMichelangelo.jpg')} style={styles.imgD4}></Image>
               
                 
               </View>
               </TouchableOpacity>
               </View>
               <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navegar(4)}>
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/David.jpg')} style={styles.imgD4}></Image>
               
                           
                 
               </View>
               </TouchableOpacity>
               </View>
               </ImageBackground>
            </View>
            )}