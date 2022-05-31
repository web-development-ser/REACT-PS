import React from 'react'

export default class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.modelo = 'HRV'

        this.state = {
            ligado: false,
            velAtual: 0,
            cor: 'vermelho'
        }
    }

    ligarDesligar () {
        //this.state.ligado = true
        this.setState({ligado: !this.state.ligado})
    }

    render() {
        return(
            <div>
                <h2>Variavel</h2>
                <h1>Meu carro: {this.modelo}</h1>

                <p>Ligado: {this.state.ligado ? 'sim' : 'nao'}</p>
                <p>vel.Atual: {this.state.velAtual}</p>
                <p>cor: {this.state.cor}</p>


                <button onClick={() => { this.ligarDesligar()}}>
                    {this.state.ligado ? 'Ligado' : 'Desligado'}
                </button>

            </div>
        )
        }
}