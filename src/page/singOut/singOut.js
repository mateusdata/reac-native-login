import React, { useContext } from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { Context } from "../../context/contexto";

const SingOut = () => {
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="sair" onPress={() => {
        
      }} />
    </View>
  );
};

export default SingOut;
