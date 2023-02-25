import React, { useContext } from "react";
import { Context } from "../context/contexto";
import AppRoutes from "./app.route";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { logado } = useContext(Context);
  return !logado ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
