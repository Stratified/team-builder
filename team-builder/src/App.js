import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Card from './components/Card';

const App = () => {
	const [team, setTeam] = useState([]);

	// const addNewTeamMember = (teams) => {
	// 	const newTeamMember = {
	// 		name: team.name,
	// 		email: team.email,
	// 		role: team.role,
	// 		id: Date.now(),
	// 	};
	// 	setTeam([...team, newTeamMember]);
	// };

	return (
		<div>
			{team.map((person, i) => (
				<Card person={person} key={i} />
			))}
			<InputForm setTeam={setTeam} team={team}></InputForm>
		</div>
	);
};

export default App;
