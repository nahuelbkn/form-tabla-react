import React from 'react';

export default class Table extends React.Component {
    render() {
        const { arrayPeople } = this.props;

        return (
            <div className="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        console.log(arrayPeople)
                    }
                    {
                        
                        arrayPeople.map( (person)=>{
                            return (
                                <tr>
                                    <th scope="row"></th>
                                    <td>{person.nombre}</td>
                                    <td>{person.apellido}</td>
                                    <td>{person.email}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}


