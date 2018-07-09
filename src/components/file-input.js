import React from 'react';
import { connect } from 'react-redux';
import { togglePaid } from '../actions/players';

const handleChange = (handler) => ({target: {files}}) => handler(files.length ? {file: files[0], name: files[0].name} : {});

export default ({
	input: {onChange, onBlur, value: omitValue, ...inputProps},
	meta: omitMeta, 
	...props
}) => (
	<input type="file"
			onChange={handleChange(onChange)} 
			onBlur={handleChange(onBlur)}
			{...inputProps} {...props} />
);