import { Context } from "../context/context.js";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  const { user, loading } = useContext(Context);

  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

export default RutaProtegida;
