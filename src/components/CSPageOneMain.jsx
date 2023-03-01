export default function CSPageOneMain() {
	return (
		<div className="csPageOneMain">
			<div className="other-profs"></div>
			<div className="base-stats">
				<ul>
					<li>
						<label htmlFor="str">strength</label>
						<input type="text" id="str" className="stat" />
						<input type="text" id="str-mod" className="stat-mod" />
					</li>
					<li>
						<label htmlFor="dex">dexterity</label>
						<input type="text" id="dex" className="stat" />
						<input type="text" id="dex-mod" className="stat-mod" />
					</li>
					<li>
						<label htmlFor="con">constitution</label>
						<input type="text" id="con" className="stat" />
						<input type="text" id="con-mod" className="stat-mod" />
					</li>
					<li>
						<label htmlFor="int">intelligence</label>
						<input type="text" id="int" className="stat" />
						<input type="text" id="int-mod" className="stat-mod" />
					</li>
					<li>
						<label htmlFor="wis">wisdom</label>
						<input type="text" id="wis" className="stat" />
						<input type="text" id="wis-mod" className="stat-mod" />
					</li>
					<li>
						<label htmlFor="cha">charisma</label>
						<input type="text" id="cha" className="stat" />
						<input type="text" id="cha-mod" className="stat-mod" />
					</li>
				</ul>
			</div>
			<div className="skills"></div>
			<div className="health-equips"></div>
			<div className="rp-traits"></div>
		</div>
	);
}
