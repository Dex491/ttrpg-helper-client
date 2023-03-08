export default function Skill({
	name,
	dataName,
	rootStat,
	characterSheet,
	setCharacterSheet,
}) {
	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		if (dataName) {
			setCharacterSheet({
				...characterSheet,
				skills: {
					...characterSheet.skills,
					[dataName]: {
						...characterSheet.skills[dataName],
						mod: Number(value),
					},
				},
			});
			return;
		}

		setCharacterSheet({
			...characterSheet,
			skills: {
				...characterSheet.skills,
				[name]: { ...characterSheet.skills[name], mod: Number(value) },
			},
		});
	};
	const handleChecked = (e) => {
		let name = e.target.name;
		let checked = e.target.checked;

		if (dataName) {
			setCharacterSheet({
				...characterSheet,
				skills: {
					...characterSheet.skills,
					[dataName]: { ...characterSheet?.skills[dataName], prof: checked },
				},
			});
			return;
		}

		setCharacterSheet({
			...characterSheet,
			skills: {
				...characterSheet.skills,
				[name]: { ...characterSheet?.skills[name], prof: checked },
			},
		});
		console.log(checked);
	};

	return (
		<li>
			<input
				type="checkbox"
				className="prof"
				name={name}
				checked={
					dataName
						? characterSheet?.skills?.[dataName]?.prof === true
						: characterSheet?.skills?.[name]?.prof === true
				}
				onChange={handleChecked}
			/>
			<input
				type="text"
				id={`${name}-skill`}
				className="skill-mod"
				name={name}
				onChange={handleChange}
				value={
					dataName
						? characterSheet?.skills?.[dataName]?.mod
							? `+${characterSheet.skills[dataName]?.mod}`
							: "+0"
						: characterSheet?.skills?.[name]?.mod
						? `+${characterSheet.skills[name]?.mod}`
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
