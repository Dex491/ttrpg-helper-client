import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
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
