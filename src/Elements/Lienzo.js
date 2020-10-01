import React from "react";
import MainUserCode from "../UserCode/main"
import InfoObjetoPrueba from "./Info_obj_prueba";
import "./Rep_obj_prueba";

// Esta variable indica la el scroll de la patalla, está para ajustar las coordendas si se hace scroll
var scrollWindow = 0;
// Jesus cambia el valor de está variable si quieres ajustar el ancho del lienzo, para ver el tamaño original dejalo en 1000 y media pantalla 0
var ancho = 1000; // <-----
// var mouseup = false;

// Escucha scroll de la patalla
window.addEventListener("scroll", ScrollWindow);

// Escucha el eventoMouseUp
// window.addEventListener("mouseup", MouseUp);

// function MouseUp() {
//     console.log("Se ha soltado el clic");
//     mouseup = true;
// }

// Funcion doumentar el scroll
function ScrollWindow(evt) {
    scrollWindow = evt.target.scrollingElement.scrollTop
}

// clase Lienzo en React
class Lienzo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 500,
            y: 300,
            pack: props.pack,
            clickPress: props.clickPress,
            scroll: 0,
            infoLienzo: [],
            showInfo: false
        }
    }

    componentWillReceiveProps = (newProps) => {
        this.setState({
            clickPress: newProps.clickPress,
            pack: newProps.pack,
        })
    }

    HacerScroll = (eventos) => {
        eventos.persist();
        this.setState({
            scroll: eventos.target.scrollTop,
        })
    }

    // Este metodo actualiza el valor de x, y, cada que el usuario da clic sostenido y arrasta al lienzo
    ArrastrarAlLienzo = (evt) => {
        if (this.state.clickPress) {
            this.setState({
                x: - evt.clientX + 650 + ancho,
                y: evt.clientY - 234 + this.state.scroll + scrollWindow,
            })
        }
    }

    ColocarEnLienzo = () => {
        // console.log(mouseup);
        // if (mouseup) {
        this.setState({
            infoLienzo: [this.state.x, this.state.y, this.state.pack],
            clickPress: false,
            showInfo: true
        })
        // }
    }

    render() {
        return (<div >
            <div // Esta es la interfaz del lienzo
                // Estos son los eventos del mouse a los que responde
                onMouseMove={this.ArrastrarAlLienzo}
                onMouseUp={this.ColocarEnLienzo}
                // Este evento es para arrastar un elemento desde el propio lienzo
                // onMouseDown={() => { this.state.clickPress = true }}
                onScroll={this.HacerScroll}
                // Estos son los estilos del cuadro del Lienzo
                style={{
                    width: 650 + ancho,
                    height: 800,
                    background: "#FCFCFF",
                    position: "relative",
                    overflowY: "scroll",
                    border: "solid 1px",

                    borderColor: "#D5D5D5"
                }}>

                {/* Esto es un texto de relleno para reprentar la web del usuario en el Lienzo, aqui debería haber un src del MainUserCode sin embargo eso está pendiente, ya que esto es xml y el MainUserCode es html */}
                <h3 style={{ color: "#404040" }}><br /><strong style={{ color: "black", fontFamily: "cursive" }}>What is Lorem Ipsum?</strong> <br />
                    <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><strong style={{ color: "black", fontFamily: "cursive" }}>Why do we use it?</strong><br /><br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><strong style={{ color: "black", fontFamily: "cursive" }}>Where does it come from?</strong><br /><br />
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h3>

                {/* Esto es el cuadro que representa un elemento siendo arrastrado al interior del lienzo     */}
                <div style={{ height: this.state.pack[1][1], width: this.state.pack[1][2], background: "aqua", position: "absolute", display: "table-cell", verticalAlign: "middle", top: this.state.y - (this.state.pack[1][1] / 2), right: this.state.x - (this.state.pack[1][2] / 2), opacity: 0.4 }}><h1> </h1> </div>
                <div style={{ height: 5, width: 5, background: "red", position: "absolute", top: this.state.y, right: this.state.x }}><h1> </h1></div>
            </div>

            {/* Está es una prueba de como enviaría los datos requeridos a traves del state */}
            <InfoObjetoPrueba infoLienzo={this.state.infoLienzo} showInfo={this.state.showInfo} />

            {/* Este es el src del MainUserCode en js, sin embargo hasta ahora no ha funcionado cuando este contiene un innerHTML */}
            <script src={MainUserCode}></script>

            {/* Se actualizan variables originales al cierre */}
            <script>{this.state.showInfo = false /* mouseup = false*/}</script>
        </div>);
    }
}

export default Lienzo;
