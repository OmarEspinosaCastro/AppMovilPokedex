import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'
import { useCounterStore } from '../store/counterStore'

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  title2: {
    marginTop:60,
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },
})

const Contador = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const countPoke = useCounterStore((state) => state.countPoke)
  const todos = useCounterStore((state) => state.todos)

  const increasePoke = useCounterStore((state) => state.increasePoke)
  const decreasePoke = useCounterStore((state) => state.decreasePoke)


  return (
    <View style={styles.container}>
      <Text style={styles.title2}>
        Total de Pokemons
      </Text>
      <Text style={styles.title}>
        {countPoke} Pokemons
      </Text>
      {
        /* todos?.map((todo, index) => (
          <Text>hola..{todo.identificador}</Text>
        )) */
      }
    </View>
  )
}

export default Contador
