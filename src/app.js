import React, {Component} from 'react'

export default class Mid extends Component{
	constructor(){
		super();
		this.state = {
			topText : 'heelo',
			bottomText : 'watshap',
			data : '',
			imageURL:"https://i.imgflip.com/1bij.jpg",
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}


	componentDidMount(){
		console.log('loading API now')
		fetch('https://api.imgflip.com/get_memes')
		.then(response => response.json())
		.then( response => 
			this.setState(
				{
					data : response.data.memes,
				}
			)	
		);
	}

	handleChange(event){
		const {name,value} = event.target;
		this.setState(
			{
				[name] : value	
			}
		);
	}

	handleClick(event){
		event.preventDefault();
		let random = Math.floor(Math.random() * 100);
		let newImageURL = this.state.data[random].url;
		console.log(newImageURL)
		this.setState(
			{
				imageURL : newImageURL
			}
		);
	}

	render(){

		return(
			<div id="midContent">
				<div id="header">
					{this.props.text}
				</div>
				<form>
					<input 
					type="text"
					name="topText"
					placeholder="top text"
					value= {this.state.topText}
					onChange = {this.handleChange}
					/>
					<input 
					type="text"
					name="bottomText"
					placeholder="bottom text"
					value= {this.state.bottomText}
					onChange = {this.handleChange}
					/>
					<button onClick={this.handleClick}> Gen </button>
				</form>

				<div id="meme" >
					<img src={this.state.imageURL} />
					<div className="memeTopText"> {this.state.topText} </div>
					<div className="memeBottomText"> {this.state.bottomText} </div>
				</div>

			</div>
		);
	}
}