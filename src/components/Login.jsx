import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ supabase }) {
	const nav = useNavigate();

	supabase.auth.onAuthStateChange(async (e) => {
		if (e !== "SIGNED_OUT") {
			nav("/");
		} else {
			nav("/login");
		}
	});

	useEffect(() => {}, []);

	return (
		<>
			<div className="auth-container">
				<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
					theme="dark"
					providers={["github", "discord"]}
				/>
			</div>
			<div className="guest-container">
				<p>
					Hey! If you don't want to use your personal accounts (for whatever
					reason that may be, I don't judge) <br />
					you can use the below details for a guest account!
					<br />
					Guest email: Guest1@example.com
					<br />
					Guest password: pass123
				</p>
			</div>
		</>
	);
}
