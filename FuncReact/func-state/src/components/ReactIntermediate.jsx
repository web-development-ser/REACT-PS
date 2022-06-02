import React from 'react'

export default class ReactIntermediate extends React.Component {
    constructor(props) {
        super(props)
        //this.state = { color: "Tss" }

        this.state = { count: 0 };
    }

    validCas() {
        this.setState({
            count: this.state.count + 1
        })
    }


    render () {
        return (
            <div>
                <h3>Recomecando Aprendizado... {this.props.name} </h3>
                <p>Contador: {this.state.count}</p>

                <button onClick={this.validCas}>Valid...</button>

            </div>
        )
    }
}