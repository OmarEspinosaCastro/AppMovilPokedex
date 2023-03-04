import React, { useState,useEffect } from 'react'
import { Alert, Dimensions, Modal, Text, SafeAreaView, ScrollView, View, StyleSheet, Button, Image, ActivityIndicator, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-shadow-cards';
import axios from "axios";
import ItemPkeUsu from './ItemPkeUsu';
import Detalle from './Detalle';
import { useCounterStore } from '../store/counterStore'

const Catalogo = ({ navigation }) => {
    const [countPoke, setCountPoke] = useState(6);
    const [pokemonsCatalogo, setPokemonscatalogo] = useState([{ "id": 1, "nombre": "Omar" }, { "id": 2, "nombre": "Omar2" }, { "id": 3, "nombre": "Omar3" }, { "id": 4, "nombre": "Omar4" }, { "id": 5, "nombre": "Omar5" }]);
    const [modalVisible, setModalVisible] = useState(false);
    const [cargando, setcargando] = useState(false);

    const [idDetalle,setIdDetalle] = useState('')
    const [pokemons, setPokemons] = useState([]);

    /*
    modificar para que carge solo los pokemons de local storage
    */

    const todos = useCounterStore((state) => state.todos)
    const decreasePoke = useCounterStore((state) => state.decreasePoke)
    const removeTodo = useCounterStore((state) => state.removeTodo)

    useEffect(() => {
        setPokemons(todos)
    }, []);

    const deleteItem = (item) => {
        setPokemonscatalogo(pokemonsCatalogo.filter((x) => x.id !== item.id));
    }
    //esta funcionalidad se ejecuta en itempke
    const agregarPokemon = () => {
        setCountPoke(countPoke + 1);
        setPokemonscatalogo([...pokemonsCatalogo, { "id": countPoke, "nombre": "Omar" + countPoke }])
    }
    const opendetalle = (getId) => {
        setIdDetalle(getId);
        setModalVisible(true)
    }
    const closetdetalle = () => {
        setModalVisible(false)
    }
     const actionCard = async (idd) =>  {
        console.log("actionCard - eliminar");
        console.log("El id a actualizar es: ", idd);
        removeTodo(idd)
        decreasePoke()
     }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.centeredView}>
                    {modalVisible && <Detalle idDetalle={idDetalle} modalVisible={modalVisible} closetdetalle={closetdetalle} actionCard={actionCard}/>}
                    {/*                   <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text>Name:</Text>
                                <Text>Type:</Text>
                                <Text>Move1:</Text>
                                <Text>Maove:</Text>
                                <Pressable
                                    style={styles.buttonClose}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text>Ok</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal> */}
                </View>
                <View style={{ alignSelf: 'flex-end', marginTop: 40 }}>
                    <Icon onPress={() => navigation.navigate('Atras')} name="add-circle" size={20} color='#000'>
                        <Text> Agregar Pokemon </Text>
                    </Icon>

                    {/*   <Icon onPress={() => agregarPokemon()} name="add-circle" size={20} color='#000'>
                        <Text> Agregar Pokemon </Text>
                    </Icon> */}
                </View>


                {/*     <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: Dimensions.get('window').width }}>
                    {
                        false
                            ?
                            <ActivityIndicator size={80} style={{ marginTop: '40%' }} />
                            :
                            pokemonsCatalogo?.map((item, index) => (

                                <Card style={{ padding: 10, margin: 10, width: '41.5%', height: 400 }}>
                                    <View style={{ height: '55%', alignItems: 'center' }}>
                                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                                            style={{ width: 120, height: 120, marginTop: 25, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ height: '35%', }}>
                                        <Text>Name: {item.nombre}</Text>
                                        <Text>Type:</Text>
                                        <Text>Move1:</Text>
                                        <Text>Maove:</Text>
                                    </View>
                                    <View style={styles.buttons}>

                                        <Icon onPress={() =>
                                            Alert.alert('eleminar', 'Estas seguro de eliminar', [
                                                {
                                                    text: 'Cancelar',
                                                    onPress: () => console.log('Cancelar'),
                                                    style: 'cancel',
                                                },
                                                {
                                                    text: 'OK',
                                                    onPress: () => deleteItem(item)
                                                },
                                            ])}
                                            name="trash" size={13} color='#000'>
                                            <Text> Eleminar </Text>
                                        </Icon>


                                        <Icon onPress={() => setModalVisible(true)} name="bar-chart" size={13} color='#000'>
                                            <Text> Detalle </Text>
                                        </Icon>
                                    </View>
                                </Card>

                            ))
                    }
                </View>
 */}

                {cargando && <ActivityIndicator size={80} style={{ alignSelf: 'center', alignItems: 'center', marginTop: '40%', alignSelf: 'center' }} />}
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: Dimensions.get('window').width }}>
                    {
                        todos?.map((todo, index) => (
                            <ItemPkeUsu key={index} index={index} todo={todo.identificador} opendetalle={opendetalle}  actionCard={actionCard} msg={true}/>
                        ))
                    }
                </ View>
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


export default Catalogo
