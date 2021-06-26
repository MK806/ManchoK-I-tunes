import React from 'react';
import Item from './Item';
import './style.css';

const ItemsList = ({ items }) => {
	const itemsArray = items.map((item, index) => <Item key={index} {...item} />);
	return <div className='results'>{itemsArray}</div>;
};

export default ItemsList;