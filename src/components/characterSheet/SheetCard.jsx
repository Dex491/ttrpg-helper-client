export default function SheetCard({ characterSheets }) {
	console.log(characterSheets);
	return (
		<li>
			<p>{characterSheets?.data?.[0]?.headerStats.charName}</p>
			<p>{characterSheets?.data?.[0]?.headerStats.class}</p>
		</li>
	);
}
