import { Routes, Route } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import CharacterSheet from "./components/characterSheet/CharacterSheet";
import CharacterSheets from "./components/charSheetCardsPage/CharacterSheets";
import NewCharacterSheet from "./components/characterSheet/NewCharacterSheet";
import Home from "./components/Home";
import Login from "./components/Login";
import "./styles/App.css";

let apiUrl;
const supabaseUrl = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (import.meta.env.VITE_MODE === "dev") {
	console.log(import.meta.env.MODE);
	apiUrl = import.meta.env.VITE_DEV_API_URL;
} else {
	apiUrl = import.meta.env.VITE_API_URL;
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		async function getUserData() {
			await supabase.auth.getUser().then((value) => {
				if (value.data?.user) {
					setUser(value.data.user);
				}
			});
		}
		getUserData();
	}, [setUser]);

	return (
		<>
			<Routes>
				<Route
					path="/characterSheet/:id"
					element={
						<CharacterSheet supabase={supabase} user={user} apiUrl={apiUrl} />
					}
				/>
				<Route path="/" element={<Home supabase={supabase} user={user} />} />
				<Route path="/login" element={<Login supabase={supabase} />} />
				<Route
					path="/characterSheets"
					element={
						<CharacterSheets supabase={supabase} user={user} apiUrl={apiUrl} />
					}
				/>
				<Route
					path="/newCharacterSheet"
					element={
						<NewCharacterSheet
							supabase={supabase}
							user={user}
							apiUrl={apiUrl}
						/>
					}
				/>
			</Routes>
		</>
	);
}
