import { useState, useEffect } from "react";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";
import Footer from "./Footer";
import Header from "./Header";

const apiUrl = "http://localhost:4000";

export default function CharacterSheet() {
	const [characterSheet, setCharacterSheet] = useState([]);

	useEffect(() => {
		fetchCS();
	}, []);

	const fetchCS = async () => {
		const res = await fetch(`${apiUrl}/characterSheet`);
		const data = await res.json();
		// TODO: CSData passed down currently hard coded, will need to check for id when there's multiple sheets
		setCharacterSheet(data.data[0]);
	};

	if (characterSheet === undefined) {
		return <p>Loading</p>;
	}

	return (
		<>
			<Header />
			<form className="sheet">
				<CharacterSheetHeader
					characterSheet={characterSheet}
					setCharacterSheet={setCharacterSheet}
				/>
				<CSPageOneMain
					characterSheet={characterSheet}
					setCharacterSheet={setCharacterSheet}
				/>
			</form>
			<Footer />
		</>
	);
}
