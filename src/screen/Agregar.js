import React, { useState, useEffect } from 'react'
import { Alert, Dimensions, Modal, Text, SafeAreaView, ScrollView, View, StyleSheet, Button, Image, ActivityIndicator, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-shadow-cards';
import axios from "axios";
import ItemPke from './ItemPke';
import Detalle from './Detalle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCounterStore } from '../store/counterStore'



const Agregar = () => {
    const [cargando, setcargando] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [idDetalle, setIdDetalle] = useState('')

    const [pokemons, setPokemons] = useState([]);
    const [pokemonIdUsuario, setPokemonIdUsuario] = useState('');
    const [pokemonNombreUsuario, setPokemonNombreUsuario] = useState('');
    const [pokemonTypeUsuario, setPokemonTypeUsuario] = useState('');
    const [pokemonMove1Usuario, setPokemonMove1Usuario] = useState('');
    const [pokemonMove2Usuario, setPokemonMove2Usuario] = useState('');

    const setCountPoke = useCounterStore(state => state.setCountPoke)

    const [datosGu, setDatosGu] = useState('')
    useEffect(() => {
        setCountPoke();
    }, [setCountPoke]);


    useEffect(() => {
        setcargando(true);
        axios
            .get(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => {
                setPokemons(res.data.results)
                setcargando(false);
            })
    }, []);
    const opendetalle = (getId) => {
        setIdDetalle(getId);
        setModalVisible(true)
    }
    const closetdetalle = () => {
        setModalVisible(false)
    }

    const increasePoke = useCounterStore((state) => state.increasePoke)
    const addTodo = useCounterStore((state) => state.addTodo)

   
    const actionCard = async (idd) => {
        console.log("El id a actualizar es: ", idd);
        addTodo(idd)
        increasePoke()

       /* {
            nombre:'',
            imagen:'',
            type:[],
            move:[]
        }
        */
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.centeredView}>
                        {modalVisible && <Detalle idDetalle={idDetalle} modalVisible={modalVisible} closetdetalle={closetdetalle} />}
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text onPress={()=>imprimeStorage()}> Agregar Pokemon </Text>
                    </View>
                    {cargando && <ActivityIndicator size={80} style={{ alignSelf: 'center', alignItems: 'center', marginTop: '40%', alignSelf: 'center' }} />}
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: Dimensions.get('window').width }}>
                        {
                            pokemons?.map((pokemon, index) => (
                                <ItemPke key={index} index={index} pokemon={pokemon} opendetalle={opendetalle} actionCard={actionCard} msg={false} />
                            ))
                        }
                    </ View>
                </View>
            </ScrollView>
        </SafeAreaView>
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


export default Agregar
