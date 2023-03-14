import Footer from "../Footer";
import Header from "../Header";

export default function CharacterSheets() {
	const [characterSheets, setCharacterSheets] = useState(null);
	return (
		<>
			<Header />
			<div className="container">
				{/* TODO: Generate a card for each character sheet */}
			</div>
			<Footer />
		</>
	);
}
