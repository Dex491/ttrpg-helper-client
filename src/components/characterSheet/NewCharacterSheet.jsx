import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Footer from "../Footer";
import Header from "../Header";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";

export default function NewCharacterSheet({ supabase, user, apiUrl }) {
	const [characterSheet, setCharacterSheet] = useState([]);
	const nav = useNavigate();

	useEffect(() => {
		if (!user.id) {
			console.log("no user");
			nav("/login");
		}
	}, [user]);

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
		characterSheet.userID = user.id;
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
			<Header supabase={supabase} user={user} />
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
