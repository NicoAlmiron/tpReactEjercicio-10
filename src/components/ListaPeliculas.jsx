import React from "react";
import { ListGroup } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = (listaPeliculas) => {
  return (
    <ListGroup className="d-flex flex-row flex-wrap">
      {listaPeliculas.listaPeliculas.map((listaPeliculas, index) =>
        listaPeliculas.map((peliculas, i) => (
          <CardPelicula
            key={i}
            peliculas={peliculas}
            index={index}
          ></CardPelicula>
        ))
      )}
    </ListGroup>
  );
};

export default ListaPeliculas;
