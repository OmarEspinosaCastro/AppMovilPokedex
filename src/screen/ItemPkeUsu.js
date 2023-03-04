import React, { useState, useEffect } from 'react'
import { Alert, Dimensions, Text, View, StyleSheet, Button, Image, ActivityIndicator, Pressable } from 'react-native';
import axios from "axios";
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemPkeUsu = (props) => {

    const [namePokemon, setNamePokemon] = useState('');
    const [typePokemon, setTypePokemon] = useState('');
    const [moveUnoPokemon, setMoveUnoPokemon] = useState('');
    const [moveDosPokemon, setMoveDosPokemon] = useState('');
    const getId = () => props.todo;
    useEffect(() => {
        getPokemons();
    }, []);
    const getPokemons = async () => {
        try {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${getId()}/`)
                .then((res) => {
                    setNamePokemon(res.data.species.name)
                    setTypePokemon(res.data.types[0].type.name)
                    setMoveUnoPokemon(res.data.moves[0].move.name)
                    setMoveDosPokemon(res.data.moves[1].move.name)
                })

        } catch (err) {
            console.error(err)
        } finally {
            //setIsLoading(false);
        }
    }

    return (
        <View>
            {/* <Text>{namePokemon}</Text>
            <Button title='  Abre Modal detalle  ' onPress={() => props.opendetalle(getId())} /> */}
            <Card style={{flex:1, padding: 10, margin: 5, width: '90%', height: 400 }}>
                <View style={{ height: '45%', alignItems: 'center' }}>
                    <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${getId()}.png` }}
                        style={{ width: 150, height: 120, marginTop: 15, borderRadius: 5 }}
                    />
                </View>
                <View style={{ height: '35%', }}>
                    <Text>Name: {namePokemon}</Text>
                    <Text>Type: {typePokemon}</Text>
                    <Text>Move1: {moveUnoPokemon}</Text>
                    <Text>Maove2: {moveDosPokemon}</Text>
                </View>
                <View style={styles.buttons}>
                    <Icon onPress={() =>
                    
                        Alert.alert('Actualizado',"El pokemon fue eliminado correctamente", [
                            {
                                text: 'OK',
                                onPress: () => props.actionCard(getId())
                            },
                        ])}

                        name="trash-sharp" size={13} color='#000'>
                        
                        {(props.msg?<Text> Eliminar </Text>:<Text> Agregar </Text>)}
                    </Icon>
                    <Icon onPress={() => props.opendetalle(getId())} name="bar-chart" size={13} color='#000'>
                        <Text> Detalle </Text>
                    </Icon>
                </View>

            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,

    },
    buttons: {
        flexDirection: 'row',
    },
    modals: {
        flexDirection: 'row',
        height: 400,
        backgroundColor: 'red',
        marginTop: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        borderWidth: 1,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 100,
        elevation: 100,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
})

export default ItemPkeUsu;