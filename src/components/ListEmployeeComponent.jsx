import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: [],
		};
		this.addEmployee = this.addEmployee.bind(this);
	}

	componentDidMount() {
		EmployeeService.getEmployee().then((res) => {
			this.setState({ employees: res.data });
		});
	}

	addEmployee(){
		this.props.history.push("/add_employee");
	}

	editEmployee(id){
		this.props.history.push(`/update_employee/${id}`);
	}

	render() {
		return (
			<div>
				<h2 className="text-center">Employee List</h2>
				<div className="row">
					<button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
				</div>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>First name</th>
								<th>Last name</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{this.state.employees.map((employee) => (
								<tr key={employee.id}>
									<td> {employee.firstName} </td>
									<td> {employee.lastName} </td>
									<td> {employee.emailId} </td>
									<td>
										<button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ListEmployeeComponent;
