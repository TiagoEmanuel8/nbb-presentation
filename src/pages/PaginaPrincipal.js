import React from 'react';
import { Link } from 'react-router-dom';

class PaginaPrincipal extends React.Component {
  render() {
    return(
      <section>
        <p>página principal</p>
        <Link to={'/team'}>
        <button>Conheça as equipes</button>
        </Link>
      </section>
    )
  }
};

export default PaginaPrincipal;
