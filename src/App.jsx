import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPeliculas from "./components/FormularioPeliculas";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <article>
          <h3 className="text-center display-2 my-4">Alta De Peliculas</h3>
        </article>
        <FormularioPeliculas></FormularioPeliculas>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <p>Todos los derechos reservados &copy; 2023 </p>
      </footer>
    </>
  );
}

export default App;
