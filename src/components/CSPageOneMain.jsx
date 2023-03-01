import BaseStat from "./BaseStat";
import Skill from "./Skill";

export default function CSPageOneMain() {
	return (
		<div className="csPageOneMain">
			<div className="other-profs">
				<div className="pass-per-box">
					<input id="pass-per" type="text" />
					<label htmlFor="pass-per">passive wisdom (perception)</label>
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
					<BaseStat stat="strength" />
					<BaseStat stat="dexterity" />
					<BaseStat stat="constitution" />
					<BaseStat stat="intelligence" />
					<BaseStat stat="wisdom" />
					<BaseStat stat="charisma" />
				</ul>
			</div>
			<div className="skills-col">
				<div className="insp-prof">
					<div className="insp-box">
						<input id="insp" type="checkbox" />
						<label htmlFor="insp">inspiration</label>
					</div>
					<div className="prof-box">
						<input id="prof" type="text" />
						<label htmlFor="prof">proficiency bonus</label>
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
				</div>
				<div className="attacks-box"></div>
				<div className="equips-box"></div>
			</div>
			<div className="rp-traits"></div>
		</div>
	);
}
