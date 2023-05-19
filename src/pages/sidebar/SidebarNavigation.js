import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Profile from '../profile/Profile'
const Drawer = createDrawerNavigator()
const SidebarNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen key="Profile" name='Profile' component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default SidebarNavigation
