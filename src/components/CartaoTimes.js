import React from 'react';
import '../css/componenteCartao.css'

class CartaoTime extends React.Component {
  render() {
    const { dadosTime } = this.props;
    return (
      <div className='detalhes-time'>
      <img alt="imagem de times" src={`../${dadosTime.imagem}`} />
         <div className='texto-time'>
            <p className={`texto-${dadosTime.nome}`}>{ `Nome: ${dadosTime.nome}` }</p>
            <p className={`texto-${dadosTime.nome}`}>{ `Nome Completo: ${dadosTime.nomeCompleto}` }</p>
            <p className={`texto-${dadosTime.nome}`}>{ `Ano de fundação: ${dadosTime.fundacao}` }</p>
            <p className={`texto-${dadosTime.nome}`}>{ `Mascote: ${dadosTime.mascote}` }</p>
            <p className={`texto-${dadosTime.nome}`}>{ `Localização: ${dadosTime.localizacao}` }</p>
            <p className={`texto-${dadosTime.nome}`}>{ `Arena: ${dadosTime.arena}` }</p>
            <p className={`texto-${dadosTime.nome}`}>{ `Capacidade da Arena: ${dadosTime.capacidadeArena}` }</p>
            <p className={`texto-${dadosTime.nome}`}>{ `Material Esportivo: ${dadosTime.materialEsportivo}` }</p>
         </div>
      </div>
    );
  }
}

export default CartaoTime;
