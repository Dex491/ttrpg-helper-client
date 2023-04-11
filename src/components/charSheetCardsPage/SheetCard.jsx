import { Link } from "react-router-dom";

export default function SheetCard({ characterSheets, id, className }) {
	id--;

	return (
		<li className={className}>
			<Link className="CSButton" to={`/characterSheet/${id}`}>
				<p>{characterSheets?.data?.[id]?.headerStats.charName}</p>
				<p>{characterSheets?.data?.[id]?.headerStats.class}</p>
			</Link>
		</li>
	);
}
