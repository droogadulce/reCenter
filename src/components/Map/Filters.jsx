import React from 'react';
import { Button , ButtonGroup , Dropdown , DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../assets/styles/Map/Filters.scss';

const Filters = ({ tags }) => (
  <section className="filtro">
    <p>Filtra por lo que más te llame la atención:</p>
    <ButtonGroup  size="sm">
      <Button>Guardado</Button>
      <Button>Abierto ahora</Button>
      <Button>Recompensa</Button>
      <DropdownButton as={ButtonGroup} title="Categorias">
        {tags.map( item => (
          <Dropdown.Item key={item.id} >{item.tag}</Dropdown.Item>
        ))}
      </DropdownButton>
    </ButtonGroup>
  </section>
);

const mapStateToProps = state => {
  return {
    tags: state.garbageTags,
  };
};

export default connect(
  mapStateToProps,
  null
)(Filters);