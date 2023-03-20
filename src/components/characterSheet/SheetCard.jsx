export default function SheetCard({ characterSheets, id }) {
	console.log(characterSheets);
	id--;
	return (
		<li>
			<p>{characterSheets?.data?.[id]?.headerStats.charName}</p>
			<p>{characterSheets?.data?.[id]?.headerStats.class}</p>
		</li>
	);
}
