import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Context } from "../../context/contexto";
import Servico from "../../service/Servico";

const SingIn = () => {
  const {user, logar} = useContext(Context);
  const handleSignIn = () => {
  logar();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Voce precisa fazer login</Text>
      <Button
        title="Login"
        onPress={() => {
          handleSignIn();
        }}
      />
    </View>
  );
};

export default SingIn;
