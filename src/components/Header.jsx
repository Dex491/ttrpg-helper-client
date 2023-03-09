import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
	return (
		<header>
			<AppBar>
				<Toolbar className="toolBar">
					<div className="headerLogo">
						<img src="././public/d20-header.png" alt="TTRPG Helper logo" />
						<Typography variant="h6" component="h1">
							TTRPG Helper
						</Typography>
					</div>
					<Button
						sx={{
							display: "flex",
							backgroundColor: "grey",
							color: "white",
							justifyContent: "space-between",
							alignContent: "center",
							padding: "1em",
						}}
						href="/"
					>
						Home
					</Button>
					<Button
						className="push"
						sx={{
							display: "flex",
							backgroundColor: "grey",
							color: "white",
							justifyContent: "space-between",
							alignContent: "center",
							padding: "1em",
						}}
						href="/characterSheet"
					>
						Character Sheets
					</Button>
					<Button
						sx={{
							display: "flex",
							backgroundColor: "grey",
							color: "white",
							justifyContent: "space-between",
							alignContent: "center",
							padding: "1em",
						}}
						href="/logOut"
					>
						Log out
					</Button>
				</Toolbar>
			</AppBar>
		</header>
	);
}
