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
      nome: 'Beijo no Hotel Ville',
      imagem: <Image source={require('../../../../../assets/BeijoHotelVille.jpg')} style={styles.imgD4}/>,
      informaçoes: 'O casal é jovem e descontraído, o centro da cena. O cenário desfocado, atrás do casal e no lado esquerdo, direciona os olhos do observador para o casal. O beijo em plena rua de Paris, na década de 50, reforçava a ideia de que os franceses eram românticos ao contrário dos frios norte-americanos.',
      fundo:require('../../../../../assets/Fundo.jpg'),
    },
    {
      nome:'Beijo da Times Square',
      imagem: <Image source={require('../../../../../assets/BeijoTimesSquare.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Publicada em 1945, este “Beijo” representa o momento em que um marinheiro norte-americano arranca um beijo a uma jovem enfermeira, em plena Times Square, em Nova Iorque, durante o anúncio da vitória e fim do conflito contra o Japão (durante a Segunda Guerra Mundial)',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Menina Afegã',
      imagem: <Image source={require('../../../../../assets/MeninaAfega.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'A foto foi tirada por Steve McCurry, na Fronteira entre o Afeganistão e o Paquistão, em 1984, sendo esta capa da revista “National Geographic”, um ano após ser tirada (1985).',
      fundo:require('../../../../../assets/Fundo.jpg')
    },
    {
      nome:'Mãe Imigrante',
      imagem: <Image source={require('../../../../../assets//MaeImigrante.jpg')} style={styles.imgD4}></Image>,
      informaçoes: 'Mãe Imigrante é uma fotografia de Dorothea Lange, feita em 1936, que mostra a miséria estampada no rosto de uma mãe, Florence Thompson, uma camponesa da Califórnia, num acampamento de colhedores de ervilhas. Ela está rodeada por seus dois filhos, que escondem o rosto diante da máquina da fotógrafa, e traz mais um bebê no colo. Esta é uma das fotos mais conhecidas da década de 1930, um ícone da Grande Depressão que abalou o mundo.',
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
          <TouchableOpacity onPress={() => navigation.navigate('CartoonNetworks')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
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