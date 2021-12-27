import React from 'react';
import '../css/componenteCartao.css'

class CartaoTime extends React.Component {
  render() {
    const { dadosTime } = this.props;
    return (
      <div className='detalhes-time'>
      <img
        alt="imagem de times"
        src={`../${dadosTime.imagem}`}
      />
         <div className='texto-time'>
            <p className={`texto-${dadosTime.id}`}>
              { `Nome: ${dadosTime.nome}` }
            </p>
            <p className={`texto-${dadosTime.id}`}>
              { `Nome Completo: ${dadosTime.nomeCompleto}` }
            </p>
            <p className={`texto-${dadosTime.id}`}>
              { `Ano de fundação: ${dadosTime.fundacao}` }
            </p>
            <p className={`texto-${dadosTime.id}`}>
              { `Mascote: ${dadosTime.mascote}` }
            </p>
            <p className={`texto-${dadosTime.id}`}>
              { `Localização: ${dadosTime.localizacao}` }
            </p>
            <p className={`texto-${dadosTime.id}`}>
              { `Arena: ${dadosTime.arena}` }
            </p>
            <p className={`texto-${dadosTime.id}`}>
              { `Capacidade da Arena: ${dadosTime.capacidadeArena}` }
            </p>
            <p className={`texto-${dadosTime.id}`}>
              { `Material Esportivo: ${dadosTime.materialEsportivo}` }
            </p>
         </div>
      </div>
    );
  }
}

export default CartaoTime;
