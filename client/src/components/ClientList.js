import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClientList = ({ URL, setData }) => {
  const [clientList, setClientList] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(URL).then(res => setClientList(res.data));
  }, [clientList]);

  const deleteClient = id => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => axios.get(URL).then(res => setClientList(res.data)))
      .catch(er => console.log(er));
  };
  const updateClient = ({
    id,
    name,
    lastName,
    identificationDocument,
    telephone,
    email,
    password,
    address,
  }) => {
    setData(
      {id,
      name,
      lastName,
      identificationDocument,
      telephone,
      email,
      password,
      address}
    );
    navigate('/addclient')
  };

  return (
    <div className="client-info">
      <h2>Lista de Clientes</h2>

      {clientList.clients?.map(client => (
        <div key={client.id} className="client-info-ul">
          <li>
            <strong>Nombre: </strong>
            {client.name}{' '}
          </li>
          <li>
            <strong>Apellido: </strong>
            {client.lastName}{' '}
          </li>
          <li>
            <strong>D.I: </strong>
            {client.identificationDocument}{' '}
          </li>
          <li>
            <strong>Telefono: </strong>
            {client.telephone}{' '}
          </li>
          <li>
            <strong>Correo: </strong>
            {client.email}{' '}
          </li>
          <li>
            <strong>Contraseña: </strong>
            {client.password}{' '}
          </li>
          {client.address && (
            <li>
              <strong>Dirección: </strong>
              {client.address}{' '}
            </li>
          )}
          <button
            onClick={() => deleteClient(client.id)}
            className="delete-button"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button
            onClick={() => updateClient(client)}
            className="update-button"
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClientList;
