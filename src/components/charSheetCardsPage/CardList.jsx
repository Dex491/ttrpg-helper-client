import { Link } from "react-router-dom";

import SheetCard from "./SheetCard";

export default function CardList({ characterSheets, user }) {
	const data = characterSheets?.data;
	let guestLimit;
	console.log(guestLimit);

	const filteredData = characterSheets?.data
		? data.filter((item) => item.userID === user.id)
		: "loading";

	if (
		filteredData.length >= 5 &&
		user.id === "62c46ef2-13cf-44eb-be20-7f97b2c29b8c"
	) {
		guestLimit = true;
		console.log("guest account at limit", guestLimit);
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

			<li className={"newCharSheet" + (guestLimit ? " disabled" : "")}>
				<Link
					className="CSButton"
					to={"/newCharacterSheet"}
					onClick={guestLimit ? (e) => e.preventDefault() : null}
				>
					+
				</Link>
			</li>
		</ul>
	);
}
