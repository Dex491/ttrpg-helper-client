import SheetCard from "./SheetCard";

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
