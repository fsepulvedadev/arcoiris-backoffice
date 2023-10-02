import { useState } from "react";
import auth from "../../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { Input, Typography, Button } from "@material-tailwind/react";
import logo from "../assets/logo-f-blanco.svg";
import { useNavigate } from "react-router-dom";

const Recuperar = () => {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEnviado(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div className="bg-white h-screen flex-col">
      <img src={logo} alt="" className="w-40 mx-auto pt-10" />
      <div className="bg-blue-gray-100 w-fit p-5 rounded-lg flex-col items-center justify-center mx-auto mt-10">
        <Typography
          variant="h4"
          className="text-2xl font-bold  pl-5 pt-5 text-center"
        >
          Recuperar contraseña
        </Typography>
        <Typography
          color="gray"
          className="mt-1 text-sm font-normal pl-5 text-center"
        >
          Ingrese su email para enviar el link de reseteo.
        </Typography>

        {enviado ? (
          <>
            <div className="bg-green-100 text-green-400 border-2 border-green-400 w-6/12 mx-auto p-2 rounded-xl text-center mt-4">
              Se ha enviado un mensaje a tu email con el link para restablecer
              tu contraseña.
            </div>
            <div className="flex">
              <Button
                className="mt-5 w-6/12 mx-auto"
                color="blue"
                onClick={() => navigate("/")}
              >
                Regresar
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center mt-10">
            <form action="" className="" onSubmit={handleResetPassword}>
              <Input
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="mt-5 w-full" color="blue" type="submit">
                Enviar
              </Button>
            </form>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-100 text-red-400 border-2 border-red-400 w-3/12 mx-auto p-2 rounded-xl text-center">
          {error}
        </div>
      )}

      <button
        className="absolute bottom-5 left-5 p-3 rounded-lg bg-blue-500 text-white uppercase text-xs font-bold"
        onClick={() => navigate("/")}
      >
        Regresar
      </button>
    </div>
  );
};

export default Recuperar;
