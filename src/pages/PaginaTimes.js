import React from 'react';
import { Link } from 'react-router-dom';

class PaginaTimes extends React.Component {
  render() {
    const { databaseTeams } = this.props;
    console.log(databaseTeams);
    return(
      <section>
        <p>pagina principal de times</p>
        {
          databaseTeams.map((team) => (
            <div>
              <Link to={`/team/${team.id}`}>{
                <div>
                  <p>{team.nome}</p>
                  <img src={team.imagem} alt="imagem de times" />
                </div>
                }
              </Link>
            </div>
          ))
        }
      </section>
    )
  }
};

export default PaginaTimes;
