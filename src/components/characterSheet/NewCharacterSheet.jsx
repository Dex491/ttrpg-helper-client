import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import Footer from "../Footer";
import Header from "../Header";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";

const apiUrl = "http://localhost:4000";

export default function NewCharacterSheet() {
	const [characterSheet, setCharacterSheet] = useState([]);

	const buttonStyling = {
		display: "flex",
		backgroundColor: "#1976d2",
		color: "white",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "1em",
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(characterSheet),
			};

			const res = await fetch(`${apiUrl}/characterSheet`, options);
			const data = await res.json();
			setCharacterSheet(data.data);
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
