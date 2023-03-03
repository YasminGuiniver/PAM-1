import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
export default function App() {
  const route = useRoute();
  const [filme, setFilme] = useState([
    {
      nome: 'Coluna Partida',
      imagem: <Image source={require('../../../../../assets/ColunaPartida.jpg')} style={styles.imgD4}/>,
      informaçoes: 'A Coluna Partida (La Columna Rota em espanhol) é um óleo sobre masonite da artista mexicana Frida Kahlo, pintado em 1944, logo após ela ter realizado uma cirurgia na coluna para corrigir problemas decorrentes de um grave acidente de trânsito ocorrido quando a pintora tinha dezoito anos.',
      fundo:require('../../../../../assets/Fundo.jpg'),
    },
    {
      nome:' Lagoa Lirios Dagua',
      imagem: <Image source={require('../../../../../assets/LagoaLiriosDagua.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Pintada em 1899 pelo francês Claude Monet, a tela tem 93 cm x 74 cm e pertence ao acervo do Metropolitan Museum of Art. A tela faz parte de um conjunto de imagens produzidas por Monet durante os últimos anos de sua vida.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Mulher com sombrinha',
      imagem: <Image source={require('../../../../../assets/MulherSombrinha.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'A pintura pertence ao impressionismo e faz parte dos raros retratos totalmente pintados ao ar livre, o qual retomará este mesmo tema em mais duas telas, em 1886. Camille, sua esposa, é a mulher que encontra-se no alto, vista de baixo, destacando-se do céu repleto de nuvens enquanto se vira num movimento rápido',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Monalisa',
      imagem: <Image source={require('../../../../../assets/Monalisa.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Trata-se de uma pintura a óleo sobre madeira que foi produzida entre os anos 1503 e 1506. Ela apresenta o retrato (do busto para cima) de uma mulher serena. No mundo da arte é a obra mais cara do mundo, avaliada em muitos milhões.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Noite Estrelada',
      imagem: <Image source={require('../../../../../assets/NoiteEstrelada.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'A Noite Estrelada é uma pintura de 1889 do artista holandês Vincent Van Gogh. Foi feita utilizando a técnica de óleo sobre tela, mede 73 x 92 cm e se encontra atualmente no Museu de Arte Moderna de Nova Iorque (MoMa), nos EUA. A tela apresenta uma paisagem noturna com destaque para o céu e as estrelas.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Girrassois',
      imagem:<Image source={require('../../../../../assets/Girrassois.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'O quadro, criado em 1888, é uma das quatro pinturas de girassóis feitas pelo artista naquele ano. Van Gogh pretendia usar as pinturas para decorar a sala do pintor francês Paul Gauguin, numa casa amarela de Arles, no sul da França. Ele e Gauguin trabalharam juntos entre outubro e dezembro.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
  ])
  const [loaded] = useFonts({
    Walter: require('../../../../../assets/fonts/Disney family 1.ttf'),
    
  });
  
 
  const navigation = useNavigation();
  return (
    <View style={styles.borda}>
      <ImageBackground source={filme[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
          <TouchableOpacity onPress={() => navigation.navigate('Disney')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
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