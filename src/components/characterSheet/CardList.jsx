import SheetCard from "./SheetCard";
import { useEffect } from "react";

export default function CardList({ characterSheets }) {
	console.log(characterSheets);
	const data = characterSheets?.data;
	console.log(data);

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
			<li className="newCharSheet">+</li>
		</ul>
	);
}
