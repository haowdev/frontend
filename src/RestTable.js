import React, { Component } from 'react'
import Employeelist from './Employeelist';

class RestTable extends Component {

	state = {
		employees: [],
  }
  componentDidMount() {
    const url = 'http://localhost:8088/product/findAllsort'
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({employees: result})
      })
  }

	render() { 
		return (
			<Employeelist employees={this.state.employees}/>
		)
	}
}
export default RestTable;