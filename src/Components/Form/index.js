import React from 'react';
import FieldNombre from "../FieldNombre";
import FieldApellido from "../FieldApellido"
import FieldEmail from "../FieldEmail"

export default class Form extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: ""
        };
    }

    changeNombre = (valor)=>{
        this.setState({nombre: valor});
    }

    changeApellido = (valor)=>{
        this.setState({apellido: valor});
    }

    changeEmail = (valor)=>{
        this.setState({email: valor});
    }

    sendDataToApp = (event)=>{
        event.preventDefault();
        this.state.nombre && this.state.apellido && this.state.email && (
            this.props.getData(this.state)
        )
    }
    
    render() {
        return (               
            <form className="form-horizontal" action="#">
                <FieldNombre changeNombre={this.changeNombre}></FieldNombre>
                <label>{this.state.nombre}</label>
                <br></br>
                <br></br>
                <br></br>
                <FieldApellido changeApellido={this.changeApellido}></FieldApellido>
                <label>{this.state.apellido}</label>
                <br></br>
                <br></br>
                <br></br>
                <FieldEmail changeEmail={this.changeEmail}></FieldEmail>
                <label>{this.state.email}</label>
                <br></br>
                <br></br>
                <br></br>
                <button type="submit" onClick={this.sendDataToApp}>Guardar</button>
            </form>
        );
    }
}


