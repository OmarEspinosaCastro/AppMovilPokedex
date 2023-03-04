import React from 'react'
import BottomTab from './src/navigation/BottomTab'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}

export default App