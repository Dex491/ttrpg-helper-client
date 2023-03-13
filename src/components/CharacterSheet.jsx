import { useState, useEffect } from "react";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";
import Footer from "./Footer";
import Header from "./Header";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const apiUrl = "http://localhost:4000";

export default function CharacterSheet() {
	const [characterSheet, setCharacterSheet] = useState([]);
	const { id } = useParams;
	const hardCodedID = 1;

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
		console.log(hardCodedID, id);
		const res = await fetch(`${apiUrl}/characterSheet/${hardCodedID}`);
		const data = await res.json();
		console.log(data);
		// TODO: CSData passed down currently hard coded, will need to check for id when there's multiple sheets
		setCharacterSheet(data.data);
	};

	if (characterSheet === undefined) {
		return <p>Loading</p>;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// TODO: Hard coded for now
			const options = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					// authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(characterSheet),
			};

			const res = await fetch(
				`${apiUrl}/characterSheet/${hardCodedID}`,
				options
			);
			const data = await res.json();
			// data.data[0] = characterSheet;
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
