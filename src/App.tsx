import { useState } from 'react';
import './App.scss';
import Title from './components/Title/Title';
import Years from './components/Years/Years';

function App() {
	const [io, setIo] = useState(0);
	const [io2, setIo2] = useState(0);
	return (
		<div className='App'>
			<header className='App-header'>
				<Title>Исторические даты</Title>
				<Years
					yearFrom={io}
					yearTo={io2}
				></Years>
				<button
					onClick={() => {
						setIo(200);
						setIo2(250);
					}}
				>
					sdfsafsd
				</button>
			</header>
		</div>
	);
}

export default App;
