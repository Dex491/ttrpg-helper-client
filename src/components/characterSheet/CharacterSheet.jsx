import { useState, useEffect } from "react";
import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";
import Footer from "../Footer";
import Header from "../Header";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";

const apiUrl = "https://ttrpg-helper-server-production.up.railway.app";

export default function CharacterSheet({ supabase, user }) {
	const [characterSheet, setCharacterSheet] = useState([]);
	let { id } = useParams();
	id++;

	const nav = useNavigate();

	if (!characterSheet?.userID) {
		console.log("");
	} else if (user.id !== characterSheet.userID) {
		nav("/characterSheets");
	}

	const buttonStyling = {
		display: "flex",
		backgroundColor: "grey",
		color: "white",
		alignContent: "center",
		p: "0.5em",
		fontSize: 12,
	};

	const buttonStylingDelete = {
		display: "flex",
		backgroundColor: "rgb(200, 0, 0)",
		color: "white",
		alignContent: "center",
		p: "0.5em",
		fontSize: 12,
	};

	useEffect(() => {
		fetchCS();
	}, []);

	const fetchCS = async () => {
		const res = await fetch(`${apiUrl}/characterSheet/${id}`);
		const data = await res.json();
		setCharacterSheet(data.data);
	};

	if (characterSheet === undefined) {
		return <p>Loading</p>;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userID = user.id;

		if (!characterSheet.userID) {
			try {
				characterSheet.userID = user.id;
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
				console.log(data.data);
				nav("/characterSheets");
			} catch (error) {
				console.log(error);
			}
		} else {
			try {
				const options = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						// authorization: `Bearer ${accessToken}`,
					},
					body: JSON.stringify(characterSheet, userID),
				};

				const res = await fetch(`${apiUrl}/characterSheet/${id}`, options);
				const data = await res.json();
				setCharacterSheet(data.data);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const handleDelete = async (e) => {
		try {
			const options = {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					// authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(characterSheet),
			};

			const res = await fetch(`${apiUrl}/characterSheet/${id}`, options);
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
						{!characterSheet.userID ? "Save Copy" : "Save"}
					</Button>
					<Button
						sx={buttonStylingDelete}
						onClick={() => {
							handleDelete();
						}}
						disabled={!characterSheet.userID ? true : false}
					>
						Delete
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
