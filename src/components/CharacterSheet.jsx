import { useState, useEffect } from "react";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";
import Footer from "./Footer";
import Header from "./Header";
import { Button } from "@mui/material";

const apiUrl = "http://localhost:4000";

export default function CharacterSheet() {
	const [characterSheet, setCharacterSheet] = useState([]);

	const buttonStyling = {
		display: "flex",
		backgroundColor: "#1976d2",
		color: "white",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "1em",
	};

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// TODO: Hard coded for now
			const res = await fetch(`${apiUrl}/characterSheet/1`);
			const data = await res.json();
			setCharacterSheet([...characterSheet, data.data[0]]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header />

			<form className="sheet" onSubmit={handleSubmit}>
				<Button className="button" type="submit" sx={buttonStyling}>
					Save
				</Button>
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
