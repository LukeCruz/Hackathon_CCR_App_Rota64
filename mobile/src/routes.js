import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Navigation from './pages/Navigation';
import DetailPoint from './pages/DetailPoint';

const appStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <appStack.Navigator headerMode='none' screenOptions={{ 
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                }    
            }}>
            <appStack.Screen name="Login" component={Login}/>
            <appStack.Screen name="Home" component={Home}/>
            <appStack.Screen name="Navigation" component={Navigation}/>
            <appStack.Screen name="DetailPoint" component={DetailPoint}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;