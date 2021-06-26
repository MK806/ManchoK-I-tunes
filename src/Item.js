import React from 'react';
import './style.css';
import AudioPlayer from "react-h5-audio-player";


const Item = ({ kind, artistName, trackName, artworkUrl100, previewUrl }) => (
	<div className='box'>
		<h5>{artistName}</h5>
		<p>{trackName}</p>
		<div>
			<img src={artworkUrl100} alt="Song cover" />
		</div>
		<AudioPlayer
			autoPlayAfterSrcChange ={false}
				src={previewUrl}
				controls={true}
  />
	</div>
);

export default Item;
