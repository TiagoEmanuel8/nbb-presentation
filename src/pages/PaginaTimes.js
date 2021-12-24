import React from 'react';
// import { Link } from 'react-router-dom';

class PaginaTimes extends React.Component {
  render() {
    const { databaseTeams } = this.props;
    console.log(databaseTeams);
    return(
      <section>
        <p>pagina principal de times</p>
        {databaseTeams.map((team) => (
          <div>
            <p>{team.nome}</p>
            <img src={team.imagem} alt="imagem de times" />
          </div>
        ))}
      </section>
    )
  }
};

export default PaginaTimes;
