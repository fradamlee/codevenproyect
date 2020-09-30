
import React from "react";
import "./Lienzo";
import Lienzo from "./Lienzo";


class RepObjPrueba extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pack: ["v", "b", "c"],
            clickPress: false
        }
    }

    ChangeBoton = () => {
        this.setState({
            pack: ["Boton",
                [
                    "boton4",
                    100,
                    30,
                    true,
                    "print('evento')"
                ]
                , "boton.js"],
        })
    }

    ChangeImagen = () => {
        this.setState({
            pack: ["Boton",
                [
                    "boton4",
                    100,
                    30,
                    true,
                    "print('evento')"
                ]
                , "boton.js"],
        })
    }

    ChangeTexto = () => {
        this.setState({
            pack: ["Boton",
                [
                    "boton4",
                    100,
                    30,
                    true,
                    "print('evento')"
                ]
                , "boton.js"],
        })
    }

    render() {

        return (<div>
            <h1>Lienzo</h1>
            <button onMouseDown={this.ChangeBoton, this.state.clickPress = true}>Boton</button>
            <button onMouseDown={this.ChangeImagen, this.state.clickPress = true}>Imagen</button>
            <button onMouseDown={this.ChangeTexto, this.state.clickPress = true}>Texto</button>
            <h2>{this.state.pack}</h2>
            <Lienzo pack={this.state.pack} clickPress={this.state.clickPress = false} />
            {/* <Lienzo className="Boton" JSON="JSON" archivo="archivo" /> */}

        </div>)

    }

}

export default RepObjPrueba;



// import React from "react";
// import "./Lienzo";
// import Lienzo from "./Lienzo";

// class RepObjPrueba extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             pack: ["v", "b", "c"]
//         }
//     }



//     ChangeBoton = () => {
//         this.setState({
//             pack: ["Marte", "Jupiter", "Saturno"],
//         })
//     }

//     ChangeImagen = () => {
//         this.setState({
//             pack: ["Marte", "Jupiter", "Saturno"],
//         })
//     }

//     ChangeTexto = () => {
//         this.setState({
//             pack: ["Marte", "Jupiter", "Saturno"],
//         })
//     }

//     render() {

//         return (<div>
//             <h1>Lienzo</h1>
//             <button onClick={this.ChangeBoton}>Boton</button>
//             <button onClick={this.ChangeImagen}>Imagen</button>
//             <button onClick={this.ChangeTexto}>Texto</button>
//             <h2>{this.state.pack}</h2>
//             <Lienzo pack={this.state.pack} />
//             {/* <Lienzo className="Boton" JSON="JSON" archivo="archivo" /> */}

//         </div>)

//     }

// }

// export default RepObjPrueba;