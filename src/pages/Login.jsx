import { Button, Chip, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import corazon from "../assets/corazon.jpg";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import auth from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../context/context";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo-f-blanco.svg";
import banner from "../assets/banner.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const { setLoading } = useContext(Context);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        if (errorCode === "auth/invalid-login-credentials") {
          setErrorMessage("El correo o contraseña ingresado no es valido");
        } else {
          setErrorMessage(error.message);
        }
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className=" h-screen ml-auto">
        <img src={logo} alt="" className="w-52 mx-auto pt-10" />
        <div className="flex justify-center items-center ">
          <div className="h-80 flex  rounded-xl bg-white my-4 w-full p-4">
            <form className="w-3/12 mx-auto " action="" onSubmit={handleLogin}>
              <Input
                label="Email"
                icon={<MdAlternateEmail />}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <div className="h-4"></div>
              <Input
                type="password"
                label="Contraseña"
                icon={<MdLockOutline />}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <div className="w-full mx-auto flex flex-col items-center justify-center">
                <Link
                  className="text-blue-400 text-sm italic mt-2"
                  to={"/recuperar"}
                >
                  Olvide mi contraseña
                </Link>
                <Button
                  type="submit"
                  className="w-8/12 my-2 bg-biblio-500 hover:bg-biblio-200"
                  size="sm"
                >
                  Ingresar
                </Button>
              </div>
              {errorMessage && (
                <div className=" bg-red-200 text-red-500 rounded-lg text-center">
                  <Typography variant="p" className="text-sm p-2">
                    {errorMessage}
                  </Typography>
                </div>
              )}
            </form>
          </div>
        </div>
        <img
          className=" mx-32 absolute bottom-0"
          src={banner}
          alt=""
          srcset=""
        />
      </div>
    </>
  );
};

export default Login;
