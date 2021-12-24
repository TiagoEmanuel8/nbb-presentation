import React from 'react';

class PaginaDetalhe extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const { databaseTeams } = this.props;
    const timeAtual = databaseTeams[id - 1];
    return(
      <section>
         <p>{ `Nome: ${timeAtual.nome}` }</p>
         <p>{ `Nome Completo: ${timeAtual.nomeCompleto}` }</p>
         <p>{ `Ano de fundação: ${timeAtual.fundacao}` }</p>
         <p>{ `Mascote: ${timeAtual.mascote}` }</p>
         <p>{ `Localização: ${timeAtual.localizacao}` }</p>
         <p>{ `Arena: ${timeAtual.arena}` }</p>
         <p>{ `Capacidade da Arena: ${timeAtual.capacidadeArena}` }</p>
         <p>{ `Material Esportivo: ${timeAtual.materialEsportivo}` }</p>
         <img alt="imagem de times" src={`../${timeAtual.imagem}`} />

      </section>
    )
  }
};

export default PaginaDetalhe;
