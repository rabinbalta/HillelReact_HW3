import React, { Component} from 'react';

class List extends Component {
    constructor() {
        super();
        this.state = {            
            quanNews: 2,
        }

        this.toggleShow = this.toggleShow.bind(this);       
    }

    toggleShow() {        
        this.setState({
            quanNews: this.state.quanNews + 2
        });
    }    

	render() {
        const {data} = this.props;
        const {quanNews} = this.state;   
		return (
            <>
                <button
                    onClick={ this.toggleShow }
                >
                    toggle 2 news
                </button>
                <ul className='News'>
                    {
                        data.slice([0], [quanNews]).map(news => (
                            <li key={news.id}>                                
                                {news.text}
                            </li>
                        ))
                    }                   
                </ul>               
            </>                    
        );
	}
}

export default List;