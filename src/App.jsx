import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CharacterSheet from "./components/characterSheet/CharacterSheet";
import Home from "./components/Home";
import "./styles/App.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="D&D/characterSheet/:id" element={<CharacterSheet />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}
