import { onAuthStateChanged } from "firebase/auth";
import { Context } from "./context.js";
import { useState, useEffect } from "react";
import auth from "../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

const BibliotecaProvider = ({ children }) => {
  const [archivos, setArchivos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [primeraBusqueda, setPrimeraBusqueda] = useState(false);
  const [totalArchivosDB, setTotalArchivosDB] = useState(0);
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    traerTotalArchivos();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const traerTotalArchivos = async () => {
    fetch("http://localhost:3000/archivos?total=true")
      .then((res) => res.json())
      .then((data) => setTotalArchivosDB(data.total));
  };

  const handleBusqueda = (busqueda, campo) => {
    if (campo === "fecha") {
      busqueda = busqueda.startDate;
    }
    let url = `http://localhost:3000/buscar?busqueda=${busqueda}&campo=${campo}`;
    if (busqueda === "") {
      setArchivos([]);
      setPrimeraBusqueda(true);
      return;
    }

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        mostrarResultadosBusqueda(data);
      })
      .catch((err) => console.log(err));
  };
  const handleDownload = (file) => {
    fetch(`http://localhost:3000/descargar/${file}`)
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = file;
        a.click();
      });
  };

  const mostrarResultadosBusqueda = (resultados) => {
    setPrimeraBusqueda(false);

    setArchivos(resultados);
  };

  const traerArchivos = async () => {
    setPrimeraBusqueda(false);
    setCargando(true);
    const response = await fetch("localhost:3000/archivos");
    const json = await response.json();

    setArchivos(json);
  };

  const borrarArchivo = async (id) => {
    const response = await fetch(`http://localhost:3000/borrar?id=${id}`, {
      method: "DELETE",
    });

    traerArchivos();

    const json = await response.json();
    return json;
  };

  return (
    <Context.Provider
      value={{
        archivos,
        borrarArchivo,
        mostrarResultadosBusqueda,
        setArchivos,
        setPrimeraBusqueda,
        primeraBusqueda,
        totalArchivosDB,
        handleBusqueda,
        handleDownload,
        archivoSeleccionado,
        setArchivoSeleccionado,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default BibliotecaProvider;
