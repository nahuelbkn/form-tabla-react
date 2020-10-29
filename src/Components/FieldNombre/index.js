import React from 'react';

export default class Field extends React.Component
{
    changeNombre = (event)=>{
        this.props.changeNombre(event.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="nombre">Nombre:</label>
                <div className="col-sm-10">
                    <input onChange={this.changeNombre} type="text" className="form-control" id="nombre" placeholder="Ingresar Nombre" name="nombre" />
                </div>
            </div>
        );
    }
}


