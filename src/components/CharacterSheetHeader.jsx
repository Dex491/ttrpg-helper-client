import { useEffect, useState } from "react";

export default function CharacterSheetHeader({ csData }) {
	const [csHeaderState, setCSHeaderState] = useState(csData);
	console.log(csHeaderState);
	console.log(csData);

	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		console.log(name, value);

		setCSHeaderState({ ...csHeaderState, [name]: value });
		console.log(csHeaderState);
	};

	// useEffect(() => {}, [csData]);

	// console.log(csData);

	// if (!csHeaderState) {
	// 	return <p>Loading</p>;
	// }

	return (
		<div className="csHeader">
			<div className="name-box">
				<input
					id="cName"
					placeholder="Character Name"
					value={csHeaderState ? csHeaderState.charName : "No data"}
					name="charName"
					onChange={handleChange}
				/>
				<label htmlFor="charName">character name</label>
			</div>
			<div className="char-info">
				<ul>
					<li>
						<input
							id="level"
							placeholder="Bard L2, Rogue L1"
							value={csHeaderState ? csHeaderState.class : ""}
							onChange={handleChange}
							name="class"
						/>
						<label htmlFor="class">class & level</label>
					</li>
					<li>
						<input
							id="background"
							placeholder="Criminal"
							value={csHeaderState ? csHeaderState.background : ""}
							onChange={handleChange}
						/>
						<label htmlFor="background">background</label>
					</li>
					<li>
						<input
							id="pName"
							placeholder="Dex"
							value={csHeaderState ? csHeaderState.background : ""}
							onChange={handleChange}
						/>
						<label htmlFor="pName">player name</label>
					</li>
					<li>
						<input
							id="race"
							placeholder="Half-Elf"
							value={csHeaderState ? csHeaderState.race : ""}
							onChange={handleChange}
						/>
						<label htmlFor="race">race</label>
					</li>
					<li>
						<input
							id="align"
							placeholder="Chaotic Good"
							value={csHeaderState ? csHeaderState.align : ""}
							onChange={handleChange}
						/>
						<label htmlFor="align">alignment</label>
					</li>
					<li>
						<input
							id="xp"
							placeholder="3000"
							value={csHeaderState ? csHeaderState.xp : ""}
							onChange={handleChange}
						/>
						<label htmlFor="xp">experience points</label>
					</li>
				</ul>
			</div>
		</div>
	);
}
