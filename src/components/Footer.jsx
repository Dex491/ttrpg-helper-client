import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Footer() {
	return (
		<div className="footer flex-no-margin">
			<p className="p1">
				Legal Stuff: made by me, don't distribute without my permission etc. :)
			</p>
			<a
				href="https://www.flaticon.com/free-icons/d20"
				title="https://www.flaticon.com/free-icons/d20"
				className="push"
			>
				D20 icon by Freepik
			</a>
		</div>
	);
}
