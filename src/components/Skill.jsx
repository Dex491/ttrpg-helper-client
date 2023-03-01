export default function Skill({ name, rootStat }) {
	return (
		<li>
			<input type="checkbox" className="prof" />
			<input type="text" id={`${name}-skill`} className="skill-mod" />
			<label htmlFor="{`${name}-skill`}">
				{name} <span>{rootStat ? rootStat : false}</span>
			</label>
		</li>
	);
}
