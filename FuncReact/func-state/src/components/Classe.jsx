import React from 'react'

export default class Classe extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h3>Vamos cordar: {this.props.esclh}</h3>
                <h4>Usando this.props.nomeQualq...</h4>
            </div>
        )
    }
}
