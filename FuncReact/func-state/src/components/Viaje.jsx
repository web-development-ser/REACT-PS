import React from 'react'

export default class Viaje extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rua: 'Rosas',
            uf: "CE"
            //Esse aquivo nao esta sendo usado
        }
    }
    existe() {
        this.state.uf = "BR"
    }
    render() {
        return (
            <div>
                <h3>Lugar: {this.props.city}</h3>
                <h4>Hello {this.props.city}</h4>
                <p>Rua: {this.state.rua}</p>


                <p>CE: {this.state.uf}</p>

                <button onClick={() => {this.existe()}}>VALIDD...</button>
            </div>
        )
    }
}