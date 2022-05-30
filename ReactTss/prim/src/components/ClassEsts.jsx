import React from 'react'

class ClassEsts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {nome:""}
        this.changeName = this.changeName.bind(this)

    }


    changeName = (event) => {
            this.setState({nome: event.target.value})
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.nome} onChange={this.changeName}/>
                <p>Hello DEV! {this.state.nome}</p>

                <h4>Nome / Coluna: {this.props.name}</h4>
            </div>
        )
    }
}

export default ClassEsts