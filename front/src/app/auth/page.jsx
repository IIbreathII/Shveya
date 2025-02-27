"use client";

import AuthForm from "$component/auth/AuthForm/AuthForm";
import "$style/auth/Auth.css"

export default function AuthPage() {

	return (
		<main className='main-auth'>
			<AuthForm/>
		</main>
	);
}