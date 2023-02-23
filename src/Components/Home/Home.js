import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="Container">
      <div className="Content">
        <div className="Frase">
          <p>El único sitio dónde</p>
          <h1>EL ÉXITO</h1>
          <p>aparece antes que el trabajo, es en el diccionario.</p>
          <p>Donald M. Kendall.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
