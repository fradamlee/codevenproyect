import React from "react";

class InfoObjetoPrueba extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: props.infoLienzo,
            showInfo: props.showInfo,

        }
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.showInfo) {
            console.log(newProps.infoLienzo);
        }

    }

    render() {
        return <h6>Mahh</h6>
    }
}

export default InfoObjetoPrueba;