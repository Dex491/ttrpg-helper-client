import BaseStat from "./BaseStat";
import Skill from "./Skill";
import Save from "./Save";

export default function CSPageOneMain({ characterSheet, setCharacterSheet }) {
	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		if (name === "profBonus" || name === "passPer") {
			value = Number(value);
		}

		setCharacterSheet({ ...characterSheet, [name]: value });
	};

	const handleChangeHealthStats = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		if (name === "AC" || name === "init" || name === "speed") {
			value = Number(value);
		}

		setCharacterSheet({
			...characterSheet,
			healthStats: { ...characterSheet.healthStats, [name]: value },
		});
	};

	const handleChangeHP = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setCharacterSheet({
			...characterSheet,
			healthStats: {
				...characterSheet.healthStats,
				hp: {
					...characterSheet.healthStats.hp,
					[name]: Number(value),
				},
			},
		});
	};

	const handleChangeAtk = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === "fullDescription") {
			return setCharacterSheet({
				...characterSheet,
				atkStats: {
					...characterSheet.atkStats,
					[name]: value,
				},
			});
		}

		const nameKey = name.substring(0, 3);
		const nameArr = name.charAt(4);

		setCharacterSheet({
			...characterSheet,
			atkStats: {
				...characterSheet.atkStats,
				attacks: {
					...characterSheet.atkStats.attacks,
					[nameArr]: {
						...characterSheet.atkStats.attacks[nameArr],
						[nameKey]: value,
					},
				},
			},
		});
	};

	const handleChangeEquip = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === "otherEquipment") {
			return setCharacterSheet({
				...characterSheet,
				equipment: {
					...characterSheet.equipment,
					[name]: [value],
				},
			});
		}

		setCharacterSheet({
			...characterSheet,
			equipment: {
				...characterSheet.equipment,
				currency: {
					...characterSheet.equipment.currency,
					[name]: Number(value),
				},
			},
		});
	};

	const handleChangeRPTraits = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setCharacterSheet({
			...characterSheet,
			rpTraits: {
				...characterSheet.rpTraits,
				[name]: value,
			},
		});
	};

	const handleChangeFeats = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setCharacterSheet({
			...characterSheet,
			[name]: value,
		});
	};

	const handleChangeHitDice = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setCharacterSheet({
			...characterSheet,
			healthStats: {
				...characterSheet.healthStats,
				hitDice: {
					...characterSheet.healthStats.hitDice,
					[name]: value,
				},
			},
		});
	};

	const handleChecked = (e) => {
		const name = e.target.name;
		const checked = e.target.checked;

		if (name === "inspiration") {
			setCharacterSheet({ ...characterSheet, [name]: checked });
		}

		if (
			name === "success-1" ||
			name === "success-2" ||
			name === "success-3" ||
			name === "failure-1" ||
			name === "failure-2" ||
			name === "failure-3"
		) {
			const nameKey = name.substring(0, 7);
			const nameValue = name.charAt(8);
			setCharacterSheet({
				...characterSheet,
				healthStats: {
					...characterSheet.healthStats,
					deathSaves: {
						...characterSheet.healthStats.deathSaves,
						[nameKey]: {
							...characterSheet.healthStats.deathSaves[nameKey],
							[nameValue]: checked,
						},
					},
				},
			});
		}
	};

	return (
		<div className="csPageOneMain">
			<div className="other-profs">
				<div className="pass-per-box">
					<input
						id="pass-per"
						type="text"
						name="passPer"
						value={characterSheet?.passPer ? characterSheet.passPer : ""}
						onChange={handleChange}
					/>
					<label htmlFor="passPer">passive wisdom (perception)</label>
				</div>
				<div className="other-profs-text-box">
					<textarea
						name="otherProfs"
						id="other-profs-text"
						value={characterSheet?.otherProfs ? characterSheet.otherProfs : ""}
						onChange={handleChangeFeats}
					></textarea>
					<label htmlFor="other-profs-text"> other profs & languages</label>
				</div>
			</div>
			<div className="base-stats">
				<ul>
					<BaseStat
						stat="strength"
						characterSheet={characterSheet}
						setCharacterSheet={setCharacterSheet}
					/>
					<BaseStat
						stat="dexterity"
						characterSheet={characterSheet}
						setCharacterSheet={setCharacterSheet}
					/>
					<BaseStat
						stat="constitution"
						characterSheet={characterSheet}
						setCharacterSheet={setCharacterSheet}
					/>
					<BaseStat
						stat="intelligence"
						characterSheet={characterSheet}
						setCharacterSheet={setCharacterSheet}
					/>
					<BaseStat
						stat="wisdom"
						characterSheet={characterSheet}
						setCharacterSheet={setCharacterSheet}
					/>
					<BaseStat
						stat="charisma"
						characterSheet={characterSheet}
						setCharacterSheet={setCharacterSheet}
					/>
				</ul>
			</div>
			<div className="skills-col">
				<div className="insp-prof">
					<div className="insp-box">
						<input
							id="insp"
							type="checkbox"
							name="inspiration"
							checked={characterSheet.inspiration === true}
							onChange={handleChecked}
						/>
						<label htmlFor="inspiration">inspiration</label>
					</div>
					<div className="prof-box">
						<input
							id="prof"
							type="text"
							name="profBonus"
							value={characterSheet?.profBonus ? characterSheet.profBonus : ""}
							onChange={handleChange}
						/>
						<label htmlFor="profBonus">proficiency bonus</label>
					</div>
				</div>
				<div className="saves">
					<ul>
						<Save
							name="strength"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Save
							name="dexterity"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Save
							name="constitution"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Save
							name="intelligence"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Save
							name="wisdom"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Save
							name="charisma"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<label>saving throws</label>
					</ul>
				</div>
				<div className="skills">
					<ul>
						<Skill
							name="acrobatics"
							rootStat="(Dex)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="animal Han."
							dataName="animalHandling"
							rootStat="(Wis)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="arcana"
							rootStat="(Int)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="athletics"
							rootStat="(Str)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="deception"
							rootStat="(Cha)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="history"
							rootStat="(Int)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="insight"
							rootStat="(Wis)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="intimidation"
							rootStat="(Cha)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="investigation"
							rootStat="(Int)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="medicine"
							rootStat="(Int)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="nature"
							rootStat="(Int)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="perception"
							rootStat="(Wis)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="performance"
							rootStat="(Cha)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="persuasion"
							rootStat="(Cha)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="religion"
							rootStat="(Int)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="sleight of H."
							rootStat="(Dex)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="stealth"
							rootStat="(Dex)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<Skill
							name="survival"
							rootStat="(Wis)"
							characterSheet={characterSheet}
							setCharacterSheet={setCharacterSheet}
						/>
						<label>skills</label>
					</ul>
				</div>
			</div>
			<div className="health-equips">
				<div className="health-box">
					<ul className="top-line">
						<li className="armour-class-box">
							<input
								id="armour-class"
								type="text"
								value={
									characterSheet?.healthStats?.AC
										? characterSheet?.healthStats?.AC
										: ""
								}
								name="AC"
								onChange={handleChangeHealthStats}
							/>
							<label htmlFor="armour-class">armour class</label>
						</li>
						<li className="initiative-box">
							<input
								id="initiative"
								type="text"
								value={
									characterSheet?.healthStats?.init
										? characterSheet?.healthStats?.init
										: ""
								}
								name="init"
								onChange={handleChangeHealthStats}
							/>
							<label htmlFor="initiative">initiative</label>
						</li>
						<li className="speed-box">
							<input
								id="speed"
								type="text"
								value={
									characterSheet?.healthStats?.speed
										? characterSheet?.healthStats?.speed
										: ""
								}
								name="speed"
								onChange={handleChangeHealthStats}
							/>
							<label htmlFor="speed">speed</label>
						</li>
					</ul>
					<div className="hp-box">
						<label htmlFor="hp-max" className="hp-max-label">
							Hit Point Max.
						</label>
						<input
							type="text"
							id="hp-max"
							value={
								characterSheet?.healthStats?.hp?.max
									? characterSheet?.healthStats?.hp?.max
									: ""
							}
							name="max"
							onChange={handleChangeHP}
						/>
						<input
							type="text"
							id="current-hp"
							value={
								characterSheet?.healthStats?.hp?.current
									? characterSheet?.healthStats?.hp?.current
									: ""
							}
							onChange={handleChangeHP}
							name="current"
						/>
						<label htmlFor="current-hp" className="current-hp-label">
							current hit points
						</label>
					</div>
					<div className="flex">
						<div className="hit-dice">
							<label htmlFor="hit-dice-total" className="hit-dice-total-label">
								Total
							</label>
							<input
								type="text"
								id="hit-dice-total"
								value={
									characterSheet?.healthStats?.hitDice.total
										? characterSheet?.healthStats?.hitDice.total
										: ""
								}
								name="total"
								onChange={handleChangeHitDice}
							/>
							<input
								type="text"
								id="hit-dice"
								value={
									characterSheet?.healthStats?.hitDice.current
										? characterSheet?.healthStats?.hitDice.current
										: ""
								}
								name="current"
								onChange={handleChangeHitDice}
							/>
							<label htmlFor="hit-dice" className="hit-dice-label">
								hit dice
							</label>
						</div>
						<div className="death-saves">
							<label htmlFor="success" className="success-label">
								success
							</label>
							<input
								id="success"
								name="success-1"
								type="checkbox"
								checked={
									characterSheet?.healthStats?.deathSaves?.success[1] === true
								}
								onChange={handleChecked}
							/>
							<input
								id="success"
								name="success-2"
								type="checkbox"
								checked={
									characterSheet?.healthStats?.deathSaves?.success[2] === true
								}
								onChange={handleChecked}
							/>
							<input
								id="success"
								name="success-3"
								type="checkbox"
								checked={
									characterSheet?.healthStats?.deathSaves?.success[3] === true
								}
								onChange={handleChecked}
							/>
							<label htmlFor="failure" className="failure-label">
								failure
							</label>
							<input
								id="failure"
								name="failure-1"
								type="checkbox"
								checked={
									characterSheet?.healthStats?.deathSaves?.failure[1] === true
								}
								onChange={handleChecked}
							/>
							<input
								id="failure"
								name="failure-2"
								type="checkbox"
								checked={
									characterSheet?.healthStats?.deathSaves?.failure[2] === true
								}
								onChange={handleChecked}
							/>
							<input
								id="failure"
								name="failure-3"
								type="checkbox"
								checked={
									characterSheet?.healthStats?.deathSaves?.failure[3] === true
								}
								onChange={handleChecked}
							/>
							<label htmlFor="death-saves" className="death-saves-label">
								death saves
							</label>
						</div>
					</div>
				</div>
				<div className="atk-box">
					<label className="weapon-name weapon-labels">name</label>
					<label className="weapon-bonus weapon-labels">atk bonus</label>
					<label className="weapon-dmg weapon-labels">damage/type</label>
					<input
						className="weapon-1-name"
						placeholder="+1 Dagger"
						value={
							characterSheet?.atkStats?.attacks[0].nme
								? characterSheet?.atkStats?.attacks[0].nme
								: ""
						}
						name="nme-0"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-2-name"
						placeholder="Longsword"
						value={
							characterSheet?.atkStats?.attacks[1].nme
								? characterSheet?.atkStats?.attacks[1].nme
								: ""
						}
						name="nme-1"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-3-name"
						value={
							characterSheet?.atkStats?.attacks[2].nme
								? characterSheet?.atkStats?.attacks[2].nme
								: ""
						}
						name="nme-2"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-1-bonus"
						placeholder="+1"
						value={
							characterSheet?.atkStats?.attacks[0].atk
								? characterSheet?.atkStats?.attacks[0].atk
								: ""
						}
						name="atk-0"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-2-bonus"
						placeholder="0"
						value={
							characterSheet?.atkStats?.attacks[1].atk
								? characterSheet?.atkStats?.attacks[1].atk
								: ""
						}
						name="atk-1"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-3-bonus"
						value={
							characterSheet?.atkStats?.attacks[2].atk
								? characterSheet?.atkStats?.attacks[2].atk
								: ""
						}
						name="atk-2"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-1-dmg"
						placeholder="1d4 piercing"
						value={
							characterSheet?.atkStats?.attacks[0].dmg
								? characterSheet?.atkStats?.attacks[0].dmg
								: ""
						}
						name="dmg-0"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-2-dmg"
						placeholder="1d8 slashing"
						value={
							characterSheet?.atkStats?.attacks[1].dmg
								? characterSheet?.atkStats?.attacks[1].dmg
								: ""
						}
						name="dmg-1"
						onChange={handleChangeAtk}
					/>
					<input
						className="weapon-3-dmg"
						value={
							characterSheet?.atkStats?.attacks[2].dmg
								? characterSheet?.atkStats?.attacks[2].dmg
								: ""
						}
						name="dmg-2"
						onChange={handleChangeAtk}
					/>
					<textarea
						className="weapon-full-desc"
						name="fullDescription"
						id="weapon-full-desc"
						value={
							characterSheet?.atkStats?.fullDescription
								? characterSheet?.atkStats?.fullDescription
								: ""
						}
						onChange={handleChangeAtk}
					></textarea>
					<label className="atk-box-label"> attacks & spellcasting</label>
				</div>
				<div className="equips-box">
					<div className="equips-container">
						<div className="currency">
							<div className="cp-box">
								<label htmlFor="cp">cp</label>
								<input
									type="text"
									name="cp"
									value={
										characterSheet?.equipment?.currency.cp
											? characterSheet?.equipment?.currency.cp
											: ""
									}
									onChange={handleChangeEquip}
								/>
							</div>
							<div className="sp-box">
								<label htmlFor="sp">sp</label>
								<input
									type="text"
									name="sp"
									value={
										characterSheet?.equipment?.currency.sp
											? characterSheet?.equipment?.currency.sp
											: ""
									}
									onChange={handleChangeEquip}
								/>
							</div>
							<div className="ep-box">
								<label htmlFor="ep">ep</label>
								<input
									type="text"
									name="ep"
									value={
										characterSheet?.equipment?.currency.ep
											? characterSheet?.equipment?.currency.ep
											: "0"
									}
									onChange={handleChangeEquip}
								/>
							</div>
							<div className="gp-box">
								<label htmlFor="gp">gp</label>
								<input
									type="text"
									name="gp"
									value={
										characterSheet?.equipment?.currency.gp
											? characterSheet?.equipment?.currency.gp
											: ""
									}
									onChange={handleChangeEquip}
								/>
							</div>
							<div className="pp-box">
								<label htmlFor="pp">pp</label>
								<input
									type="text"
									name="pp"
									value={
										characterSheet?.equipment?.currency.pp
											? characterSheet?.equipment?.currency.pp
											: "0"
									}
									onChange={handleChangeEquip}
								/>
							</div>
						</div>
						<textarea
							className="equips"
							name="otherEquipment"
							id="equips"
							value={
								characterSheet?.equipment?.otherEquipment
									? characterSheet?.equipment?.otherEquipment
									: ""
							}
							onChange={handleChangeEquip}
						></textarea>
					</div>
					<label htmlFor="equips-box" className="equips-box-label">
						equipment
					</label>
				</div>
			</div>
			<div className="feats-rp-traits-box">
				<div className="rp-traits-box">
					<div className="pers-traits">
						<textarea
							name="personalityTraits"
							id="pers-traits-text"
							value={
								characterSheet?.rpTraits?.personalityTraits
									? characterSheet?.rpTraits?.personalityTraits
									: ""
							}
							onChange={handleChangeRPTraits}
						></textarea>
						<label htmlFor="pers-traits-text">personality traits</label>
					</div>
					<div className="ideals">
						<textarea
							name="ideals"
							id="ideals-text"
							value={
								characterSheet?.rpTraits?.ideals
									? characterSheet?.rpTraits?.ideals
									: ""
							}
							onChange={handleChangeRPTraits}
						></textarea>
						<label htmlFor="ideals-text">ideals</label>
					</div>
					<div className="bonds">
						<textarea
							name="bonds"
							id="bonds-text"
							value={
								characterSheet?.rpTraits?.bonds
									? characterSheet?.rpTraits?.bonds
									: ""
							}
							onChange={handleChangeRPTraits}
						></textarea>
						<label htmlFor="bonds-text">bonds</label>
					</div>
					<div className="flaws">
						<textarea
							name="flaws"
							id="flaws-text"
							value={
								characterSheet?.rpTraits?.flaws
									? characterSheet?.rpTraits?.flaws
									: ""
							}
							onChange={handleChangeRPTraits}
						></textarea>
						<label htmlFor="flaws-text">flaws</label>
					</div>
				</div>
				<div className="feats-box">
					<textarea
						name="featsAndTraits"
						id="feats"
						value={
							characterSheet?.featsAndTraits
								? characterSheet?.featsAndTraits
								: ""
						}
						onChange={handleChangeFeats}
					></textarea>
					<label htmlFor="feats">features & traits</label>
				</div>
			</div>
		</div>
	);
}
