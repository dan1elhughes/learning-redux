import React from 'react';

import Button from './components/Button/Button';
import Count from './components/Count/Count';

class App extends React.Component {
	render() {
		return (
			<div>
				<Button/>
				<Count/>
			</div>
		);
	}
}

export default App;
