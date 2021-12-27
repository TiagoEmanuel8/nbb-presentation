import React from 'react';
import '../css/paginaDetalhe.css';
import CartaoTime from '../components/CartaoTimes';
import CabecalhoDetalhes from '../components/CabecalhoDetalhes';

class PaginaDetalhe extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const { databaseTeams } = this.props;
    const timeAtual = databaseTeams[id - 1];
    return(
      <section className='equipe'>
        <CabecalhoDetalhes key={ timeAtual.nome } dadosTime={ timeAtual } />
        <CartaoTime key={ timeAtual.nome } dadosTime={ timeAtual } />
      </section>
    )
  }
};

export default PaginaDetalhe;
