import React from 'react';

class Field extends React.Component {
    changeEmail = (event) => {
        this.props.changeEmail(event.target.value);
    }
    render() {
        return (
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                    <input onChange={this.changeEmail} type="email" className="form-control" id="email" placeholder="Ingresar email" name="email" />
                </div>
            </div>
        );
    }
}

export default Field;
