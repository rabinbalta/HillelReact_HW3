import React, { Component} from 'react';

import ReactDOM from 'react-dom';

import List from './components/List';

import Form from './components/Form';

// const listNews = [];

// if (localStorage.news) {
// 	listNews = JSON.parse(localStorage.news)
// 	} else {
// 	listNews = [
// 		{
// 			id: 1,
// 			text: 'news1'
// 		}
// 	]
// 	}
class App extends Component {
	constructor() {
		super();
		this.state = {listNews: localStorage.news ? JSON.parse(localStorage.news) : [
			{
			id: 1,
			text: 'news1'
			}
			]
		};
			
		this.addNews = this.addNews.bind(this);
	}

	addNews(item) {		
		const {listNews} = this.state;
			this.setState({
				listNews: [item,...listNews],
			})
		localStorage.news = JSON.stringify(listNews);
	}

	render() {
		const { listNews } = this.state;
		return (
			<div>
				<Form
					addNewsFromProps={this.addNews}
				/>
				<List data={listNews} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);