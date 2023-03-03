import React from "react";
import "./SoyCandidato.css";

function SoyCandidato() {
  return (
    <div className="soy-candidato">
      <h2>Soy candidato</h2>
      <ul>
        <li>
          <h3>Asesoría Laboral</h3>
          <p>
            Brindamos asesoría a nuestros clientes en temas laborales, como la
            elaboración de contratos, la gestión de relaciones laborales, el
            cumplimiento de leyes y regulaciones laborales, entre otros temas.
          </p>
        </li>
        <li>
          <h3>Confección de CVs</h3>
          <p>
            Sabemos que el CV es la primera impresión que los empleadores tienen
            de los candidatos, por lo que nos aseguramos de que el CV de
            nuestros clientes sea profesional, claro y convincente. Nos
            encargamos de elaborar CVs personalizados para cada candidato,
            destacando sus habilidades, experiencia y logros.
          </p>
        </li>
        <li>
          <h3>Servicio de armado de LinkedIn</h3>
          <p>
            LinkedIn es una herramienta poderosa para la búsqueda de empleo y la
            construcción de redes profesionales. Nuestra consultora ofrece un
            servicio de armado de perfiles de LinkedIn para nuestros clientes,
            asegurándonos de que su perfil sea atractivo y destacando su
            experiencia y habilidades.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SoyCandidato;
