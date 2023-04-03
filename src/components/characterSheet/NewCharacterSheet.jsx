import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Footer from "../Footer";
import Header from "../Header";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";

const apiUrl = "http://localhost:4000";

export default function NewCharacterSheet() {
	const [characterSheet, setCharacterSheet] = useState([]);
	const nav = useNavigate();

	const buttonStyling = {
		display: "flex",
		backgroundColor: "grey",
		color: "white",
		alignContent: "center",
		p: "0.5em",
		fontSize: 12,
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
			nav("/characterSheets");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header />
			<form className="sheet" onSubmit={handleSubmit}>
				<div className="optionsBar">
					<Button className="push" type="submit" sx={buttonStyling}>
						Save
					</Button>
				</div>
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
