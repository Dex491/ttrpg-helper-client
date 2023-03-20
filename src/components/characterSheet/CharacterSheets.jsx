import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import CardList from "./CardList";

const apiUrl = "http://localhost:4000";

export default function CharacterSheets() {
	const [characterSheets, setCharacterSheets] = useState([]);

	useEffect(() => {
		fetchAllCS();
	}, []);

	const fetchAllCS = async () => {
		const res = await fetch(`${apiUrl}/characterSheet`);
		const data = await res.json();
		setCharacterSheets(data);
		console.log(characterSheets);
	};

	const loading = ["loading", "loading2"];

	return (
		<>
			<Header />
			<div className="container">
				<CardList characterSheets={characterSheets} />
				{
					/* TODO: Generate a card for each character sheet */
					// characterSheets.forEach((sheet) => {
					// 	<li>
					// 		<p>name</p>
					// 	</li>;
					// })
					// loading.map((item) => (
					// 	<SheetCard characterSheets={characterSheets} />
					// ))
				}
				<hr />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
					ipsa laboriosam dolorem animi adipisci, error rem consectetur cumque
					quidem! Eveniet amet possimus doloremque omnis eligendi molestias
					reprehenderit dolor modi minima?
				</p>
			</div>

			<Footer />
		</>
	);
}