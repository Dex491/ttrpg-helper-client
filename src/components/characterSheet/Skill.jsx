export default function Skill({
	name,
	dataName,
	rootStat,
	characterSheet,
	setCharacterSheet,
}) {
	const modDataValue = characterSheet?.skills?.[dataName]?.mod;
	const modValue = characterSheet?.skills?.[name]?.mod;

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

		let profAdd =
			characterSheet?.skills?.[name]?.mod + Number(characterSheet?.profBonus);
		let profMinus =
			characterSheet?.skills?.[name]?.mod - Number(characterSheet?.profBonus);
		let profAddData =
			characterSheet?.skills?.[dataName]?.mod +
			Number(characterSheet?.profBonus);
		let profMinusData =
			characterSheet?.skills?.[dataName]?.mod -
			Number(characterSheet?.profBonus);

		if (checked) {
			if (dataName) {
				setCharacterSheet({
					...characterSheet,
					skills: {
						...characterSheet.skills,
						[dataName]: { mod: profAddData, prof: checked },
					},
				});
				return;
			}

			setCharacterSheet({
				...characterSheet,
				skills: {
					...characterSheet.skills,
					[name]: { mod: profAdd, prof: checked },
				},
			});
		} else if (!checked) {
			if (dataName) {
				setCharacterSheet({
					...characterSheet,
					skills: {
						...characterSheet.skills,
						[dataName]: { mod: profMinusData, prof: checked },
					},
				});
				return;
			}

			setCharacterSheet({
				...characterSheet,
				skills: {
					...characterSheet.skills,
					[name]: { mod: profMinus, prof: checked },
				},
			});
		}

		if (checked) {
			console.log(profAdd);
		} else if (!checked) {
			console.log(profMinus);
		}
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
					modValue > 0
						? dataName
							? modDataValue
								? `+${modDataValue}`
								: "+0"
							: modValue
							? `+${modValue}`
							: "+0"
						: dataName
						? modDataValue
							? modDataValue
							: "+0"
						: modValue
						? modValue
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
