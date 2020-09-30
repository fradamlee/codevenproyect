import React from "react";
import MainUserCode from "../UserCode/main"


var clickPress; // Está variable es true mientras el usuario da un clic sostenido sobre el lienzo
// Estas son las variables que determinan la pocición en coordenadas del mouse



class Lienzo extends React.Component {

    //Por el momento no recibe ninguna props desde el constructor base
    constructor(props) {
        super(props)
        this.state = {
            x: 500,
            y: 300,
            pack: props.pack,
            scroll: 0,

        }
    }

    componentWillReceiveProps = (newProps) => {
        console.log(newProps.pack);
        this.setState({
            pack: newProps.pack,
        })
    }

    HacerScroll = (eventos) => {
        // console.log(eventos.target);
        console.log(eventos.target.scrollTop);
        eventos.persist();
        this.setState({
            scroll: eventos.target.scrollTop,

        })
    }

    // Este metodo actualiza el valor de x, y, cada que el usuario da clic sostenido
    PressMouse = (evt) => {
        if (clickPress) {
            this.setState({
                // if (clickPress) {
                x: - evt.clientX + 650,
                y: evt.clientY - 234 + this.state.scroll,
                // }
            })
            console.log("x: " + this.state.x, " y: " + this.state.y);
            console.log("Component: " + this.state.pack[0] + " JSON " + this.state.pack[1] + " archivo " + this.state.pack[2]);
        }
    }

    render() {

        // function PressMouse(evt) {
        //     if (clickPress) {
        //         this.state.x = evt.clientX;
        //         this.state.y = evt.clientY;
        //         // console.log("x: " + x, " y: " + y);
        //     }
        // }

        return (<div >
            {/* Esta es la interfaz del lienzo */}
            <div
                // Estos son los eventos del mouse a los que responde
                onMouseDown={() => { clickPress = true }}
                onMouseMove={this.PressMouse}
                onMouseUp={() => { clickPress = false }}
                onScroll={this.HacerScroll}
                // Estos son los estilos del cuadro del Lienzo
                style={{
                    width: 650,
                    height: 800,
                    background: "#FCFCFF",
                    position: "relative",
                    // background: "#000000",
                    overflowY: "scroll",
                    border: "solid 1px",
                    borderColor: "#D5D5D5"
                }} id="LienzoInterfaz">

                {/* Esto es un texto de relleno para reprentar la web del usuario en el Lienzo, aqui debería haber un src del MainUserCode sin embargo eso está pendiente, ya que esto es xml y el MainUserCode es html */}
                <h3 style={{ color: "#404040" }}><br /><strong style={{ color: "black", fontFamily: "cursive" }}>What is Lorem Ipsum?</strong> <br />
                    <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><strong style={{ color: "black", fontFamily: "cursive" }}>Why do we use it?</strong><br /><br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><strong style={{ color: "black", fontFamily: "cursive" }}>Where does it come from?</strong><br /><br />
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h3>

                {/* Esto es el cuadro que representa un elemento siendo arrastrado al interior del lienzo     */}
                <div style={{ height: 300, width: 300, background: "aqua", position: "absolute", top: this.state.y - 100, right: this.state.x - 100, opacity: 0.4 }}><h1> {this.state.pack[0] + this.state.pack[1] + this.state.pack[2]} </h1> </div>
                <div style={{ height: 5, width: 5, background: "red", position: "absolute", top: this.state.y, right: this.state.x }}><h1> </h1></div>
            </div>

            {/* Este es el src del MainUserCode en js, sin embargo hasta ahora no ha funcionado cuando este contiene un innerHTML */}
            <script src={MainUserCode}></script>
        </div>);


    }
}

export default Lienzo;
