import React from 'react'

class ClassHello extends React.Component {
    render() {
        return(
            <div>
                <h1>Aprendendo sobre React - Class</h1>

                <p>React Js</p>

                <h3>{new Date().toLocaleDateString('pt-BR')}</h3>
            </div>
        )
    }
}

export default ClassHello