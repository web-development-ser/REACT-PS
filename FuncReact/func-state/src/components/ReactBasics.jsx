import React from 'react'

export default class ReactBasics extends React.Component {

    constructor(props) {
        super(props)
        //Aqui inserimos um pequeno texto em uma das tags.
            this.state = { color: "vermelho" }
    }

    render () {
        //Aqui atualizamos a tag com outro texto...
        const azul = this.state.color = 'azul'
        return (
            <div>
                {/*Aqui estamos pegando valor de texto, em outro aquivo.*/}
                <h3>Recomecando Aprendizado... {this.props.name} </h3>
                {/*Aqui estamos pegando valor ja atualizado...*/}
                <p>Cor: {this.state.color}</p>
            </div>

        )
    }
}