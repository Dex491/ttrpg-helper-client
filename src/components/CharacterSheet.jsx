import CharacterSheetHeader from "./CharacterSheetHeader";
import CSPageOneMain from "./CSPageOneMain";

export default function CharacterSheet() {
	return (
		<>
			<form className="sheet">
				<CharacterSheetHeader />
				<CSPageOneMain />
			</form>
		</>
	);
}
