import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "react-dropdown/style.css";

export default function Header({ supabase, user }) {
	const buttonStyling = {
		display: "flex",
		backgroundColor: "grey",
		color: "white",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "1em",
	};

	async function signOutUser() {
		const { error } = await supabase.auth.signOut();
	}

	console.log(user);

	return (
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

				<Button className="push" sx={buttonStyling} href={`/characterSheets`}>
					Character Sheets
				</Button>
				<Button sx={buttonStyling} onClick={() => signOutUser()} href="/login">
					Sign out
				</Button>
				<img
					src={
						user?.user_metadata?.avatar_url
							? user.user_metadata.avatar_url
							: "../../default-user-icon.png"
					}
					className="headerUserImage"
					alt="user pfp"
				/>
			</Toolbar>
		</AppBar>
	);
}
