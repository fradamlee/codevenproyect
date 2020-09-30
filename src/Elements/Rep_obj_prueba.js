import React from "react";
import "./Lienzo";
import Lienzo from "./Lienzo";

class RepObjPrueba extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pack: ["v", "b", "c"]
        }
    }


    Change = () => {
        this.setState({
            pack: ["Marte", "Jupiter", "Saturno"],
        })
    }

    render() {

        return (<div>
            <h1>Lienzo</h1>
            <button onClick={this.Change}>Boton</button>
            <h2>{this.state.pack}</h2>
            <Lienzo pack={this.state.pack} />
            {/* <Lienzo className="Boton" JSON="JSON" archivo="archivo" /> */}

        </div>)

    }

}

export default RepObjPrueba;