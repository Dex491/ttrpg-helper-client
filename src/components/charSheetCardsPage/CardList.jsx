import { Link } from "react-router-dom";

import SheetCard from "./SheetCard";

export default function CardList({ characterSheets, user }) {
	const data = characterSheets?.data;
	let CSLimit;

	const filteredData = characterSheets?.data
		? data.filter((item) => item.userID === user.id)
		: "loading";

	if (
		filteredData.length >= 5 &&
		user.id === "62c46ef2-13cf-44eb-be20-7f97b2c29b8c"
	) {
		CSLimit = true;
	} else if (filteredData.length >= 10) {
		CSLimit = true;
	}
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

			<li className={"newCharSheet" + (CSLimit ? " disabled" : "")}>
				<Link
					className="CSButton"
					to={"/newCharacterSheet"}
					onClick={CSLimit ? (e) => e.preventDefault() : null}
				>
					+
				</Link>
			</li>
		</ul>
	);
}
