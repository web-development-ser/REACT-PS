import React from 'react'

export default class InputEnvio extends React.Component {

    constructor (props) {
        super (props)
        this.state = {cor: "Branco"}
    }

    color () {
        this.setState ({cor: "Azul"})
    }
    render () {
        return (
            <div>
                <h4>Hello mundo...</h4>
                <p>Cor: {this.state.color}</p>
                <button onClick={this.color}>
                    ENVIAR DAS...
                </button>
            </div>
        )
    }
}