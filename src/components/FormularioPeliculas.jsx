import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const usePeliculas = () => {
  const pelis = JSON.parse(localStorage.getItem("pelis")) || [];

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  const peliculas = [
    { titulo: titulo, descripcion: descripcion, genero: genero },
  ];

  const [listaPeliculas, setListaPeliculas] = useState(pelis);

  const handleSubmit = (event) => {
    (event) => event.preventDefault(event);
    setListaPeliculas([...listaPeliculas, peliculas]);
    setTitulo("");
    setDescripcion("");
    setGenero("");
    pelis.push(peliculas);
    localStorage.setItem("pelis", JSON.stringify(pelis));
    event.reset();
  };

  return {
    titulo,
    setTitulo,
    setDescripcion,
    setGenero,
    descripcion,
    genero,
    setListaPeliculas,
    listaPeliculas,
    handleSubmit,
  };
};

const FormularioPeliculas = () => {
  const arregloPeliculas = usePeliculas();

  return (
    <Container>
      <Form onSubmit={arregloPeliculas.handleSubmit}>
        <FormGroup className="d-flex row border border-2 border-info bg-primary rounded-3 pt-4">
          <article className="col-7 mb-3">
            <FormControl
              type="text"
              placeholder="Titulo de la pelicula"
              autoFocus
              defaultValue={arregloPeliculas.titulo}
              onChange={(e) => arregloPeliculas.setTitulo(e.target.value)}
            ></FormControl>
          </article>
          <article className="col-5 d-flex text-center mb-3">
            <Form.Select
              aria-label="Default select example"
              className="text-center border-dark"
              placeholder="Genero"
              value={arregloPeliculas.genero}
              onChange={(e) => arregloPeliculas.setGenero(e.target.value)}
              aria-required
            >
              <option>Elige el Genero</option>
              <option value="Comedia">Comedia</option>
              <option value="Drama">Drama</option>
              <option value="Infantil">Infantil</option>
            </Form.Select>
          </article>
          <article className=" mb-3">
            <FormControl
              as="textarea"
              rows={3}
              placeholder="Descripcion de la pelicula"
              defaultValue={arregloPeliculas.descripcion}
              onChange={(e) => arregloPeliculas.setDescripcion(e.target.value)}
              required
            ></FormControl>
          </article>
          <article className="text-end mb-3">
            <Button variant="warning" type="submit">
              Subir
            </Button>
          </article>
        </FormGroup>
        <ListaPeliculas
          listaPeliculas={arregloPeliculas.listaPeliculas}
        ></ListaPeliculas>
      </Form>
    </Container>
  );
};

export default FormularioPeliculas;
