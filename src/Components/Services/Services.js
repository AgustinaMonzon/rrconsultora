import React from "react";
import "./Services.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Services() {
  const servicios = [
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web a medida para tus necesidades, utilizando las últimas tecnologías y prácticas recomendadas.",
      image:
        "https://www.creative4all.com/blog/blog/file/uploads/2019/04/how-creative-4-all-can-help-your-business-with-marketing.jpg",
    },
    {
      title: "Diseño Gráfico",
      description:
        "Diseñamos logotipos, banners, flyers y todo tipo de material gráfico para promocionar tu negocio.",
      image: "https://biospectrumasia.com/uploads/articles/1-12026.jpg",
    },
    {
      title: "Marketing Digital",
      description:
        "Creamos estrategias de marketing digital para aumentar la visibilidad de tu marca y generar más ventas.",
      image:
        "https://www.peninsulagrouplimited.com/media/1268/payroll-advice-small-2.jpg",
    },
  ];

  return (
    <div>
      {" "}
      <NavBar />
      <div className="services">
        <h2>Servicios</h2>
        <ul>
          {servicios.map((servicio, index) => (
            <li key={index}>
              <div className="service-card">
                <img src={servicio.image} alt={servicio.title} />
                <h3 className="service-title">{servicio.title}</h3>
                <p className="service-description">{servicio.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
