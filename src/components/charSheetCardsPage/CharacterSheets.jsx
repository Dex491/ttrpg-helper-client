import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import CardList from "./CardList";

export default function CharacterSheets({ supabase, user, apiUrl }) {
	const [characterSheets, setCharacterSheets] = useState([]);

	useEffect(() => {
		if (!user.id) {
			console.log("no user id found");
			nav("/login");
		}
	}, [user]);

	useEffect(() => {
		fetchAllCS();
	}, []);

	const fetchAllCS = async () => {
		const res = await fetch(`${apiUrl}/characterSheet`);
		const data = await res.json();
		setCharacterSheets(data);
	};

	return (
		<>
			<Header supabase={supabase} user={user} />
			<div className="container">
				<h1 className="cardListTitle">D&D 5e Sheets</h1>
				<CardList characterSheets={characterSheets} user={user} />
				<hr />
				<p>
					You can use the above cards to view saved character sheets and create
					new ones, and as you can also see above there's a sample character in
					<span style={{ color: "#19a4d2", fontWeight: 700 }}> blue</span> -
					Wilric, a level 10 warlock - of which you can save a copy. If you're
					logged in as a<span style={{ fontWeight: 700 }}> Guest</span> all of
					your changes will only be
					<span style={{ fontWeight: 700 }}> local.</span>
				</p>
			</div>

			<Footer />
		</>
	);
}
