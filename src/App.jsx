import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import Home from "./components/Home";
import "./App.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/characterSheet/:id" element={<CharacterSheet />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}
