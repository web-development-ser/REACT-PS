function HelloTes(props) {
    return(
        <div>
            <span>Hello Mundo...</span>
            <br/>
            <span>Vamos: {props.name}</span>
            <h1>Hello, alcance de: {props.age}</h1>
        </div>
    )
}

export default HelloTes