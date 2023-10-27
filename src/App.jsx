import Inicio from "./pages/Inicio";
import Layout from "./components/Layout";
import CargarArchivo from "./pages/CargarArchivo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Lista from "./pages/Lista";
import DetalleArchivo from "./pages/DetalleArchivo";
import Login from "./pages/Login";

import RutaProtegida from "./components/RutaProtegida";
import Recuperar from "./pages/Recuperar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RutaProtegida>
              <Layout>
                <Inicio />
              </Layout>
            </RutaProtegida>
          }
        />
        <Route
          path="/cargar-archivo"
          element={
            <RutaProtegida>
              <Layout>
                <CargarArchivo />
              </Layout>
            </RutaProtegida>
          }
        />
        <Route
          path="/lista"
          element={
            <RutaProtegida>
              <Layout>
                <Lista />
              </Layout>
            </RutaProtegida>
          }
        />
        <Route
          path="/archivo"
          element={
            <RutaProtegida>
              <Layout>
                <DetalleArchivo />
              </Layout>
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar" element={<Recuperar />} />
      </Routes>
    </Router>
  );
}

export default App;
