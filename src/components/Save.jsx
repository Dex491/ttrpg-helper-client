export default function Save({
	name,
	rootStat,
	characterSheet,
	setCharacterSheet,
}) {
	const statValue = characterSheet?.baseStats?.[name];
	const statValueDisplay =
		statValue > 10 && statValue % 2 !== 0
			? ((statValue - 11) / 2).toFixed()
			: ((statValue - 10) / 2).toFixed();
	console.log(statValueDisplay);

	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		setCharacterSheet({
			...characterSheet,
			saves: {
				...characterSheet.saves,
				[name]: { ...characterSheet.saves[name], mod: Number(value) },
			},
		});
	};
	const handleChecked = (e) => {
		const name = e.target.name;
		let checked = e.target.checked;

		let profAdd = Number(statValueDisplay) + Number(characterSheet?.profBonus);
		let profMinus =
			characterSheet?.saves?.[name]?.mod - Number(characterSheet?.profBonus);

		if (checked) {
			setCharacterSheet({
				...characterSheet,
				saves: {
					...characterSheet.saves,
					[name]: { mod: profAdd, prof: checked },
				},
			});
		} else if (!checked) {
			setCharacterSheet({
				...characterSheet,
				saves: {
					...characterSheet.saves,
					[name]: { mod: profMinus, prof: checked },
				},
			});
		}
	};

	return (
		<li>
			<input
				type="checkbox"
				className="prof"
				name={name}
				checked={characterSheet?.saves?.[name]?.prof === true}
				onChange={handleChecked}
			/>
			<input
				type="text"
				id={`${name}-skill`}
				className="skill-mod"
				name={name}
				onChange={handleChange}
				value={
					characterSheet?.saves?.[name]?.mod > 0
						? characterSheet?.saves?.[name]?.mod
							? `+${characterSheet?.saves?.[name]?.mod}`
							: "+0"
						: characterSheet?.saves?.[name]?.mod
						? characterSheet?.saves?.[name]?.mod
						: "+0"
				}
			/>
			<label htmlFor="{`${name}-skill`}">
				{name.charAt(0).toUpperCase() + name.slice(1)}{" "}
				<span>{rootStat ? rootStat : false}</span>
			</label>
		</li>
	);
}
