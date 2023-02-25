import React from 'react';
import Dashboard from '../page/dashboard/dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
const AppRoutes = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Dasbord" component={Dashboard}/>
        </AppStack.Navigator>
    );
}

export default AppRoutes;
