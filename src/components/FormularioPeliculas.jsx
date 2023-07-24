import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";

const FormularioPeliculas = () => {
  return (
    <Container>
      <Form>
        <FormGroup className="d-flex row">
          <article className="col-5 mb-3">
            <FormControl
              type="text"
              placeholder="Titulo de la pelicula"
              autoFocus
            ></FormControl>
          </article>
          <article className="col-7 mb-3">
            <FormControl
              type="textarea"
              placeholder="Descripcion de la pelicula"
            ></FormControl>
          </article>
          <article className="d-flex text-center mb-3">
            <Form.Select className="text-center">
              <option value="1">Comedia</option>
              <option value="2">Drama</option>
              <option value="3">Infantil</option>
            </Form.Select>
          </article>
          <article className="text-end mb-3">
            <Button variant="warning">Subir</Button>
          </article>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default FormularioPeliculas;
