
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
                    30,
                    100,
                    true,
                    "console.log('evento')",
                    "000000",
                ]
                , "boton.js"],
        },
        )
        this.state.clickPress = true
    }

    ChangeImagen = () => {
        this.setState({
            pack: ["Imagen",
                [
                    "imagen3",
                    250,
                    350,
                    true,
                    "",
                    "https://images.app.goo.gl/JhLe5WTJotxGBXvF9"
                ]
                , "boton.js"],
        },
        );
        this.setState({
            clickPress: true
        })
    }

    ChangeTexto = () => {
        this.setState({
            pack: ["Texto",
                [
                    "texto7",
                    50,
                    300,
                    true,
                    "",
                    "Eso es un texto"
                ]
                , "texto.js"],
        });
        this.setState({
            clickPress: true
        })
    }

    render() {

        return (<div>
            <h1>Lienzo</h1>
            <button onMouseDown={this.ChangeBoton}>Boton</button>
            <button onMouseDown={this.ChangeImagen}>Imagen</button>
            <button onMouseDown={this.ChangeTexto}>Texto</button>
            <h2>{this.state.pack}</h2>
            <h1>{this.state.clickPress}</h1>
            <Lienzo pack={this.state.pack} clickPress={this.state.clickPress} />
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