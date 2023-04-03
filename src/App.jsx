import { Routes, Route } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import CharacterSheet from "./components/characterSheet/CharacterSheet";
import CharacterSheets from "./components/charSheetCardsPage/CharacterSheets";
import NewCharacterSheet from "./components/characterSheet/NewCharacterSheet";
import Home from "./components/Home";
import Login from "./components/Login";
import Success from "./components/Success";
import "./styles/App.css";

const supabase = createClient(
	"https://ebnelctvcmterhobcrwm.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVibmVsY3R2Y210ZXJob2JjcndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MDY3NzcsImV4cCI6MTk5NDM4Mjc3N30.yJ3TtK_mo4aTgsQHbhgeq0CGfUbNrl87tXlkJpNzS_k"
);

export default function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		async function getUserData() {
			await supabase.auth.getUser().then((value) => {
				if (value.data?.user) {
					console.log(value.data.user);
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
					element={<CharacterSheet supabase={supabase} />}
				/>
				<Route path="/" element={<Home supabase={supabase} />} />
				<Route path="/login" element={<Login supabase={supabase} />} />
				<Route path="/success" element={<Success />} />
				<Route
					path="/characterSheets"
					element={<CharacterSheets supabase={supabase} />}
				/>
				<Route
					path="/newCharacterSheet"
					element={<NewCharacterSheet supabase={supabase} />}
				/>
			</Routes>
		</>
	);
}
