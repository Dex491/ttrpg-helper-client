import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
	return (
		<header>
			<AppBar>
				<Toolbar>
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
					>
						Character Sheets
					</Button>
				</Toolbar>
			</AppBar>
		</header>
	);
}
