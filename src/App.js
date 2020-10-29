import React from 'react';
import './App.css';
import Form from './Components/Form';
import Table from "./Components/Table"


export default class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      arrayPeople: []
    }
  }

  getData = (objPerson)=>{
    const newArray = this.state.arrayPeople;
    newArray.push(objPerson);
    this.setState({arrayPeople: newArray});
    console.log(this.state.arrayPeople);
  }

  render()
  {
    return (
      <div className="App">
        <Form getData={this.getData}></Form>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        {
          console.log("App.js 35")
        }
        {
          this.state.arrayPeople.length > 0 ? <Table arrayPeople={this.state.arrayPeople}></Table> : <div>Sin elementos</div>
        }
      </div>
    )
  }
}

