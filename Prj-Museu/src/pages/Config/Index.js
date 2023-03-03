import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, Switch, TouchableOpacity, Modal  } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
export default function App() {
   const route = useRoute();
   const [info, setInfo] = useState([
      {
        nome: 'Monet',
        sobre: 'A princípio, a história da Disney começou no início de 1923, mais especificamente em Kansas City, Missouri. Nesse contexto, Walt Disney criou um curta-metragem com o nome “Alice’s Wonderland” com presença de uma atriz mirim interagindo com personagens animados. Posteriormente, o animador mudou-se para Hollywood e juntou-se a seu irmão. Dessa forma, fundaram a Disney Brothers Cartoon Studios em 16 de outubro de 1923. Logo em seguida, a distribuidora MJ Winkler Production contatou-os com a intenção de distribuir uma série de Alice Comedies, por cerca de 1,5 mil dólares. Como consequência, outros filmes animados surgiram diante do sucesso da produção. Eventualmente, houve início da expansão do estúdio Disney, e também alteração em janeiro de 1926 para o nome Walt Disney Studios. Apesar disso, o principal personagem da época foi Oswald, o Coelho Sortudo. No entanto, após produzir 26 curtas sobre o personagem, ele perdeu o contrato em fevereiro de 1928 quando outra pessoa assumiu a empresa de distribuição da produção. Por outro lado, Walt Disney criou o rato Mortimer em 1928 por meio de desenho simples feitos em uma viagem de trem para a Califórnia. Porém, sua esposa sugeriu que o nome fosse Mickey Mouse porque era mais informal e simples de se lembrar.',
        fundador: 'Walt Disney (1901-1966) foi um empresário norte-americano. Fundou junto com o irmão Roy Disney, a Walt Disney Company. Criou o maior estúdio de animação de Hollywood, e os parques temáticos da Disney, na Califórnia, na Flórida, na França, no Japão e em Hong Kong. Walt Disney (1901-1966) nasceu em Chicago, Estados Unidos, no dia 5 de dezembro de 1901. Filho do empreiteiro Elias Disney e da professora Flora Call Disney. Com 7 anos já revelava talento para o desenho. Com 14 anos ingressou no Kansas City Art Institute. Com 16 anos, entrou para a Cruz Vermelha, onde era motorista de ambulância. Com 18 anos retornou para Kansas City e iniciou a carreira de cartunista de propaganda e depois passou a produzir filmes publicitários.',
        NomeFundador:'Monet',
        imagem: <Image source={require('../../../assets/MulherSombrinha.jpg')} style={styles.imgD4}></Image>,
        fundo:require('../../../assets/Fundo.jpg')
      
      },
      {
         nome: 'Michelangelo',
         sobre: 'Michelangelo di Lodovico Buonarroti Simoni (Caprese, 6 de março de 1475 — Roma, 18 de fevereiro de 1564), mais conhecido simplesmente como Michelangelo ou Miguel Ângelo, foi um pintor, escultor, poeta, anatomista e arquiteto italiano, considerado um dos maiores criadores da história da arte do mundo',
         fundador: 'Michelangelo di Lodovico Buonarroti Simoni, mais conhecido simplesmente como Michelangelo ou Miguel Ângelo, foi um pintor, escultor, poeta, anatomista e arquiteto italiano, considerado um dos maiores criadores da história da arte do ocidente',
        NomeFundador:'Michelangelo',
         imagem: <Image source={require('../../../assets/David.jpg')} style={styles.imgD4}></Image>,
         fundo:require('../../../assets/Fundo.jpg')
       
       },
       {
         nome: 'Oscar Niemeyer',
         sobre: 'Oscar Ribeiro de Almeida Niemeyer Soares Filho OMC • GColSE (Rio de Janeiro, 15 de dezembro de 1907 – Rio de Janeiro, 5 de dezembro de 2012) foi um arquiteto brasileiro, considerado uma das figuras-chave no desenvolvimento da arquitetura moderna. Niemeyer foi mais conhecido pelos projetos de edifícios cívicos para Brasília, uma cidade planejada que se tornou a capital do Brasil em 1960, bem como por sua colaboração no grupo de arquitetos indicados pelos Estados-membros da ONU ',
         fundador: 'Dar vida às formas desenhadas por Niemeyer foi um grande desafio conquistado pela engenharia. O conjunto abriga ao todo cinco edificações. O Palácio Tiradentes, sede do governo, é totalmente suspenso por cabos de aço, formando um vão livre de 147 metros no térreo. As secretarias foram alocadas em dois prédios idênticos com os nomes Minas e Gerais, feitos em curva, com quinze andares cada um. Completam o cenário, um centro de convivência em formato redondo, com lojas, restaurantes e bancos, e o auditório JK com 490 lugares',
        NomeFundador:'Oscar Niemeyer',
         imagem: <Image source={require('../../../assets/OscarNiemeyer.jpg')} style={styles.imgD4}></Image>,
         fundo:require('../../../assets/Fundo.jpg')
       
       },
       {
         nome: 'Steve McCurry ',
         sobre: 'Steve McCurry é um fotógrafo estadunidense da National Geographic, responsável pelo registro da famosa imagem da Menina Afegã, cujo rosto foi capa da revista e reconhecido por todo o mundo.',
         fundador: 'Steve McCurry nasceu na Filadélfia (Estados Unidos) em 24 de fevereiro de 1950. Estudou Artes e Arquitetura na Universidade do Estado da Pensilvânia. Logo cedo começou a trabalhar em um pequeno jornal da região como fotógrafo. Dois anos depois de formado, no início dos anos 1970, viajou para Índia, onde passou a treinar o seu estilo, além de desenvolver um impressionante olhar ao montar as composições de suas fotos, contextualizando o objeto fotográfico com o ambiente',
        NomeFundador:'Steve McCurry ',
         imagem: <Image source={require('../../../assets/MeninaAfega.jpg')} style={styles.imgD4}></Image>,
         fundo:require('../../../assets/Fundo.jpg')
       
       },
     
    ])
    const navigation = useNavigation();
    const [visivel, setVisivel] = useState(false);
    const [visivel1, setVisivel1] = useState(false);
    const [visivel2, setVisivel2] = useState(false);
    const [visivel3, setVisivel3] = useState(false);
    const [visivel4, setVisivel4] = useState(false);
    const [visivel5, setVisivel5] = useState(false);
    function mesdia1() {
        
            setVisivel1(true)
    
    
    
    
    
          
    
        }
        function mesdia2() {
        
            setVisivel2(true)
    
    
    
    
    
          
    
        }
        function Volatre(){
          if (route.params?.indice == 0 ) {
            navigation.navigate('Disney')
          }else if (route.params?.indice == 1){
           
              navigation.navigate('Pixar')
            
          }else if (route.params?.indice== 2){
           
            navigation.navigate('Dreamworks')
          
        }else if (route.params?.indice == 3){
          navigation.navigate('CartoonNetworks')
        }
      }
        function mesdia3() {
        
            setVisivel3(true)
    
    
    
    
    
          
    
        }
        function mesdia() {
        
            setVisivel(true)
    
    
    
    
    
          
    
        }
        function mesdia4() {
        
            setVisivel4(true)
    
    
    
    
    
          
    
        }
        function mesdia5() {
        
            setVisivel5(true)
    
    
    
    
    
          
    
        }
        
        function voltar() {
            setVisivel(false)
            setVisivel1(false)
            setVisivel3(false)
            setVisivel2(false)
            setVisivel4(false)
            setVisivel5(false)
          }
      
      
     
          const [loaded] = useFonts({
            Walter: require('../../../assets/fonts/Disney family 1.ttf'),
            
          });
          
    return(
    <View style={styles.borda}>
         <ImageBackground source={info[route.params?.indice].fundo} style={styles.imgD42}>
         <View style={styles.brnArea22}>
            <TouchableOpacity onPress={() => Volatre()}><View style={styles.btnArea}><Image source={require('../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>{info[route.params?.indice].nome}</Text>
                 
               </View>
               
            </View>
            </View>
         
         <Modal visible={visivel} animationType="fade">
         
         <View style={styles.borda}>
         <ImageBackground source={info[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
            <TouchableOpacity onPress={() => voltar()}><View style={styles.btnArea}><Image source={require('../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>Historia</Text>
                 
               </View>
               </View>
            </View>
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}><View style={styles.view}><Text style={styles.btnTexto3}>{info[route.params?.indice].sobre}</Text></View></View>
         </ImageBackground>
          </View>
          
          </Modal>
          
          <Modal visible={visivel2} animationType="fade">
         <View style={styles.borda}>
         <ImageBackground source={info[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
            <TouchableOpacity onPress={() => voltar()}><View style={styles.btnArea}><Image source={require('../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>{info[route.params?.indice].NomeFundador}</Text>
                 
               </View>
               </View>
              
            </View>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <View style={styles.imagems}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {info[route.params?.indice].imagem}


            </View>
          </View>
        </View>
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}><View style={styles.view}><Text style={styles.btnTextoFundador}>{info[route.params?.indice].fundador}</Text></View></View>
         </ImageBackground>
          </View>
          </Modal>
        
          
            
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={()=>mesdia()} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Historia</Text> </View>
                 
               </View>
               </TouchableOpacity>
              
               </View>
               <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={()=>mesdia2()} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Fundador</Text> </View>
                 
               </View>
               </TouchableOpacity>
              
               </View>
               </ImageBackground>
            </View>
            );
        }