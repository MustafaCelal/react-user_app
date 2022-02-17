import React, { Component } from 'react';
 

class User extends Component{

	// facebook dökümanlarında constructorda bind etmek tavsiye ediliyor
	// constructor(props){
	// 	super(props)
	// 	this.onDeleteClick=this.onDeleteClick.bind(this);
	// }

	// onDeleteClick(e){
	// 	console.log(this );
	// }

	// arrow function olarak yazıldığında oto bind oluyor
	onDeleteClick(id,e){
		console.log(id );
		const {deleteUser}=this.props;
		deleteUser(id);
	}

	render(){
		const {id,name,email}=this.props;
		return(
			<tr>
				<td>{id}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td><button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">Delete</button></td>
			</tr>
		);
	}

}

export default User;