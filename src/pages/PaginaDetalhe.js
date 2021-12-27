import React from 'react';
import '../css/paginaDetalhe.css'

class PaginaDetalhe extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const { databaseTeams } = this.props;
    const timeAtual = databaseTeams[id - 1];
    return(
      <section className='detalhes-time'>
         <img alt="imagem de times" src={`../${timeAtual.imagem}`} />
         <div className='texto-time'>
          <p className={`time-${timeAtual.nome}`}>{ `Nome: ${timeAtual.nome}` }</p>
          <p className={`time-${timeAtual.nome}`}>{ `Nome Completo: ${timeAtual.nomeCompleto}` }</p>
          <p className={`time-${timeAtual.nome}`}>{ `Ano de fundação: ${timeAtual.fundacao}` }</p>
          <p className={`time-${timeAtual.nome}`}>{ `Mascote: ${timeAtual.mascote}` }</p>
          <p className={`time-${timeAtual.nome}`}>{ `Localização: ${timeAtual.localizacao}` }</p>
          <p className={`time-${timeAtual.nome}`}>{ `Arena: ${timeAtual.arena}` }</p>
          <p className={`time-${timeAtual.nome}`}>{ `Capacidade da Arena: ${timeAtual.capacidadeArena}` }</p>
          <p className={`time-${timeAtual.nome}`}>{ `Material Esportivo: ${timeAtual.materialEsportivo}` }</p>
         </div>
      </section>
    )
  }
};

export default PaginaDetalhe;
