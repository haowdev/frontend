import React, { Component } from 'react';
import Employee from './Employee';
class Employeelist extends React.Component{
	render() {
		console.log(this.props);
		const employees = this.props.employees.map(employee =>
			<Employee key={employee.id} employee={employee} onDelete={this.props.onDelete}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Action</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
export default Employeelist