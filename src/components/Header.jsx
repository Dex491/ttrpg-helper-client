import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
	const buttonStyling = {
		display: "flex",
		backgroundColor: "grey",
		color: "white",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "1em",
	};

	const hardCodedID = 1;

	return (
		<header>
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
					<Button
						className="push"
						sx={buttonStyling}
						href={`/characterSheet/${hardCodedID}`}
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
