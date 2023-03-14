import Footer from "./Footer";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
	"https://ebnelctvcmterhobcrwm.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVibmVsY3R2Y210ZXJob2JjcndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MDY3NzcsImV4cCI6MTk5NDM4Mjc3N30.yJ3TtK_mo4aTgsQHbhgeq0CGfUbNrl87tXlkJpNzS_k"
);

export default function Login() {
	return (
		<>
			<div className="auth-container">
				<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
					theme="dark"
					providers={
						[
							// "google", "github", "discord"
						]
					}
				/>
			</div>

			<Footer />
		</>
	);
}
