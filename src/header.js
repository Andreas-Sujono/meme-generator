import React , {Component}from 'react'

const Header = () => {
	return(
		<div id="header">
			{this.props.text}
		</div>
	);
}

export default Header