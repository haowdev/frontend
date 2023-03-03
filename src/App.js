import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api'
import Tick from './Tick'

import Employeelist from './Employeelist'
import CreateDialog from './CreateDialog'

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {employees: [], attributes: [], characters: []};
  }
  handleFetchData = async () => {
    const url = 'http://localhost:8088/product/findAllsort'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({employees: data})
    this.setState({attributes: Object.keys(data[0])})
  }
  componentDidMount() {
    
    this.handleFetchData();
  }

  removeCharacter = (index) => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = async(character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  onCreate = (newEmployee) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee)
    };
    fetch('http://localhost:8088/product/addfrombody', requestOptions).then(this.handleFetchData)
    //this.handleFetchData()
    // .then(response => response.json())
	}


  onDelete(employee) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: employee.id
    };
    fetch('http://localhost:8088/product/delfrombody', requestOptions).then(this.handleFetchData)
		};

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>Welome to React!!</h1>
        <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
      <Form handleSubmit={this.handleSubmit} />
    </div>
        <Api />
        <Tick />
        <Employeelist employees={this.state.employees} onDelete={this.onDelete}/>
        <CreateDialog attributes={this.state.attributes} onCreate={this.onCreate}/>
    </div>
    )
  }
}

export default App