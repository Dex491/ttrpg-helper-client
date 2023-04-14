export default function CharacterSheetHeader({
	characterSheet,
	setCharacterSheet,
}) {
	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		setCharacterSheet({
			...characterSheet,
			headerStats: { ...characterSheet.headerStats, [name]: value },
		});
	};

	return (
		<div className="csHeader">
			<div className="name-box">
				<input
					id="cName"
					placeholder="Character Name"
					value={
						characterSheet?.headerStats?.charName
							? characterSheet.headerStats.charName
							: ""
					}
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
							value={
								characterSheet?.headerStats?.class
									? characterSheet.headerStats.class
									: ""
							}
							onChange={handleChange}
							name="class"
						/>
						<label htmlFor="class">class & level</label>
					</li>
					<li>
						<input
							id="background"
							placeholder="Criminal"
							value={
								characterSheet?.headerStats?.background
									? characterSheet.headerStats.background
									: ""
							}
							onChange={handleChange}
							name="background"
						/>
						<label htmlFor="background">background</label>
					</li>
					<li>
						<input
							id="pName"
							placeholder="Dex"
							value={
								characterSheet?.headerStats?.playerName
									? characterSheet.headerStats.playerName
									: ""
							}
							onChange={handleChange}
							name="playerName"
						/>
						<label htmlFor="playerName">player name</label>
					</li>
					<li>
						<input
							id="race"
							placeholder="Half-Elf"
							value={
								characterSheet?.headerStats?.race
									? characterSheet.headerStats.race
									: ""
							}
							onChange={handleChange}
							name="race"
						/>
						<label htmlFor="race">race</label>
					</li>
					<li>
						<input
							id="align"
							placeholder="Chaotic Good"
							value={
								characterSheet?.headerStats?.align
									? characterSheet.headerStats.align
									: ""
							}
							onChange={handleChange}
							name="align"
						/>
						<label htmlFor="align">alignment</label>
					</li>
					<li>
						<input
							id="xp"
							placeholder="3000"
							value={
								characterSheet?.headerStats?.xp
									? characterSheet.headerStats.xp
									: ""
							}
							onChange={handleChange}
							name="xp"
						/>
						<label htmlFor="xp">experience points</label>
					</li>
				</ul>
			</div>
		</div>
	);
}
