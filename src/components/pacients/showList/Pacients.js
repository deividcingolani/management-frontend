import React, { useEffect, useState } from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import { faEdit, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PacientModal } from "../showPacient/PacientModal";

export const Pacients = () => {
  const [openModalPacient, setOpenModalPacient] = useState(false);
  const initialized = useSelector(state => state.pacients.initialized);
  const pacients = useSelector(state => state.pacients.pacients);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const sizePage = 6;

  /* This is for call to get data when the app is not inialized */
  useEffect(() => {
    if (!initialized) {
      dispatch(actions.initPacients());
    }
  });
  let active = page;
  let items = [];
  for (let number = 1; number <= pacients.length / sizePage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => (number === active ? "" : setPage(number))}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
  const pacientsShow = pacients.filter(pacient => {
    return pacient.id > (page - 1) * sizePage && pacient.id <= page * sizePage;
  });

  const pacientsRender = pacientsShow.map((pacient, key) => {
    console.log(pacient);

    return (
      <tr key={key}>
        <td>{pacient.nombre}</td>
        <td>{pacient.obraSocial}</td>
        <td>{pacient.numObraSocial} </td>
        <td>{pacient.email}</td>
        <td onClick={() => openModal(pacient.id)}>
          <FontAwesomeIcon icon={faNotesMedical} />
        </td>
        <td>
          <Link
            to={{
              pathname: "/createpacient",
              state: {
                id: pacient.id
              }
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </td>
      </tr>
    );
  });

  const openModal = id => {
    toggleModal();
  };

  const toggleModal = () => {
    setOpenModalPacient(!openModalPacient);
  };

  return (
    <div>
      <h3 className="Pacientes-Title">Pacientes</h3>
      <Link to="/createpacient">
        <Button className="button-paciente">Crear Paciente</Button>
      </Link>
      <PacientModal openModal={openModalPacient} closeModal={toggleModal} />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Obra Social</th>
            <th>Nro identificacion</th>
            <th>Email</th>
            <th>Detalles</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>{pacientsRender}</tbody>
      </Table>
      {paginationBasic}
    </div>
  );
};
