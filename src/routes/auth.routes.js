
import React from 'react';
import SingIn from '../page/singIn/singIn';
import { createStackNavigator } from '@react-navigation/stack';
const AuthStack = createStackNavigator();

const AuthRoutes =  () => {
  
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SingIn}/>
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;
