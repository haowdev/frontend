import React, { Component } from 'react'
class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.id}</td>
				<td>{this.props.employee.name}</td>
			</tr>
		)
	}
}
export default Employee;