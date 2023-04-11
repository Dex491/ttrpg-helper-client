import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import CardList from "./CardList";

const apiUrl = "http://localhost:4000";

export default function CharacterSheets({ supabase, user }) {
	const [characterSheets, setCharacterSheets] = useState([]);

	useEffect(() => {
		fetchAllCS();
	}, []);

	const fetchAllCS = async () => {
		const res = await fetch(`${apiUrl}/characterSheet`);
		const data = await res.json();
		console.log(data);
		setCharacterSheets(data);
	};

	return (
		<>
			<Header supabase={supabase} user={user} />
			<div className="container">
				<h1 className="cardListTitle">D&D 5e Sheets</h1>
				<CardList characterSheets={characterSheets} />
				<hr />
				<p>
					You can use the above cards to view saved character sheets and create
					new ones, and as you can see above there's a sample character -
					Wilric, a level 10 warlock. If you're logged in as a{" "}
					<span style={{ fontWeight: 700 }}>Guest</span> all of your changes
					will only be <span style={{ fontWeight: 700 }}>local.</span>
				</p>
			</div>

			<Footer />
		</>
	);
}
