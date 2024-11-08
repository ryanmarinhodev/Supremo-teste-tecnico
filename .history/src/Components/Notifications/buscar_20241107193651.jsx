import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FiSearch, FiFilter } from "react-icons/fi";

const BarraBusca = ({ search, setSearch }) => (
  return (

    <div className="d-flex mb-4">
    <InputGroup className="me-2">
      <FormControl
        placeholder="Buscar por título ou mensagem"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="outline-primary">
        <FiSearch />
      </Button>
    </InputGroup>
    <Button variant="outline-secondary" className="ms-2">
      <FiFilter /> Filtros
    </Button>
  </div>
      )
);

export default BarraBusca;
