export default function BaseStat({ stat }) {
	return (
		<li>
			<label htmlFor={stat}>{stat}</label>
			<input type="text" id={stat} className="stat" />
			<input type="text" id={`${stat}-mod`} className="stat-mod" />
		</li>
	);
}
