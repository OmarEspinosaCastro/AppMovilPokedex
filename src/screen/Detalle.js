import React, { useState, useEffect } from 'react'
import { Alert, Image, Modal, Text, SafeAreaView, ScrollView, View, StyleSheet, Button, ActivityIndicator, Pressable } from 'react-native';
import axios from "axios";

const Detalle = (props) => {

    const [namePokemon, setNamePokemon] = useState('');
    const [typesPokemon, setTypesPokemon] = useState([]);
    const [movesPokemon, setMovesPokemon] = useState([]);
    const id = props.idDetalle;
    useEffect(() => {
        getPokemons();
    }, []);
    const getPokemons = async () => {
        try {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                .then((res) => {
                    setNamePokemon(res.data.species.name);
                    setTypesPokemon(res.data.types)
                    setMovesPokemon(res.data.moves)
                })

        } catch (err) {
            console.error(err)
        } finally {
            //setIsLoading(false);
        }
    }
    return (
        <SafeAreaView style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png` }}
                                style={{ width: 150, height: 120, marginTop: 15, borderRadius: 5 }}
                            />
                            <Text>Nombre: {namePokemon}</Text>
                            {
                                typesPokemon?.map((item, index) => (
                                    <Text>type {index+1}: {item.type.name}</Text>
                                ))
                            }
                            {
                                movesPokemon?.map((item, index) => (
                                    (index<5&&<Text>move {index+1}: {item.move.name}</Text>)
                                ))
                            }
                            <Pressable
                                style={styles.buttonClose}
                                onPress={() => props.closetdetalle()}>
                                <Text>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </Modal>

        </ SafeAreaView>
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
        shadowColor: '#000',
        shadowOpacity: 100,
        elevation: 100,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        padding: 10,
        alignItems:'center',
        marginTop:12
    },
})

export default Detalle