import { Input } from "postcss";

import Player from "./components/Player";

function App() {
	// const [editNameBtn, setEditNameBtn] = useState(false);
	// const [playerOneName, setPlayerOneName] = useState("Player 1");

	// const onEditBtnClicked = () => {
	// 	setEditNameBtn(true);
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setEditNameBtn(false);
	// 	console.log("Form submitted with value:", playerOneName);
	// };

	// const handleChange = (e) => {
	// 	setPlayerOneName(e.target.value);
	// };

	return (
		<main>
			<div id="game-container">
				<ol id="players">
					{/* <li>
						<span className="player">
							{!editNameBtn ? (
								<span className="player-name">{playerOneName}</span>
							) : (
								<form onSubmit={handleSubmit}>
									<input
										type="text"
										value={playerOneName}
										onChange={handleChange}
									></input>
									<button type="submit">Submit</button>
								</form>
							)}
							<span className="player-symbol">X</span>
						</span>
						{!editNameBtn ? (
							<button onClick={onEditBtnClicked}>Edit</button>
						) : null}
					</li> */}
					<Player name='Player 1' symbol='X' />
					<Player name='Player 2' symbol='O' />
				</ol>
				GAME BOARD
			</div>
			LOG
		</main>
	);
}

export default App;
