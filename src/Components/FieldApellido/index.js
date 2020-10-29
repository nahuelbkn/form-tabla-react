import React from 'react';

class Field extends React.Component {
    changeApellido = (event) => {
        this.props.changeApellido(event.target.value);
    }
    render() {
        return (
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="apellido">Apellido:</label>
                <div className="col-sm-10">
                    <input onChange={this.changeApellido} type="text" className="form-control" id="apellido" placeholder="Ingresar Apellido" name="apellido" />
                </div>
            </div>
        );
    }
}

export default Field;
