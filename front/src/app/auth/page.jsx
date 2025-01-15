"use client";

import AuthForm from "$component/auth/AuthForm/AuthForm";
import "$style/auth/Auth.css"

export default function InfoPage() {

	return (
		<main style={{height: "660px"}} className='main-auth'>
			<AuthForm/>
		</main>
	);
}