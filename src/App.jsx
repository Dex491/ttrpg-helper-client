import { Routes, Route } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import CharacterSheet from "./components/characterSheet/CharacterSheet";
import CharacterSheets from "./components/charSheetCardsPage/CharacterSheets";
import NewCharacterSheet from "./components/characterSheet/NewCharacterSheet";
import Home from "./components/Home";
import Login from "./components/Login";
import "./styles/App.css";

const supabase = createClient(
	import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL,
	import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY
);

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
					element={<CharacterSheet supabase={supabase} user={user} />}
				/>
				<Route path="/" element={<Home supabase={supabase} user={user} />} />
				<Route path="/login" element={<Login supabase={supabase} />} />
				<Route
					path="/characterSheets"
					element={<CharacterSheets supabase={supabase} user={user} />}
				/>
				<Route
					path="/newCharacterSheet"
					element={<NewCharacterSheet supabase={supabase} user={user} />}
				/>
			</Routes>
		</>
	);
}
