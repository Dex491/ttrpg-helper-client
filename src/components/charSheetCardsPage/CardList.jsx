import { Link } from "react-router-dom";

import SheetCard from "./SheetCard";

export default function CardList({ characterSheets, user }) {
	const data = characterSheets?.data;
	console.log(data);

	const filteredData = characterSheets?.data
		? data.filter((item) => item.userID === user.id)
		: "loading";
	console.log(filteredData);

	return (
		<ul className="cardList">
			<SheetCard
				characterSheets={characterSheets}
				key={1}
				id={1}
				className="sampleCard"
			/>
			{data
				? filteredData.map((item) => (
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
