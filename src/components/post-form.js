import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import Textarea from './textarea';
import Input from './input';
import File from './file-input';
import { makePost } from '../actions/posts';

class PostForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(makePost(values))
	}

	render() {
		return (
			<form className='' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor='title'>Title</label>
				<Field component={Input}
					inputClass='player-input'
					type='text'
					name='title'
				/>
				<label htmlFor='body'>Body</label>
				<Field component={Textarea}
					name='body'
				/>
				<label htmlFor='image'>Image</label>
				<Field component={File}
					name='image'
					fileClass='file-upload'
				/>
				<button className='team-button' type='submit' disabled={this.props.pristine || this.props.submitting}>Submit</button>
			</form>
		)
	}
}

const afterSubmit = (result, dispatch) => dispatch(reset('post'));

export default reduxForm({
	form: 'post',
	onSubmitSuccess: afterSubmit
})(PostForm)