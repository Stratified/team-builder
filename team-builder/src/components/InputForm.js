import React, { useState } from 'react';

const InputForm = (props) => {
	const [form, setForm] = useState({ name: '', email: '', role: 'Front End' });

	const handleChanges = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name !== '' && form.email !== '') {
			props.setTeam([...props.team, form]);
			setForm({ name: '', email: '', role: 'Front End' });
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Name'
				type='text'
				onChange={handleChanges}
				value={form.name}
				id='name'
				name='name'
			/>
			<input
				placeholder='Email'
				type='text'
				onChange={handleChanges}
				value={form.email}
				id='email'
				name='email'
			/>
			<div style={{ fontSize: '2rem' }}>
				<label htmlFor='role' style={{ marginRight: '0.8rem', color: 'white' }}>
					Role:
				</label>
				<select
					onChange={handleChanges}
					name='role'
					style={{ fontSize: '1.4rem' }}
				>
					<option value='Front End' selected>
						Front End
					</option>
					<option value='Back End'>Back End</option>
					<option value='Full Stack'>Full Stack</option>
				</select>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default InputForm;
