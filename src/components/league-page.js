import React from 'react';
import { connect } from 'react-redux';

export class LeaguePage extends React.Component {

	render() {
		return (
			<div className='flex-wrap'>
				<h2>League History</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at elementum eros. Phasellus tincidunt aliquam urna sed pharetra. Aenean blandit ipsum nec velit tincidunt lacinia non id nulla. Etiam pellentesque finibus feugiat. Integer scelerisque eros tellus, in facilisis ligula lobortis ut. Pellentesque eget nisi ex. Praesent placerat porta massa, vitae faucibus sapien.</p>
				<p>Suspendisse vitae sodales tellus. Suspendisse blandit lorem blandit feugiat lobortis. Cras finibus diam in nisl cursus, eu varius lectus porttitor. Fusce suscipit lacus vitae dolor vestibulum, non aliquam ipsum sagittis. Morbi eleifend non elit quis dapibus. Quisque pellentesque porta lobortis. Sed pretium aliquet enim mollis facilisis. Nunc et mollis neque. Sed diam ipsum, bibendum ac lobortis eu, tempus vitae diam. Fusce ut nisl nisi. Proin mattis odio odio, a vestibulum erat scelerisque sed. In molestie odio ac ex condimentum, ut dignissim mi aliquam.</p>
				<p>Praesent elementum id tellus non sollicitudin. Nullam nunc dui, pulvinar quis mi ac, eleifend dapibus sapien. Suspendisse tincidunt elit sit amet euismod suscipit. Quisque malesuada turpis quis porta efficitur. Pellentesque et venenatis orci. Quisque sodales, dolor et placerat tempus, justo sapien lacinia lorem, sit amet semper lectus velit et tellus. Fusce vitae congue felis, at ullamcorper est.</p>
				<h2>Our Commitment</h2>
				<p>Praesent pellentesque lacinia mauris, id porta libero aliquam sit amet. Praesent ut urna blandit metus vulputate porta. Etiam hendrerit id turpis vel convallis. Praesent ultrices neque vehicula nibh pretium, at placerat lacus semper. Aliquam sed tincidunt ante, mattis dictum mi. Mauris elementum elementum neque non molestie.</p>
				<h3>Want to get involved?</h3>
				<p><a href="#">Send us an email</a></p>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LeaguePage)