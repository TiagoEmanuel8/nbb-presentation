import React from 'react';
import { Link } from 'react-router-dom';
import '../css/paginaTimes.css'

class PaginaTimes extends React.Component {
  render() {
    const { databaseTeams } = this.props;
    return(
      <section className='pagina-times'>
        <p className='title'>Clique na imagem dos times para conhecer os detalhes</p>
        <div className='container-imagens'>
          {
            databaseTeams.map((team) => (
                <Link to={`/team/${team.id}`}>{
                    <img src={ team.imagem } alt="imagem-times-nbb" />
                  }
                </Link>
            ))
          }
            </div>
      </section>
    )
  }
};

export default PaginaTimes;
