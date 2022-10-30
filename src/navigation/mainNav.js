import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/home/homeScreen';
import FindDoctor from '../Screens/Doctor/findDoctor';
import LabTest from '../Screens/LabTest/labTest';
import Doctors from '../Screens/Diabetes/doctors';
import Profile from '../Screens/LabTest/profile';
import Available from '../Screens/LabTest/Available';
import RateList from '../Screens/LabTest/ratelist';
import Final from '../Screens/LabTest/confirm';
import Order from '../Screens/LabTest/order';
import Doc from '../Screens/Medicine/Medicine';
import Medical from '../Screens/Medicine/Medical';


const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Doctor"
          component={FindDoctor}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="Doc"
          component={Doc}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Final"
          component={Final}
          options={{headerShown: false}}
        />
  
  <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
  
        <Stack.Screen
          name="LabTest"
          component={LabTest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Diabetes"
          component={Doctors}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RateList"
          component={RateList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Available"
          component={Available}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Medical"
          component={Medical}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
