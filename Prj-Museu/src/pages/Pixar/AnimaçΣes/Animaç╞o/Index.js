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
      nome:'Vênus',
      imagem: <Image source={require('../../../../../assets/Venus.jpg')} style={styles.imgD4}></Image>,
      informaçoes: 'A estátua Vênus de Milo, a deusa do amor, é encontrada em 10 de agosto de 1830, sem braços nas Ilhas Cíclades, na Grécia. Com 202cm de altura, a estátua era maior que a média humana à época, o que sugere que tivesse sido uma deusa. Na verdade, a escultura é de origem grega, não romana, como é a deusa do amor Vênus.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Busto de  Nerfetiti',
      imagem: <Image source={require('../../../../../assets/Nerfetiti.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Foi talhado em várias etapas sobre uma base de pedra calcária coberta por capas de estuque de diferentes espessuras e tem fissuras nos ombros, na zona inferior e na parte traseira da coroa. A imagem do busto é alongada, o rosto é muito simétrico, com maçãs proeminentes e nariz perfeito.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'O Pensador',
      imagem: <Image source={require('../../../../../assets/Pesador.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Retrata um homem em meditação soberba, lutando com uma poderosa força interna. Originalmente chamado de O Poeta, a peça era parte de uma comissão do Museu de Arte Decorativa em Paris para criar um portal monumental baseada na Divina Comédia, de Dante Alighieri.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Pieta Michelangelo',
      imagem: <Image source={require('../../../../../assets/pietaMichelangelo.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Pietà é uma célebre escultura do Renascimento, produzida entre os anos de 1498 e 1499, pelo artista italiano Michelangelo. A representação da Virgem Maria segurando o corpo morto de Jesus Cristo, depois de ter sido crucificado, é uma das obras mais famosas e impressionantes do gênio renascentista.',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'David',
      imagem: <Image source={require('../../../../../assets/David.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'O David de Michelangelo é uma escultura que retrata o herói bíblico protagonista da famosa história sobre um corajoso rapaz que derrota um gigante: David e Golias. Segundo a narrativa bíblica, antes de se tornar o Rei de Judá, David liberta seu povo da ameaça que era oferecida.',
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
          <TouchableOpacity onPress={() => navigation.navigate('Pixar')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
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