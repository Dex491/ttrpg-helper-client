export default function BaseStat({ stat, characterSheet, setCharacterSheet }) {
	let statValue = characterSheet?.baseStats?.[stat];

	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		setCharacterSheet({
			...characterSheet,
			baseStats: { ...characterSheet.baseStats, [name]: Number(value) },
		});
	};

	console.log(
		stat,
		typeof ((statValue - 10) / 2).toFixed(),
		((statValue - 10) / 2).toFixed(),
		Math.sign(((statValue - 10) / 2).toFixed())
	);

	return (
		<li>
			<label htmlFor={stat}>{stat}</label>
			<input
				type="text"
				id={stat}
				className="stat"
				name={stat}
				value={statValue ? characterSheet.baseStats[stat] : ""}
				onChange={handleChange}
			/>
			<input
				type="text"
				id={`${stat}-mod`}
				className="stat-mod"
				value={
					((statValue - 10) / 2).toFixed() >= 0
						? // true
						  `+${
								statValue > 10 && statValue % 2 !== 0
									? ((statValue - 11) / 2).toFixed()
									: ((statValue - 10) / 2).toFixed()
						  }`
						: statValue > 10 && statValue % 2 !== 0
						? ((statValue - 11) / 2).toFixed()
						: ((statValue - 10) / 2).toFixed()
				}
				// onChange={handleChange}
				readOnly
			/>
		</li>
	);
}
