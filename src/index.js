import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ItemsList from './ItemsList';
import { itunesApiRequest, mediaTypes } from './utils';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchResults: [] };
		this.updateSearch = this.updateSearch.bind(this);
	}

	async updateSearch(text, media) {
		const response = await itunesApiRequest(text, media);
		this.setState({ searchResults: response.results });
	}

	render() {
		const { searchResults } = this.state;
		return (
			<>
				<div>
					<Header mediaTypes={mediaTypes} startSearch={this.updateSearch} />
					<ItemsList items={searchResults} />
				</div>
			</>
		);
	}
}


ReactDOM.render(<App/>, document.getElementById('root'));