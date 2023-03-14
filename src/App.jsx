import { Routes, Route } from "react-router-dom";
import CharacterSheet from "./components/characterSheet/CharacterSheet";
import CharacterSheets from "./components/characterSheet/CharacterSheets";
import Home from "./components/Home";
import Login from "./components/Login";
import "./styles/App.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/characterSheet/:id" element={<CharacterSheet />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/characterSheets" element={<CharacterSheets />} />
			</Routes>
		</>
	);
}
