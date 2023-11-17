import React from "react";
import { Context } from "../context/context";
import { useContext } from "react";
import { Typography, Badge } from "@material-tailwind/react";
import DivisorCategoria from "../components/DivisorCategoria";
import { TiChevronRight } from "react-icons/ti";

const DetalleArchivo = () => {
  const { archivoSeleccionado } = useContext(Context);

  return (
    <div className="w-[83.5vw] min-h-screen ml-auto flex flex-col justify-start items-center">
      <Typography className="mx-auto mt-4" variant="h5">
        Detalle archivo{" "}
        {
          archivoSeleccionado.ubicacion.split("\\")[
            archivoSeleccionado.ubicacion.split("\\").length - 1
          ]
        }
      </Typography>
      <div className="grid w-11/12 grid-cols-2 my-4 gap-x-4 gap-y-4">
        {archivoSeleccionado.autorPersonalAsientoPrincipal && (
          <div className="p-2 border-2 rounded border-blue-gray-400 ">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Autor personal principal
            </span>
            <Typography
              className="p-2 mx-auto text-xs bg-blue-gray-200"
              variant="h5"
            >
              <TiChevronRight className="inline-flex text-base" />{" "}
              {archivoSeleccionado.autorPersonalAsientoPrincipal.autor}
            </Typography>
          </div>
        )}

        {archivoSeleccionado.autorPersonalAsientoSecundario && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Autor personal secundario
            </span>
            {archivoSeleccionado.autorPersonalAsientoSecundario.map(
              (autor, index) => (
                <Typography
                  key={index}
                  className="p-2 mx-auto mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="inline-flex text-base" />{" "}
                  {autor.autor}
                </Typography>
              )
            )}
          </div>
        )}

        {archivoSeleccionado.autorInstitucionalAsientoPrincipal && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Autor Institucional primario
            </span>
            <div className="flex justify-between w-full">
              {archivoSeleccionado.autorInstitucionalAsientoPrincipal.map(
                (autor, index) => (
                  <Typography
                    key={index}
                    className="flex items-center p-2 text-xs bg-blue-gray-200"
                    variant="h5"
                  >
                    <TiChevronRight className="mr-2 text-base" />
                    <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.autorInstitucionalAsientoSecundario && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Autor Institucional secundario
            </span>
            {archivoSeleccionado.autorInstitucionalAsientoSecundario.map(
              (autor, index) => (
                <div key={index} className="flex">
                  <Typography
                    className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                    variant="h5"
                  >
                    <TiChevronRight className="mr-2 text-base" />
                    <div className="grid grid-cols-2 gap-1 mb-2">
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
        )}

        {archivoSeleccionado.conferencia && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Conferencia
            </span>
            <Typography
              className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
              variant="h5"
            >
              <TiChevronRight className="inline-flex mr-2 text-base" />{" "}
              <div className="grid grid-cols-2 gap-1">
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
                    new Date(archivoSeleccionado.conferencia.fecha).getDate() +
                    1
                  }/${
                    new Date(archivoSeleccionado.conferencia.fecha).getMonth() +
                    1
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
        )}

        {archivoSeleccionado.titulo && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Titulo
            </span>
            <Typography
              className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
              variant="h5"
            >
              <TiChevronRight className="inline-flex mr-2 text-base" />{" "}
              <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.publicacion && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Publicacion
            </span>
            {archivoSeleccionado.publicacion.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.descripcionFisica && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Descripcion Fisica
            </span>
            {archivoSeleccionado.descripcionFisica.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.coleccion && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Coleccion
            </span>
            {archivoSeleccionado.coleccion.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.coleccion && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Termina de Materia Controlado
            </span>
            {archivoSeleccionado.coleccion.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.terminoDeMateriaControlado && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Termino de materia controlado
            </span>
            {archivoSeleccionado.terminoDeMateriaControlado.map(
              (autor, index) => (
                <div key={index} className="flex justify-between">
                  <Typography
                    className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                    variant="h5"
                  >
                    <TiChevronRight className="mr-2 text-base" />
                    <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.terminoDeMateriaGeografico && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Termino de materia geografico
            </span>
            {archivoSeleccionado.terminoDeMateriaGeografico.map(
              (autor, index) => (
                <div key={index} className="flex justify-between">
                  <Typography
                    className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                    variant="h5"
                  >
                    <TiChevronRight className="mr-2 text-base" />
                    <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.terminoDeMateriaPropuesto && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Termino de materia propuesto
            </span>
            {archivoSeleccionado.terminoDeMateriaPropuesto.map(
              (autor, index) => (
                <div key={index} className="flex justify-between">
                  <Typography
                    className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                    variant="h5"
                  >
                    <TiChevronRight className="mr-2 text-base" />
                    <div className="grid grid-cols-2 gap-1">
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
              )
            )}
          </div>
        )}
        {archivoSeleccionado.terminoDeMateriaNombreDePersona && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Termino de materia nombre de persona
            </span>
            {archivoSeleccionado.terminoDeMateriaNombreDePersona.map(
              (autor, index) => (
                <div key={index} className="flex justify-between">
                  <Typography
                    className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                    variant="h5"
                  >
                    <TiChevronRight className="mr-2 text-base" />
                    <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.tema && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Tema
            </span>
            <Typography
              className="flex items-center p-2 mx-auto mt-2 text-xs bg-blue-gray-200"
              variant="h5"
            >
              <TiChevronRight className="inline-flex text-base" />{" "}
              <div className="grid grid-cols-2 gap-1">
                <div>
                  <span className="underline">Tema:</span>
                  <br />
                  {archivoSeleccionado.tema.tema}
                </div>
              </div>
            </Typography>
          </div>
        )}

        {archivoSeleccionado.notaGeneral && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Nota General
            </span>
            {archivoSeleccionado.notaGeneral.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}
        {archivoSeleccionado.nivel && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Nivel
            </span>
            {archivoSeleccionado.nivel.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.resumen && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Resumen
            </span>
            {archivoSeleccionado.resumen.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}

        {archivoSeleccionado.direccionElectronica && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Direccion electronica
            </span>
            {archivoSeleccionado.direccionElectronica.map((autor, index) => (
              <div key={index} className="flex justify-between">
                <Typography
                  className="flex items-center p-2 mt-2 text-xs bg-blue-gray-200"
                  variant="h5"
                >
                  <TiChevronRight className="mr-2 text-base" />
                  <div className="grid grid-cols-2 gap-1">
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
        )}
        {archivoSeleccionado.localizacionAccesoControl && (
          <div className="p-2 border-2 rounded border-blue-gray-400">
            <span className="absolute px-1 -mt-5 text-xs font-bold bg-white">
              Localizacion Acceso y Control
            </span>
            <Typography
              className="flex items-center p-2 mx-auto mt-2 text-xs bg-blue-gray-200"
              variant="h5"
            >
              <TiChevronRight className="inline-flex text-base" />{" "}
              <div className="grid grid-cols-2 gap-1">
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
        )}
      </div>
      <ArrowUturnLeftIcon
        onClick={() => {
          window.history.back();
        }}
        className="w-8 bg-[#1a3a67] text-white p-1 rounded fixed bottom-4 left-4 cursor-pointer"
      />
    </div>
  );
};

export default DetalleArchivo;
