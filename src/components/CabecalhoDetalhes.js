import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cabecalhoDetalhes.css'

class CabecalhoDetalhes extends React.Component {
  render() {
    const { dadosTime } = this.props;
    return(
      <div>
      <Link to={'/team'}>
        <button className={`botao-${ dadosTime.id }`}>conhecer outras equipes</button>
      </Link> 
     </div>
    )
  }
};

export default CabecalhoDetalhes;
