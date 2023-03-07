import { useState, useEffect } from "react";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";
useState;

const apiUrl = "http://localhost:4000";

export default function CharacterSheet() {
	// console.log(csData[0]);
	const [characterSheet, setCharacterSheet] = useState([]);

	useEffect(() => {
		fetchCS();
	}, []);

	let csData = null;

	const fetchCS = async () => {
		const res = await fetch(`${apiUrl}/characterSheet`);
		const data = await res.json();
		// TODO: CSData passed down currently hard coded, will need to check for id when there's multiple sheets
		setCharacterSheet(data.data[0]);
		csData = data;
	};

	if (characterSheet === undefined) {
		return <p>Loading</p>;
	}

	return (
		<>
			<form className="sheet">
				<CharacterSheetHeader csData={characterSheet.headerStats} />
				<CSPageOneMain csData={csData} />
			</form>
		</>
	);
}
