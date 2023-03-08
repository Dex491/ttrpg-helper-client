export default function BaseStat({ stat, characterSheet, setCharacterSheet }) {
	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		setCharacterSheet({
			...characterSheet,
			baseStats: { ...characterSheet.baseStats, [name]: Number(value) },
		});
	};

	return (
		<li>
			<label htmlFor={stat}>{stat}</label>
			<input
				type="text"
				id={stat}
				className="stat"
				name={stat}
				value={
					characterSheet?.baseStats?.strength
						? characterSheet.baseStats[stat]
						: ""
				}
				onChange={handleChange}
			/>
			<input
				type="text"
				id={`${stat}-mod`}
				className="stat-mod"
				// TODO: this only works for - stat mods for example 8/9 is -1, but 11 is +1
				value={((20 - 10) / 2).toFixed()}
				onChange={handleChange}
			/>
		</li>
	);
}
