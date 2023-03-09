import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import "./App.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/characterSheet" element={<CharacterSheet />} />
			</Routes>
		</>
	);
}

export default App;
