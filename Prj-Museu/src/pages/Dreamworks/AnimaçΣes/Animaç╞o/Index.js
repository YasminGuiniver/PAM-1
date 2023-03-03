import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useRoute } from '@react-navigation/native';

export default function App() {
  const route = useRoute();
  const [filme, setFilme] = useState([
   {
      nome: 'Museu Guggenheim',
      imagem: <Image source={require('../../../../../assets/MuseuGuggenheim.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'A rede Guggenheim começou nos anos 70 quando o Solomon O Museu R Guggenheim, em Nova Iorque, juntou-se à Coleção Peggy Guggenheim, em Veneza, e expandiu-se para incluir o Museu Guggenheim de Bilbao (inaugurado em 1997) e o Guggenheim Abu Dhabi em desenvolvimento.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Oscar Niemeyer',
      imagem: <Image source={require('../../../../../assets/OscarNiemeyer.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Oscar Niemeyer (1907-2012) foi um arquiteto brasileiro, responsável pelo planejamento arquitetônico de vários edifícios públicos de Brasília, a capital do Brasil. É um dos maiores representantes da arquitetura moderna mundial, com mais de 600 obras pelo mundo.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Palacio de Inverno',
      imagem: <Image source={require('../../../../../assets/PalacioInverno.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'O Palácio de Inverno em russo: Зимний дворец  é um palácio imperial da Rússia. Fica localizado em São Petersburgo, entre o Cais do Palácio e a Praça do Palácio. Foi construído entre 1754 e 1762 para servir de residência de inverno aos czares russos e suas famílias',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Portala Palace',
      imagem: <Image source={require('../../../../../assets/PotalaPalace.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'O Conjunto Histórico do Palácio de Potala em Lassa é um sítio classificado pela UNESCO como Património da Humanidade em 1994, com extensões em 2000 e 2001. Inclui os palácios dos Dalai Lamas em Lassa, no Tibete. São eles: Palácio de Potala Norbulingk',
     fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Taj Mahal',
      imagem: <Image source={require('../../../../../assets/TajMahal.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'O Taj Mahal é um suntuoso mausoléu localizado na Índia. A construção foi eleita patrimônio mundial pela Unesco em 1983 e também está na lista de uma das sete maravilhas do mundo moderno, desde 2007. Atualmente, o Taj Mahal recebe milhões de turistas durante o ano',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
,
  ])
  
  const navigation = useNavigation();
  return (
    <View style={styles.borda}>
      <ImageBackground source={filme[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
          <TouchableOpacity onPress={() => navigation.navigate('Dreamworks')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
          <View style={styles.botao2}  >
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>{filme[route.params?.indice].nome}</Text>

            </View>
          </View>
        </View>

        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <View style={styles.botao}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {filme[route.params?.indice].imagem}


            </View>
          </View>
        </View>
        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}><View style={styles.view}><Text style={styles.btnTexto3}>{filme[route.params?.indice].informaçoes}</Text></View></View>
        </ImageBackground>
    </View>
  )
}