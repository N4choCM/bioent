import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { AppStateContext } from "../../../src/state/AppProvider";
import { useContext } from "react";
import { Zoom } from 'react-reveal';

const Contact = () => {
  const appStateContext = useContext(AppStateContext);
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Por favor, complete todos los campos antes de enviar el mensaje.',
      });
      return;
    }
// TODO: ENV
    emailjs
      .sendForm(
        'service_89cln0h',
        'template_s1xz6ar',
        form.current,
        'Bfwqi2sxD8k6UGO6W'
      )
      .then(
        () => {
          setAlert({
            show: true,
            type: 'success',
            message: '¡Email enviado correctamente!',
          });
          form.current.reset();

          setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
          }, 5000);
        },
        (error) => {
          setAlert({
            show: true,
            type: 'error',
            message: 'Email no enviado. Por favor, inténtelo de nuevo.',
          });
          console.log('FAILED...', error.text);

          setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
          }, 5000);
        }
      );
  };

  return (
    <div
      id="contact"
      className="carousel slide carousel-fade anchor"
      data-bs-ride="carousel"
    >
      <div className="container-fluid">
        {alert.show && (
          <div className="alert-container">
            <Alert
              icon={alert.type === 'success' ? <CheckIcon fontSize="inherit" /> : <CloseIcon fontSize="inherit" />}
              severity={alert.type}
              onClose={() => setAlert({ show: false, type: '', message: '' })}
            >
              {alert.message}
            </Alert>
          </div>
        )}
        <form
          className="row needs-validation mx-auto"
          noValidate
          ref={form}
          onSubmit={sendEmail}
        >
          <Zoom>
            <div className="col-10 col-md-8 offset-1 offset-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                required
                name="name"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="col-10 col-md-8 offset-1 offset-md-2 mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="example@example.com"
                required
                name="email"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="col-10 col-md-8 offset-1 offset-md-2 mt-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Hola, os escribo para..."
                required
                name="message"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="col-10 col-md-8 offset-1 offset-md-2 mt-3 d-grid">
              <button
                className={`btn btn-bioent text-white custom-shadow-${appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"}`}
                type="submit"
                value="Send"
              >
                Enviar
              </button>
            </div>
          </Zoom>
        </form>
      </div>
    </div>
  );
};

export default Contact;
