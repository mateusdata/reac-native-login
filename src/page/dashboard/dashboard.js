import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { Context } from '../../context/contexto';

const Dashboard = () => {
    const {sair}  = useContext(Context);
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>
                Bem-vindo você esta logado  no sistema
            </Text>
            <Button title='sair da conta' onPress={ ()=>{
               sair()
            }}/>
        </View>
    );
}

export default Dashboard;
