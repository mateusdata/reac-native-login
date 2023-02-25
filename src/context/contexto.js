import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [nome, seName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("usuario").then((response)=>{
        setUser(response);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    })
  }, []);

  const logar = async () => {
    const data = {
      token: "ads2dsd3asd5",
      user: { name: "Mateus", email: "mateus@gmail.com" },
    };
    const { user } = data;

    seName(data.user.name);
    setEmail(data.user.email);
    setUser(user);

    await AsyncStorage.setItem("usuario", JSON.stringify(data.user));
  };

  const sair = async () => {
    await AsyncStorage.removeItem("usuario");
    setUser(false);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "blue", fontSize: 35 }}>Carregando...</Text>
      </View>
    );
  }
  return (
    <Context.Provider
      value={{ nome, email, user, logado: !!user, logar, sair, setUser }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthProvider;
