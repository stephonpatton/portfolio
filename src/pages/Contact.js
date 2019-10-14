import React, { Component } from 'react';

import Home from './Home';

const Contact = () => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

const handleSubmit = () => {};

export default Contact;
