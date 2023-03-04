import React, { useState,useEffect } from 'react'
import { Text, TextInput, View, StyleSheet, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'

import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useCounterStore} from '../store/counterStore'

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginBottom: 16,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    //borderColor: '#ccc',
    //borderColor: !perfilEditable?'green':'gray',
    borderWidth: 2,
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 10,

  },
  buttons: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 10
  }
})

const Perfl = () => {
  const [date, setDate] = useState(new Date()) // cargar la fecha de nacimiento de storage si es qu hay
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('https://reactjs.org/logo-og.png');
  const [perfilEditable, setEditarPerfil] = useState(true)
  const [nombreAnte, setNombreAnte] = useState('');
  const [nombre, setNombre] = useState('')
  const [fechaAnte, setFechaAnte] = useState(new Date());// cargar la fecha de nacimiento de storage si es qu hay

  useEffect(() => {   
     // Update the document title using the browser API 
     //cargaDatosPerfil()
     getStoreData()

     //guardaFormulario()
     //getCounteP()
    },[]);

    const getStoreData = async () => {
      try {
        const nombrePerfil = await AsyncStorage.getItem('nombrePerfil')
        if(nombrePerfil !== null) {
          // value previously stored
          console.log("value previously stored",nombrePerfil);
          setNombre(nombrePerfil)
          setNombreAnte(nombrePerfil)
        }

         const fechaPerfil = await AsyncStorage.getItem('fechaPerfil')
         console.log("esto ",fechaPerfil);
        if(fechaPerfil !== null) {
          // value previously stored
          console.log("value previously stored",fechaPerfil);
          setDate(new Date(fechaPerfil))
          setFechaAnte(new Date(fechaPerfil))
        }else{
          console.log("no hay..");
        } 
        
        //getCounteP()

      } catch(e) {
        console.log("---------------------");
        console.log(e);
        console.log("---------------------");
        // error reading value
      }
  }

  const getCounteP = () => {
    const countPoke = useCounterStore((state)=>state.countPoke)
}

  const guardaFormulario = async () => {
    Alert.alert("Datos Guardados");
    try {
      await AsyncStorage.setItem('nombrePerfil', nombre)
      setNombreAnte(nombre)
      console.log(`${date}`);
      await AsyncStorage.setItem('fechaPerfil', `${date}`)
      setFechaAnte(new Date(`${date}`))
      setEditarPerfil(true);
    } catch (e) {
      // saving error
      console.log(e);
    }
    
  }


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 350,
      compressImageMaxHeight: 350,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }
  const descartaFormulario = () => {
    setDate(fechaAnte)
    setNombre(nombreAnte);
    setEditarPerfil(true);
  }
  
  return (
    <View style={styles.container}>
      {(perfilEditable ?
        <Text style={styles.title}>
          Perfil del usuario
        </Text>
        :
        <Text style={styles.title}>
          Editar Perfil
        </Text>
      )}

      <TouchableOpacity onPress={takePhotoFromCamera}>
        <ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 25 }} >
        <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.5,
                      margin:5
                    }}
                  />
                </View>
        </ImageBackground>
      </TouchableOpacity>


      <Text>
      {`Nombre: ${nombre}`}
      </Text>
      <TextInput value={nombre} onChangeText = { text => {setNombre(text)}} style={[styles.input,{borderColor: !perfilEditable?'green':'gray'}]} editable={!perfilEditable} />
      <Text>
        Fecha de nacimiento:
      </Text>
      <TouchableOpacity onPress={() => setOpen(true)} disabled={perfilEditable}>
        <Icon name="calendar-outline" size={40} color={!perfilEditable?'green':'gray'}>
        </Icon>
      </TouchableOpacity>
      <Text>
        {`${date}`}
      </Text>

      <View style={styles.buttons}>
        {(perfilEditable ?
          <View style={{ margin: 5, }}>
            <Button title='  Editar Perfil  ' onPress={() => setEditarPerfil(false)} />
          </View>
          :
          <>
            <View style={{ margin: 5 }}>
              <Button title='  Guardar  ' onPress={() => guardaFormulario()} />
            </View>
            <View style={{ margin: 5, }}>
              <Button title='  descartar  ' onPress={() => descartaFormulario()} />
            </View>
          </>
        )}
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        mode="date"
      />
    </View>
  )
}

export default Perfl
