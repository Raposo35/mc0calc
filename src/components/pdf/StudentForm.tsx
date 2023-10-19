import React, { useState } from 'react';

const StudentForm = ({ onSubmit }: any) => {
	const [name, setName] = useState('');
	const [grade, setGrade] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		onSubmit({ name, grade });
		setName('');
		setGrade('');
	};

	return (
		<div>
			<h2>Adicionar Aluno</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nome:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="grade">Nota:</label>
					<input
						type="number"
						id="grade"
						value={grade}
						onChange={(e) => setGrade(e.target.value)}
					/>
				</div>
				<button type="submit">Adicionar</button>
			</form>
		</div>
	);
};

export default StudentForm;
