import React from "react";
import { Badge, Card, ListGroup } from "react-bootstrap";

const CardPelicula = (peliculas, index) => {
  return (
    <section className="col-6">
      <Card
        border="primary"
        // style={{ width: "18rem" }}
        className="bg-warning m-2"
      >
        <Card.Header>
          <h4>
            <Badge bg="success" className="text-dark">
              {peliculas.peliculas.genero}
            </Badge>
          </h4>
        </Card.Header>
        <Card.Body>
          <Card.Title className="display-4">
            {peliculas.peliculas.titulo}
          </Card.Title>
          <Card.Text className="fz-light">
            {peliculas.peliculas.descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CardPelicula;
