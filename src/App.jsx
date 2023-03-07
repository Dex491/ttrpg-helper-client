import { useEffect, useState } from "react";
import CharacterSheet from "./components/CharacterSheet";
import "./App.css";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<CharacterSheet />

			{/*
        TODO: Add this to a footer
        <a href="https://www.flaticon.com/free-icons/d20" title="d20 icons">
				D20 icon by Freepik
			  </a> 
      */}
		</>
	);
}

export default App;
