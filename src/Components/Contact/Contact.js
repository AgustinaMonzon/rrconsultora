import React, { useState } from "react";
import Dropzone from "react-dropzone";
import swal from "sweetalert";
import PDFViewer from "pdf-viewer-reactjs";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    pdf: null,
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name + "Error"]: "",
    });
  };

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 1) {
      const pdfFile = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, pdf: reader.result });
      };
      reader.readAsDataURL(pdfFile);
    } else {
      swal("Solo puede subir un archivo PDF", "", "error");
    }
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!formData.name) {
      nameError = "Por favor ingrese su nombre";
    }

    if (!formData.email) {
      emailError = "Por favor ingrese su correo electrónico";
    }

    if (!formData.message) {
      messageError = "Por favor escriba su mensaje";
    }

    if (nameError || emailError || messageError) {
      setErrors({ nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      // Send email
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact">
        <h2 className="contact-title">Contáctanos</h2>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          {!formData.name && errors.nameError && (
            <span className="form-error">{errors.nameError}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {!formData.email && errors.emailError && (
            <span className="form-error">{errors.emailError}</span>
          )}
          <textarea
            name="message"
            placeholder="Escribe tu mensaje"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
          />
          {!formData.message && errors.messageError && (
            <span className="form-error">{errors.messageError}</span>
          )}
          <div className="dropzone">
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    Arrastra y suelta un archivo aquí, o haz clic para
                    seleccionar un archivo
                  </p>
                </div>
              )}
            </Dropzone>
            {formData.pdf && (
              <div className="pdf-preview">
                <PDFViewer
                  document={{
                    data: formData.pdf,
                  }}
                  hideRotation={true}
                  hideToolbar={true}
                  css="pdf-viewer"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          Enviar Email
        </button>
      </div>
    </form>
  );
};
export default Contact;
