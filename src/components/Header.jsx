import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
export default function Header() {
	let buttonStyling = {
		display: "flex",
		backgroundColor: "grey",
		color: "white",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "1em",
	};
	const options = ["D&D", "Dusk City Outlaws", "WH 40k"];
	const defaultOption = options[0];
	const hardCodedID = 1;
	let headerSelected = "2";
	let selectedOption = "D&D";

	const handleChange = (option) => {
		selectedOption = option.value;
		if (selectedOption === "Dusk City Outlaws") {
			console.log(2, selectedOption);
		} else if (selectedOption === "D&D") {
			console.log(1, selectedOption);
		} else if (selectedOption === "WH 40k") {
			buttonStyling = { ...buttonStyling, backgroundColor: "red" };
			console.log(3, selectedOption);
		}
	};

	return (
		<header className={headerSelected}>
			<AppBar>
				<Toolbar className="toolBar">
					<div className="headerLogo">
						<img src="../../d20-header.png" alt="TTRPG Helper logo" />
						<Typography variant="h6" component="h1">
							TTRPG Helper
						</Typography>
					</div>
					<Button sx={buttonStyling} href="/">
						Home
					</Button>
					<Dropdown
						options={options}
						onChange={handleChange}
						value={selectedOption}
						placeholder="Select"
					/>

					<Button
						className="push"
						sx={buttonStyling}
						href={`${selectedOption}/characterSheet/${hardCodedID}`}
					>
						Character Sheets
					</Button>
					<Button sx={buttonStyling} href="/logOut">
						Log out
					</Button>
				</Toolbar>
			</AppBar>
		</header>
	);
}
