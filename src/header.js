import React , {Component}from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
	constructor(){
		super()

	}

	render(){

		return(
			<div id="header">
				{this.props.text}
			</div>
		);
	}
}