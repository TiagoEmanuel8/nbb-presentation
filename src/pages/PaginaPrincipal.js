import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/nbb.png';
import '../css/paginaPrincipal.css';

class PaginaPrincipal extends React.Component {
  render() {
    return(
      <section className='container-geral'>
        <div className='container-apresentacao'>
          <img src={ logo } alt="imagem-nbb"/>
          <div className='container-texto'>
            <p>O Novo Basquete Brasil (NBB) é a maior competição de basquete nacional</p>

            <p>Criado em 2008, o NBB tem o reconhecimento da Federação Internacional de Basquete (FIBA)</p>

            <p>A disputa pelo título conta com a temporada regular e os playoffs</p>

            <p>No ano de 2021-2022, 17 equipes estão disputando o título</p>

            <p>Quer conhecer as equipes? clique no botão abaixo</p>
          </div>
        </div>
        <Link to={'/team'}>
          <button>Conheça as equipes</button>
        </Link>
      </section>
    )
  }
};

export default PaginaPrincipal;
