import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {text: ''};  

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const textNews = this.state;
        textNews.id = Date.now();        
        this.props.addNewsFromProps(textNews);              
    }

    handleChange(e) {this.setState({text: e.target.value});
    }
   
	render() {
        const textNews = this.state;
        return (
			<form onSubmit={this.handleSubmit}>
                <label>
                    Add news:
                    <textarea value={this.state.text} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Go!" />
            </form>
		);
	}
}

export default Form;