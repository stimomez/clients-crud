import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inputs = ({ URL, data, setData, reset }) => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  

  const submit = e => {
    e.preventDefault();

    if (data.id) {
      axios
        .patch(`${URL}/${data.id}`, data)
        .then(res => reset())
        .catch(er => console.log(er))
        .finally(navigate('/clients'));
    } else {
      setData({ ...data, documentPdf: file });
      const formData = new FormData();
      formData.append('documentPdf', data);

      console.log(formData);
      console.log(data);
      axios
        .post(URL, data)
        .then(res => reset())
        .catch(er => console.log(er))
        .finally(navigate('/clients'));
    }
  };

  return (
    <div>
      <h2>Cliente</h2>
      <div className="container-form">
        <form
          id="form"
          // method='post'
          className="container-form-fields"
          onSubmit={submit}
          // encType="multipart/form-data"
        >
          <div className="container-form-fields">
            <label htmlFor="name">Nombre :</label>

            <input
              id="name"
              type="text"
              maxLength="30"
              required
              placeholder="Nombre"
              value={data.name}
              onChange={e => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="container-form-fields">
            <label htmlFor="last-name">Apellido :</label>

            <input
              id="last-name"
              maxLength={'30'}
              type="text"
              required
              placeholder="Apellido"
              value={data.lastName}
              onChange={e => setData({ ...data, lastName: e.target.value })}
            />
          </div>
          <div className="container-form-fields">
            <label htmlFor="identification">D.I. : </label>

            <input
              id="identification"
              type="number"
              required
              placeholder="D.I."
              max={'999999999999'}
              value={data.identificationDocument}
              onChange={e =>
                setData({ ...data, identificationDocument: e.target.value })
              }
            />
          </div>
          <div className="container-form-fields">
            <label htmlFor="upload-pdf">Cargar D. :</label>

            <input
              id="updload-pdf"
              type="file"
              // required
              // value={data.telephone}
              onChange={e => {
                setData({ ...data, documentPdf: e.target.value });
              }}
            />
          </div>
          <div className="container-form-fields">
            <label htmlFor="telephone">Telefono :</label>

            <input
              id="telephone"
              type="number"
              required
              max={'999999999999'}
              placeholder="Telefono"
              value={data.telephone}
              onChange={e => setData({ ...data, telephone: e.target.value })}
            />
          </div>
          <div className="container-form-fields">
            <label htmlFor="email">Correo :</label>

            <input
              id="email"
              type="email"
              required
              placeholder="Correo"
              value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="container-form-fields">
            <label htmlFor="password">Contraseña :</label>

            <input
              id="password"
              type="password"
              required
              minLength={'8'}
              maxLength={'12'}
              placeholder="Contraseña"
              value={data.password}
              onChange={e => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="container-form-fields">
            <label htmlFor="address">Dirección :</label>

            <input
              id="address"
              type="text"
              maxLength={'50'}
              placeholder="Dirección"
              value={data.address}
              onChange={e => setData({ ...data, address: e.target.value })}
            />
          </div>

          <div className="container-form-fields">
            {data.id ? (
              <button type="submit">editar</button>
            ) : (
              <button type="submit">guardar</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inputs;
