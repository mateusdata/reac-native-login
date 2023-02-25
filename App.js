import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes";
import AuthProvider, { Context } from "./src/context/contexto";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
