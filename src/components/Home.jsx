import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@mui/material";

export default function Home() {
	const buttonStyling = {
		display: "flex",
		backgroundColor: "#1976d2",
		color: "white",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "1em",
	};

	return (
		<>
			<Header />
			<div className="home-main">
				<h1>Welcome!</h1>
				<p>
					This is a basic helper app made to be used alongside a TTRPG (Tabletop
					role-playing game) session to help enhance the play experience by
					having everything a person (might) need in one place!
				</p>
				<p>
					It's a little barebones right now, but this is a WIP so expect to see
					more here as time goes on! If you want to follow my progress keep
					checking back here, or you can watch my repos below:
				</p>
				<div className="flex-no-margin">
					<Button
						sx={buttonStyling}
						href="https://github.com/Dex491/ttrpg-helper-client"
						target="_blank"
					>
						Client
					</Button>
					<Button
						sx={buttonStyling}
						href="https://github.com/Dex491/ttrpg-helper-server"
						target="_blank"
					>
						Server
					</Button>
				</div>
			</div>
			<Footer />
		</>
	);
}
