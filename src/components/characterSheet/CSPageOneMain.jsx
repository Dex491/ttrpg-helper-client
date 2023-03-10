import BaseStat from "./BaseStat";
import Skill from "./Skill";
import Save from "./Save";

export default function CSPageOneMain({ characterSheet, setCharacterSheet }) {
	console.log(characterSheet);

	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		console.log(name, value);

		if (name === "profBonus" || name === "passPer") {
			value = Number(value);
		}

		setCharacterSheet({ ...characterSheet, [name]: value });
	};

	const handleChangeHealthStats = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		console.log(name, value);

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
		let value = e.target.value;
		console.log(name, value);

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

	const handleChangeHitDice = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		console.log(name, value);

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
		let checked = e.target.checked;

		if (name === "inspiration") {
			setCharacterSheet({ ...characterSheet, [name]: checked });
			console.log(checked);
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
						name="other-profs-text"
						id="other-profs-text"
						cols="30"
						rows="10"
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
							<input id="success" type="checkbox" />
							<input id="success" type="checkbox" />
							<input id="success" type="checkbox" />
							<label htmlFor="failure" className="failure-label">
								failure
							</label>
							<input id="failure" type="checkbox" />
							<input id="failure" type="checkbox" />
							<input id="failure" type="checkbox" />
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
							characterSheet?.atkStats?.attacks[0].name
								? characterSheet?.atkStats?.attacks[0].name
								: ""
						}
						name="name"
						// TODO: Temp read only for presentation
						readOnly
					/>
					<input className="weapon-2-name" placeholder="Longsword" />
					<input className="weapon-3-name" />
					<input
						className="weapon-1-bonus"
						placeholder="+1"
						value={
							characterSheet?.atkStats?.attacks[0].atk
								? `+${characterSheet?.atkStats?.attacks[0].atk}`
								: ""
						}
						name="atk"
						// TODO: Temp read only for presentation
						readOnly
					/>
					<input className="weapon-2-bonus" placeholder="0" />
					<input className="weapon-3-bonus" />
					<input
						className="weapon-1-dmg"
						placeholder="1d4 piercing"
						value={
							characterSheet?.atkStats?.attacks[0].damage
								? characterSheet?.atkStats?.attacks[0].damage
								: ""
						}
						readOnly
					/>
					<input className="weapon-2-dmg" placeholder="1d8 slashing" />
					<input className="weapon-3-dmg" />
					<textarea
						className="weapon-full-desc"
						name="fullDescription"
						id="weapon-full-desc"
						value={
							characterSheet?.atkStats?.fullDescription
								? characterSheet?.atkStats?.fullDescription
								: ""
						}
						readOnly
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
									readOnly
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
									readOnly
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
									readOnly
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
									readOnly
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
									readOnly
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
							readOnly
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
							readOnly
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
							readOnly
						></textarea>
						<label htmlFor="ideals-text">ideals</label>
					</div>
					<div className="bonds">
						<textarea
							name="bonds-text"
							id="bonds-text"
							value={
								characterSheet?.rpTraits?.bonds
									? characterSheet?.rpTraits?.bonds
									: ""
							}
							readOnly
						></textarea>
						<label htmlFor="bonds-text">bonds</label>
					</div>
					<div className="flaws">
						<textarea
							name="flaws-text"
							id="flaws-text"
							value={
								characterSheet?.rpTraits?.flaws
									? characterSheet?.rpTraits?.flaws
									: ""
							}
							readOnly
						></textarea>
						<label htmlFor="flaws-text">flaws</label>
					</div>
				</div>
				<div className="feats-box">
					<textarea
						name="feats"
						id="feats"
						value={
							characterSheet?.featsAndTraits
								? characterSheet?.featsAndTraits
								: ""
						}
						readOnly
					></textarea>
					<label htmlFor="feats">features & traits</label>
				</div>
			</div>
		</div>
	);
}
