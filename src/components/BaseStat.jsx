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
					characterSheet?.baseStats?.[stat]
						? characterSheet.baseStats[stat]
						: ""
				}
				onChange={handleChange}
			/>
			<input
				type="text"
				id={`${stat}-mod`}
				className="stat-mod"
				value={
					characterSheet?.baseStats?.[stat] > 10 &&
					characterSheet?.baseStats?.[stat] % 2 !== 0
						? ((characterSheet?.baseStats?.[stat] - 11) / 2).toFixed()
						: ((characterSheet?.baseStats?.[stat] - 10) / 2).toFixed()
				}
				// onChange={handleChange}
				readOnly
			/>
		</li>
	);
}
