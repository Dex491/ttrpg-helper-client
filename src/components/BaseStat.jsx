export default function BaseStat({ stat }) {
	let statValue = "";

	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		console.log(name, value);
		if (name === "strength") {
			value = Number(value);
		}
	};

	return (
		<li>
			<label htmlFor={stat}>{stat}</label>
			<input
				type="text"
				id={stat}
				className="stat"
				name={stat}
				value={statValue}
				onChange={handleChange}
			/>
			<input
				type="text"
				id={`${stat}-mod`}
				className="stat-mod"
				// TODO: this only works for - stat mods for example 8/9 is -1, but 11 is +1
				value={((25 - 10) / 2).toFixed()}
				onChange={handleChange}
			/>
		</li>
	);
}
