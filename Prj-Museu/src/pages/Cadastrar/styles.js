import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputUserName: {
        backgroundColor: '#FFF',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,        
    },
    inputForm: {
        backgroundColor: '#FFF',
        marginTop: 13,
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
    },
    imgFundo:{
        height:'100%',
        width:'100%',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        resizeMode: 'cover',
    },
    botao:{
        width:'40%',
        height:'15%',
        borderWidth:2,
        borderColor:'#FFF',
        borderRadius:10,
        margin:20,
        
      },
})