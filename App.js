// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/assets/Screens/insurence';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/assets/Screens/login';


import {SafeAreaView} from 'react-native-safe-area-context';
function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text>Click on the Icons to move to the desired location</Text>
      </View>
      <View
        style={{
          flex: 1,

          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="rocket" size={30} color={'black'} />
          <Text>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="hospital" size={30} color={'black'} />
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
