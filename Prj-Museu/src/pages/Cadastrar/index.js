import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { styles } from './styles'

export default function CreateUser(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCreateUser(){
        if(name && email && password !== '' && password === passwordConfirm){
            localStorage.setItem('username', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('Cadastro criado com sucesso')
        }else {
            alert('Ops! Algo deu errado')
        }
    }
    return(
        <ImageBackground  source={require('../../../assets/Fundo.jpg')} style={styles.imgFundo}>
        <View style={styles.Container}>
            <View style={styles.form} >
                <TextInput style={styles.inputUserName} placeholder='Nome Completo'
                autoCompleteType='username' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setName(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Email'
                autoCompleteType='email' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setEmail(event)}
                 />
                <TextInput secureTextEntry={true} style={styles.inputForm} placeholder='Senha'
                autoCompleteType='password' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setPassword(event)}
                 />
                <TouchableOpacity style={styles.botao}
                onPress={handleCreateUser} >
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        </ImageBackground>
    );
}