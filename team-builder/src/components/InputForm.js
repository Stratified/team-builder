import React, { useState } from 'react';

const InputForm = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');

	const handleName = (e) => setName(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handleRole = (e) => setRole(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder='Name'
					type='text'
					onChange={handleName}
					value={name}
				/>
				<input
					placeholder='Email'
					type='text'
					onChange={handleEmail}
					value={email}
				/>
				<input
					placeholder='Role'
					type='text'
					onChange={handleRole}
					value={role}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default InputForm;
