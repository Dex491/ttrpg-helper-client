import { useState } from "react";

export default function CharacterSheetHeader({ csData }) {
	// const [csState, setCsState] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		console.log(name, value);
		if (name === "charName") {
			// setCsState({ ...csState, charName: value });
			// console.log(csState);
		}

		csData = { ...csData, [name]: value };
		console.log(csData);
		return csData;
	};

	console.log(csData);

	if (!csData) {
		return <p>Loading</p>;
	}

	return (
		<div className="csHeader">
			<div className="name-box">
				<input
					id="cName"
					placeholder="Character Name"
					value={csData.charName || ""}
					name="cName"
					onChange={handleChange}
				/>
				<label htmlFor="cName">character name</label>
			</div>
			<div className="char-info">
				<ul>
					<li>
						<input
							id="level"
							placeholder="Bard L2, Rogue L1"
							value={csData.class}
						/>
						<label htmlFor="level">class & level</label>
					</li>
					<li>
						<input
							id="background"
							placeholder="Criminal"
							value={csData.background}
						/>
						<label htmlFor="background">background</label>
					</li>
					<li>
						<input id="pName" placeholder="Dex" value={csData.playerName} />
						<label htmlFor="pName">player name</label>
					</li>
					<li>
						<input id="race" placeholder="Half-Elf" value={csData.race} />
						<label htmlFor="race">race</label>
					</li>
					<li>
						<input id="align" placeholder="Chaotic Good" value={csData.align} />
						<label htmlFor="align">alignment</label>
					</li>
					<li>
						<input id="xp" placeholder="3000" value={csData.xp} />
						<label htmlFor="xp">experience points</label>
					</li>
				</ul>
			</div>
		</div>
	);
}
