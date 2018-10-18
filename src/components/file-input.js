import React from 'react';
import Dropzone from 'react-dropzone';

const FILE_FIELD_NAME = 'files';

export default function File(props) {
	const files = props.input.value;
	return (
		<div>
			<Dropzone
				name={props.name}
				onDrop={( filesToUpload, e ) => props.input.onChange(filesToUpload)}
			>
				<div>try dropping some files here or select to upload</div>
			</Dropzone>
			{props.meta.touched && props.meta.error && <span className='error'>{props.meta.error}</span>}
			{files && Array.isArray(files) && (
				<ul>
					{ files.map((file, i) => <li key={i}>{file.name}</li>) }
				</ul>
				)}
			</div>
	)
}