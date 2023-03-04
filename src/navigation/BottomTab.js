import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfl from '../screen/Perfl';
import Catalogo from '../screen/Catalogo';
import Contador from '../screen/Contador';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import Agregar from '../screen/Agregar';

import {useCounterStore} from '../store/counterStore'


const HomeStack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Atras')}
      />
    </View>
  )
}

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  )
}


const ListPokemon = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Catalogo" component={Catalogo}  options={{headerShown:false}} />
      <HomeStack.Screen name="Atras" component={Agregar} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const setCountPoke = useCounterStore(state => state.setCountPoke)
  useEffect(() => {  
    setCountPoke();
   },[setCountPoke]);
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'Perfl':
              iconName = 'glasses'
              break;
            case 'Catalogo':
              iconName = 'documents'
              break;
            case 'Contador':
              iconName = 'calculator'
              break;
          }
          return <Icon name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="Perfl" component={Perfl} options={{headerShown:false}} />
      <Tab.Screen name="Catalogo" component={ListPokemon} options={{headerShown:false}}  />
      <Tab.Screen name="Contador" component={Contador}  options={{headerShown:false}} />
    </Tab.Navigator>
  )
}

export default BottomTab