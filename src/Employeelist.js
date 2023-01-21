import React, { Component } from 'react';
import Employee from './Employee';
class Employeelist extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee.id} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>ID</th>
						<th>Name</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
export default Employeelist