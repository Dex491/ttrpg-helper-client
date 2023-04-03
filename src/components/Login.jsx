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
					providers={[
						// "google", "github",
						"discord",
					]}
				/>
			</div>
		</>
	);
}
