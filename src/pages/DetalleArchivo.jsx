import React from "react";
import { Context } from "../context/context";
import { useContext } from "react";
import { Typography, Badge } from "@material-tailwind/react";
import DivisorCategoria from "../components/DivisorCategoria";
import { TiChevronRight } from "react-icons/ti";
import { MdFileDownload, MdOutlineArrowBack } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const DetalleArchivo = () => {
  const { archivoSeleccionado, handleDownload } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="w-[83.5vw] min-h-screen ml-auto flex flex-col justify-start items-center">
      <div className="grid grid-cols-3">
        <div className="flex gap-2 items-center justify-start">
          <IconButton
            color="blue"
            className="ml-2"
            onClick={() => {
              navigate("/lista");
            }}
          >
            <MdOutlineArrowBack className="text-white text-lg" />
          </IconButton>
          <IconButton
            color="amber"
            className="ml-2"
            onClick={() => {
              handleDownload(archivoSeleccionado.archivo);
            }}
          >
            <MdFileDownload className="text-white text-lg" />
          </IconButton>
        </div>
        <Typography className="mx-auto mt-4" variant="h5">
          Detalle archivo {archivoSeleccionado._id}
        </Typography>
        <div></div>
      </div>

      <div className="w-11/12 grid grid-cols-2 gap-x-4 gap-y-4 my-4">
        <div className="border-2 border-blue-gray-400 rounded p-2 ">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Autor personal principal
          </span>
          <Typography
            className="mx-auto text-xs bg-blue-gray-200 p-2"
            variant="h5"
          >
            <TiChevronRight className="inline-flex text-base" />{" "}
            {archivoSeleccionado.autorPersonalAsientoPrincipal.autor}
          </Typography>
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Autor personal secundario
          </span>
          {archivoSeleccionado.autorPersonalAsientoSecundario.map(
            (autor, index) => (
              <Typography
                key={index}
                className="mx-auto text-xs mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="inline-flex text-base" />{" "}
                {autor.autor}
              </Typography>
            )
          )}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Autor Institucional primario
          </span>
          <div className="flex justify-between w-full">
            {archivoSeleccionado.autorInstitucionalAsientoPrincipal.map(
              (autor, index) => (
                <Typography
                  key={index}
                  className=" text-xs flex items-center bg-blue-gray-200 p-2"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid gap-1 grid-cols-2">
                    <div>
                      <span className="underline">Entidad:</span>
                      <br />
                      {autor.entidad}
                    </div>
                    <div>
                      <span className="underline">Entidad Subordinada:</span>
                      <br />
                      {autor.entidadSubordinada}
                    </div>
                    <div>
                      <span className="underline">Sigla:</span> <br />{" "}
                      {autor.sigla}
                    </div>
                  </div>
                </Typography>
              )
            )}
          </div>
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Autor Institucional secundario
          </span>
          {archivoSeleccionado.autorInstitucionalAsientoSecundario.map(
            (autor, index) => (
              <div key={index} className="flex">
                <Typography
                  className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid gap-1 grid-cols-2 mb-2">
                    <div>
                      <span className="underline">Entidad:</span>
                      <br />
                      {autor.entidad}
                    </div>
                    <div>
                      <span className="underline">Entidad Subordinada:</span>
                      <br />
                      {autor.entidadSubordinada}
                    </div>
                    <div>
                      <span className="underline">Sigla:</span> <br />{" "}
                      {autor.sigla}
                    </div>
                  </div>
                </Typography>
              </div>
            )
          )}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Conferencia
          </span>
          <Typography
            className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
            variant="h5"
          >
            <TiChevronRight className="inline-flex text-base mr-2" />{" "}
            <div className="grid gap-1 grid-cols-2">
              <div>
                <span className="underline">Conferencia:</span>
                <br />
                {archivoSeleccionado.conferencia.conferencia}
              </div>
              <div>
                <span className="underline">Numero:</span>
                <br />
                {archivoSeleccionado.conferencia.numero}
              </div>
              <div>
                <span className="underline">Fecha:</span> <br />{" "}
                {`${
                  new Date(archivoSeleccionado.conferencia.fecha).getDate() + 1
                }/${
                  new Date(archivoSeleccionado.conferencia.fecha).getMonth() + 1
                }/${new Date(
                  archivoSeleccionado.conferencia.fecha
                ).getFullYear()}`}
              </div>
              <div>
                <span className="underline">Lugar:</span> <br />{" "}
                {archivoSeleccionado.conferencia.lugar}
              </div>
            </div>
          </Typography>
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Titulo
          </span>
          <Typography
            className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
            variant="h5"
          >
            <TiChevronRight className="inline-flex text-base mr-2" />{" "}
            <div className="grid gap-1 grid-cols-2">
              <div>
                <span className="underline">Titulo:</span>
                <br />
                {archivoSeleccionado.titulo.titulo}
              </div>
              <div>
                <span className="underline">Numero:</span>
                <br />
                {archivoSeleccionado.titulo.numero}
              </div>
              <div>
                <span className="underline">DGM:</span> <br />{" "}
                {archivoSeleccionado.titulo.dgm}
              </div>
              <div>
                <span className="underline">Lugar:</span> <br />{" "}
                {archivoSeleccionado.titulo.subtitulo}
              </div>
            </div>
          </Typography>
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Publicacion
          </span>
          {archivoSeleccionado.publicacion.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Lugar:</span>
                    <br />
                    {autor.lugar}
                  </div>
                  <div>
                    <span className="underline">Editor:</span>
                    <br />
                    {autor.editor}
                  </div>
                  <div>
                    <span className="underline">Fecha:</span> <br />{" "}
                    {`${new Date(autor.fecha).getDate() + 1}/${
                      new Date(autor.fecha).getMonth() + 1
                    }/${new Date(autor.fecha).getFullYear()}`}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Descripcion Fisica
          </span>
          {archivoSeleccionado.descripcionFisica.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Extension DEM:</span>
                    <br />
                    {autor.extensionDEM}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Coleccion
          </span>
          {archivoSeleccionado.coleccion.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Titulo:</span>
                    <br />
                    {autor.titulo}
                  </div>
                  <div>
                    <span className="underline">Subserie:</span>
                    <br />
                    {autor.subserie}
                  </div>
                  <div>
                    <span className="underline">Volumen:</span>
                    <br />
                    {autor.volumen}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Termina de Materia Controlado
          </span>
          {archivoSeleccionado.coleccion.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Titulo:</span>
                    <br />
                    {autor.titulo}
                  </div>
                  <div>
                    <span className="underline">Subserie:</span>
                    <br />
                    {autor.subserie}
                  </div>
                  <div>
                    <span className="underline">Volumen:</span>
                    <br />
                    {autor.volumen}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Termino de materia controlado
          </span>
          {archivoSeleccionado.terminoDeMateriaControlado.map(
            (autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid gap-1 grid-cols-2">
                    <div>
                      <span className="underline">Termino Controlado:</span>
                      <br />
                      {autor.terminoControlado}
                    </div>
                  </div>
                </Typography>
              </div>
            )
          )}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Termino de materia geografico
          </span>
          {archivoSeleccionado.terminoDeMateriaGeografico.map(
            (autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid gap-1 grid-cols-2">
                    <div>
                      <span className="underline">
                        Termino de materia geografico:
                      </span>
                      <br />
                      {autor.terminoDeMateriaGeografico}
                    </div>
                  </div>
                </Typography>
              </div>
            )
          )}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Termino de materia propuesto
          </span>
          {archivoSeleccionado.terminoDeMateriaPropuesto.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">
                      Termino de materia propuesto:
                    </span>
                    <br />
                    {autor.terminoPropuesto}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Termino de materia nombre de persona
          </span>
          {archivoSeleccionado.terminoDeMateriaNombreDePersona.map(
            (autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid gap-1 grid-cols-2">
                    <div>
                      <span className="underline">
                        Termino de materia nombre de persona:
                      </span>
                      <br />
                      {autor.nombre}
                    </div>
                  </div>
                </Typography>
              </div>
            )
          )}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Tema
          </span>
          <Typography
            className="mx-auto text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
            variant="h5"
          >
            <TiChevronRight className="inline-flex text-base" />{" "}
            <div className="grid gap-1 grid-cols-2">
              <div>
                <span className="underline">Tema:</span>
                <br />
                {archivoSeleccionado.tema.tema}
              </div>
            </div>
          </Typography>
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Nota General
          </span>
          {archivoSeleccionado.notaGeneral.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Nota:</span>
                    <br />
                    {autor.nota}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Nivel
          </span>
          {archivoSeleccionado.nivel.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Nivel:</span>
                    <br />
                    {autor.nivel}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Resumen
          </span>
          {archivoSeleccionado.resumen.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center  mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Resumen:</span>
                    <br />
                    {autor.resumen}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Direccion electronica
          </span>
          {archivoSeleccionado.direccionElectronica.map((autor, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                className=" text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
                variant="h5"
              >
                <TiChevronRight className="mr-2 text-base" />
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <span className="underline">Nombre:</span>
                    <br />
                    {autor.nombre}
                  </div>
                  <div>
                    <span className="underline">Direccion:</span>
                    <br />
                    {autor.direccion}
                  </div>
                </div>
              </Typography>
            </div>
          ))}
        </div>
        <div className="border-2 border-blue-gray-400 rounded p-2">
          <span className="absolute -mt-5 bg-white px-1 font-bold text-xs">
            Localizacion Acceso y Control
          </span>
          <Typography
            className="mx-auto text-xs flex items-center mt-2 bg-blue-gray-200 p-2"
            variant="h5"
          >
            <TiChevronRight className="inline-flex text-base" />{" "}
            <div className="grid gap-1 grid-cols-2">
              <div>
                <span className="underline">Procedencia:</span>
                <br />
                {archivoSeleccionado.localizacionAccesoControl.procedencia}
              </div>
              <div>
                <span className="underline">Proveedor:</span>
                <br />
                {archivoSeleccionado.localizacionAccesoControl.proveedor}
              </div>
              <div>
                <span className="underline">Estado:</span>
                <br />
                {archivoSeleccionado.localizacionAccesoControl.estado}
              </div>
            </div>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DetalleArchivo;
