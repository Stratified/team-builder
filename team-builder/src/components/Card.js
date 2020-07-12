import React from 'react';

const Card = (props) => {
	return (
		<div
			style={{
				backgroundColor: 'darkGray',
				margin: '5% auto',
				width: '10rem',
				padding: '1%',
			}}
		>
			<div>
				<p>Name: {props.person.name}</p>
				<p>Email: {props.person.email}</p>
				<p>Role: {props.person.role}</p>
			</div>
		</div>
	);
};

export default Card;
