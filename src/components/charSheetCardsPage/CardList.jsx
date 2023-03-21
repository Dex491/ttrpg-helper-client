import { Link } from "react-router-dom";

import SheetCard from "./SheetCard";

export default function CardList({ characterSheets }) {
	const data = characterSheets?.data;

	return (
		<ul className="cardList">
			{data
				? data.map((item) => (
						<SheetCard
							characterSheets={characterSheets}
							key={item.id}
							id={item.id}
						/>
				  ))
				: "Loading"}

			<li className="newCharSheet">
				<Link className="CSButton" to={"/newCharacterSheet"}>
					+
				</Link>
			</li>
		</ul>
	);
}
