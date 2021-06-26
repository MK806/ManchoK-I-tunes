import React from 'react';
import './style.css';



class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchMedia: 'all',
		};
	}

	handleSearchTextChange = event =>
		this.setState({ searchText: event.target.value });

	handleSearchMediaChange = event =>
		this.setState({ searchMedia: event.target.value });

	render() {
		const { startSearch } = this.props;
		const { searchText, searchMedia } = this.state;
		
		return (
			<div className='container'>
					<input
            className='field'
						type="text"
						value={searchText}
						placeholder="Search..."
						onChange={this.handleSearchTextChange}
					/>
					<button className='btn' onClick={() => startSearch(searchText, searchMedia)}>
						Search
					</button>
			</div>
		);
	}
}

export default Header;
