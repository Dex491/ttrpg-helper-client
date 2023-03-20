import SheetCard from "./SheetCard";
import { useEffect } from "react";

export default function CardList({ characterSheets }) {
	console.log(characterSheets);
	const data = characterSheets?.data;
	console.log(data);

	// useEffect(() => {
	// 	if (!data) {
	// 		console.log("undefined true");
	// 	}
	// }, [data]);

	return (
		<ul>
			{data
				? data.map((item) => (
						<SheetCard
							characterSheets={characterSheets}
							key={item.id}
							id={item.id}
						/>
				  ))
				: "Loading"}
		</ul>
	);
}
