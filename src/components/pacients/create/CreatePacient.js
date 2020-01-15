import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./CreatePacient.scss";

export function CreatePacient(props) {
  const { register, handleSubmit, setValue } = useForm();
  const pacients = useSelector(state => state.pacients.pacients);
  const [redirect, setRedirect] = useState(false);

  let idPacient;
  let pacientSelected;

  if (props.location.state !== undefined && props.location.state.id !== null) {
    idPacient = props.location.state.id;
    pacientSelected = pacients.filter(pacient => pacient.id === idPacient);
    pacientSelected = pacientSelected[0];
    console.log(pacientSelected);
  }

  /*Obras Sociales  */
  const optionsOSocial = [
    { value: "0", label: "IOMA" },
    { value: "1", label: "Swiss Medical" },
    { value: "2", label: "PAMI" }
  ];

  /*Obras Sociales  */
  const optionsDocumento = [
    { value: "0", label: "DNI" },
    { value: "1", label: "LC" },
    { value: "2", label: "LE" },
    { value: "3", label: "PASAPORTE" }
  ];

  const onSubmit = data => {
    setRedirect(true);
  };

  return (
    <React.Fragment>
      <h1 className="header-CreatePaciente">
        {idPacient === undefined ? "Nuevo Paciente" : "Editar Paciente"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-Paciente">
        {redirect && <Redirect to="/pacient" />}

        <div className="row">
          {/* First Name */}
          <div className="form-group  col-md-5">
            <label htmlFor="firstname">Nombre</label>
            <input
              name="firstname"
              className="form-control"
              type="text"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.nombre : ""
              }
            />
          </div>

          {/* Last Name */}
          <div className="form-group  col-md-5">
            <label htmlFor="lastname">Apellido</label>
            <input
              name="lastname"
              className="form-control"
              type="text"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.nombre : ""
              }
            />
          </div>
        </div>
        <div className="row">
          {/* nro Celular */}
          <div className="form-group  col-md-5">
            <label htmlFor="nroTelefono">Telefono</label>
            <input
              name="nroTelefono"
              className="form-control"
              type="tel"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.telefono : ""
              }
            />
          </div>
          {/* nro Celular */}
          <div className="form-group  col-md-5">
            <label htmlFor="nrocelular">Celular</label>
            <input
              name="nrocelular"
              className="form-control"
              type="tel"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.telefono : ""
              }
            />
          </div>
        </div>

        <div className="row">
          {/* Fecha de nacimiento */}
          <div className="form-group  col-md-5">
            <label htmlFor="birthdate">Fecha de Nacimiento</label>
            <input
              name="birthdate"
              className="form-control"
              type="date"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.fechaNacimiento : ""
              }
            />
          </div>
          {/* EMAIL */}
          <div className="form-group  col-md-5">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="form-control"
              type="email"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.email : ""
              }
            />
          </div>
        </div>
        <div className="row">
          {/* Tipo de Documento */}
          <div className="form-group  col-md-5">
            <label htmlFor="tdocumento">Tipo de Documento</label>
            <RHFInput
              as={<Select options={optionsDocumento} />}
              rules={{ required: true }}
              name="tdocumento"
              register={register}
              setValue={setValue}
              defaultValue={optionsDocumento[0]}
            />
          </div>

          {/* Numero de Documento */}
          <div className="form-group  col-md-5">
            <label htmlFor="nrodocumento">Numero de Documento</label>
            <input
              name="nrodocumento"
              className="form-control"
              type="text"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.numDocumento : ""
              }
            />
          </div>
        </div>
        <div className="row">
          {/* Tipo de Obra Social */}
          <div className="form-group  col-md-5">
            <label htmlFor="osocial">Tipo de Obra Social</label>
            <RHFInput
              as={<Select options={optionsOSocial} />}
              rules={{ required: true }}
              name="osocial"
              register={register}
              setValue={setValue}
              defaultValue={optionsOSocial[0]}
            />
          </div>

          {/* Numero de Obra Social */}
          <div className="form-group  col-md-5">
            <label htmlFor="nroosocial">Numero de Obra Social </label>
            <input
              name="nroosocial"
              className="form-control"
              type="text"
              ref={register}
              defaultValue={
                pacientSelected !== undefined ? pacientSelected.numObraSocial : ""
              }
            />
          </div>
        </div>
        <div className="button-paciente">
          <Link to="/pacient" className="col-md-5">
            <Button variant="danger" className="btn-text col-md-12">
              Cancelar
            </Button>
          </Link>
          <Button variant="success" type="submit" className="btn-text col-md-5">
            Aceptar
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
