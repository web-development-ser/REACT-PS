import React from 'react'

class ThisProps extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            vots: 876,
            carga: "AC - DC"
        }

    }
        render() {
            return(
                <div>
                    <h1>Informacoes: {this.state.vots}</h1>
                    <h2>Carga: {this.state.carga}</h2>
                </div>
            )
        }


}

export default ThisProps