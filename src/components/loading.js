import React from 'react';
require('./loading.css');

export default function Loading(props) {
	return (
		<div class='loading'>
		  <div class='bullet'></div>
		  <div class='bullet'></div>
		  <div class='bullet'></div>
		  <div class='bullet'></div>
		  <p>{props.message}</p>
		</div>
	)
}