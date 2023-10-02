import { Avatar, Button, Input, Typography } from "@material-tailwind/react";
import { MdSearch } from "react-icons/md";
import avatar from "../avatar.jpg";
import { useState, useContext } from "react";
import { Context } from "../context/context.js";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import logo from "../assets/logo-f-azul.svg";
import { signOut } from "firebase/auth";
import auth from "../../firebaseConfig";
=======
import logo from "../logo-f-azul.svg";
>>>>>>> f95191b12a34adc57bcdea495a79bbe1d5178cd8

const Navbar = () => {
  const [busqueda, setBusqueda] = useState("");

  const { handleBusqueda, user } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="flex items-center bg-biblio-500 text-white overflow-hidden">
      <div className="fixed flex bg-biblio-500 w-[15vw]">
        <img src={logo} alt="logo" className="w-32 mx-auto " />
      </div>

      <div className="flex items-center py-2 px-6 justify-between w-[83.5vw] bg-biblio-500 border-l-2 border-biblio ml-auto">
        <div className="flex items-center "></div>

        <div className="flex items-center">
          <Typography className="font-bold text-xs pr-2" variant="paragraph">
            {user?.email}
          </Typography>
          <Button
            onClick={() => {
              handleLogout();
              navigate("/login");
            }}
            color="lightBlue"
            buttonType="filled"
            size="sm"
            className="scale-75 bg-biblio-200"
          >
            <Typography>Salir</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
