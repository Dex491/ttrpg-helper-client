export default function CharacterSheetHeader() {
	return (
		<div className="csHeader">
			<div className="name-box">
				<input id="cName" placeholder="Character Name" />
				<label htmlFor="cName">character name</label>
			</div>
			<div className="char-info">
				<ul>
					<li>
						<input id="level" placeholder="Bard 2, Rogue 1" />
						<label htmlFor="level">class & level</label>
					</li>
					<li>
						<input id="background" placeholder="Criminal" />
						<label htmlFor="background">background</label>
					</li>
					<li>
						<input id="pName" placeholder="Dex" />
						<label htmlFor="pName">player name</label>
					</li>
					<li>
						<input id="race" placeholder="Half-Elf" />
						<label htmlFor="race">race</label>
					</li>
					<li>
						<input id="align" placeholder="Chaotic Good" />
						<label htmlFor="align">alignment</label>
					</li>
					<li>
						<input id="xp" placeholder="3000" />
						<label htmlFor="xp">experience points</label>
					</li>
				</ul>
			</div>
		</div>
	);
}
