import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api'
import Tick from './Tick'
import RestTable from './RestTable'

class App extends Component {
  state = {
    characters: [],
  }
 
  removeCharacter = (index) => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>Welome to React!!</h1>
        <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
      <Form handleSubmit={this.handleSubmit} />
    </div>
        <RestTable />
        <Api />
        <Tick />
    </div>
    )
  }
}

export default App