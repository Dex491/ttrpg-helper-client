import Button from "@mui/material/Button";

export default function Success() {
	const user = "";
	return (
		<>
			{Object.keys(user).length !== 0 ? (
				<>
					<h1>Success</h1>
					<Button onClick={() => signOutUser()} href="/login">
						Sign out
					</Button>
				</>
			) : (
				<>
					<h1>User is not logged in</h1>
					<Button onClick={() => signOutUser()} href="/login">
						Sign in
					</Button>
				</>
			)}
		</>
	);
}
