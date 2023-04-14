import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@mui/material";

export default function Home({ supabase, user }) {
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
			<Header supabase={supabase} user={user} />
			<div className="home-main">
				<h1>Welcome!</h1>
				<p>
					This is a basic helper app made to be used alongside a TTRPG (tabletop
					role-playing game) session to help enhance the play experience by
					having everything a person (might) need in one place!
				</p>
				<p>
					While I can still think of a lot more I'd like to do in this project,
					I've learned a lot during my time working on this, and this project is
					at a point where I'm happy leaving it as is and working on other
					ideas; though I will definitely come back to this again! If you want
					to follow my progress keep checking back here, or you can watch my
					repos below:
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
