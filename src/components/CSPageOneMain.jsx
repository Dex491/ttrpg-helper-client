import BaseStat from "./BaseStat";
import Skill from "./Skill";

export default function CSPageOneMain({ characterSheet, setCharacterSheet }) {
	console.log(characterSheet);

	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		console.log(name, value);

		setCharacterSheet({ ...characterSheet, [name]: value });
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
						<Skill name="Strength" />
						<Skill name="Dexterity" />
						<Skill name="Constitution" />
						<Skill name="Intelligence" />
						<Skill name="Wisdom" />
						<Skill name="Charisma" />
						<label>saving throws</label>
					</ul>
				</div>
				<div className="skills">
					<ul>
						<Skill name="Acrobatics" rootStat="(Dex)" />
						<Skill name="Animal Han." rootStat="(Wis)" />
						<Skill name="Arcana" rootStat="(Int)" />
						<Skill name="Athletics" rootStat="(Str)" />
						<Skill name="Deception" rootStat="(Cha)" />
						<Skill name="History" rootStat="(Int)" />
						<Skill name="Insight" rootStat="(Wis)" />
						<Skill name="Intimidation" rootStat="(Cha)" />
						<Skill name="Investigation" rootStat="(Int)" />
						<Skill name="Medicine" rootStat="(Int)" />
						<Skill name="Nature" rootStat="(Int)" />
						<Skill name="Perception" rootStat="(Wis)" />
						<Skill name="Performance" rootStat="(Cha)" />
						<Skill name="Persuasion" rootStat="(Cha)" />
						<Skill name="Religion" rootStat="(Int)" />
						<Skill name="Sleight of H." rootStat="(Dex)" />
						<Skill name="Stealth" rootStat="(Dex)" />
						<Skill name="Survival" rootStat="(Wis)" />
						<label>skills</label>
					</ul>
				</div>
			</div>
			<div className="health-equips">
				<div className="health-box">
					<ul className="top-line">
						<li className="armour-class-box">
							<input id="armour-class" type="text" />
							<label htmlFor="armour-class">armour class</label>
						</li>
						<li className="initiative-box">
							<input id="initiative" type="text" />
							<label htmlFor="initiative">initiative</label>
						</li>
						<li className="speed-box">
							<input id="speed" type="text" />
							<label htmlFor="speed">speed</label>
						</li>
					</ul>
					<div className="hp-box">
						<label htmlFor="hp-max" className="hp-max-label">
							Hit Point Max.
						</label>
						<input type="text" id="hp-max" />
						<input type="text" id="current-hp" />
						<label htmlFor="current-hp" className="current-hp-label">
							current hit points
						</label>
					</div>
					<div className="flex">
						<div className="hit-dice">
							<label htmlFor="hit-dice-total" className="hit-dice-total-label">
								Total
							</label>
							<input type="text" id="hit-dice-total" />
							<input type="text" id="hit-dice" />
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
					<input className="weapon-1-name" placeholder="+1 Dagger" />
					<input className="weapon-2-name" />
					<input className="weapon-3-name" />
					<input className="weapon-1-bonus" placeholder="+1" />
					<input className="weapon-2-bonus" />
					<input className="weapon-3-bonus" />
					<input className="weapon-1-dmg" placeholder="1d4 piercing" />
					<input className="weapon-2-dmg" />
					<input className="weapon-3-dmg" />
					<textarea
						className="weapon-full-desc"
						name="weapon-full-desc"
						id="weapon-full-desc"
					></textarea>
					<label className="atk-box-label"> attacks & spellcasting</label>
				</div>
				<div className="equips-box">
					<div className="equips-container">
						<div className="currency">
							<div className="cp-box">
								<label htmlFor="cp">cp</label>
								<input type="text" name="cp" />
							</div>
							<div className="sp-box">
								<label htmlFor="sp">sp</label>
								<input type="text" name="sp" />
							</div>
							<div className="ep-box">
								<label htmlFor="ep">ep</label>
								<input type="text" name="ep" />
							</div>
							<div className="gp-box">
								<label htmlFor="gp">gp</label>
								<input type="text" name="gp" />
							</div>
							<div className="pp-box">
								<label htmlFor="pp">pp</label>
								<input type="text" name="pp" />
							</div>
						</div>
						<textarea className="equips" name="equips" id="equips"></textarea>
					</div>
					<label htmlFor="equips-box" className="equips-box-label">
						equipment
					</label>
				</div>
			</div>
			<div className="feats-rp-traits-box">
				<div className="rp-traits-box">
					<div className="pers-traits">
						<textarea name="pers-traits-text" id="pers-traits-text"></textarea>
						<label htmlFor="pers-traits-text">personality traits</label>
					</div>
					<div className="ideals">
						<textarea name="ideals-text" id="ideals-text"></textarea>
						<label htmlFor="ideals-text">ideals</label>
					</div>
					<div className="bonds">
						<textarea name="bonds-text" id="bonds-text"></textarea>
						<label htmlFor="bonds-text">bonds</label>
					</div>
					<div className="flaws">
						<textarea name="flaws-text" id="flaws-text"></textarea>
						<label htmlFor="flaws-text">flaws</label>
					</div>
				</div>
				<div className="feats-box">
					<textarea name="feats" id="feats"></textarea>
					<label htmlFor="feats">features & traits</label>
				</div>
			</div>
		</div>
	);
}
