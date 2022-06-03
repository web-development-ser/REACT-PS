import React from "react";
import ReactDOM from "react-dom";

class MyCanponets extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hello mundo / Maps / Aquivos /</h1>
            </div>
        )
    }
}

ReactDOM.render(<MyCanponets />, document.getElementById("root"))