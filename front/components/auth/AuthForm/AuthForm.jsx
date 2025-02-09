import React, { useState } from 'react';

const AuthForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!username || !password) {
			setError('Будь ласка, заповніть всі поля');
			return;
		}
		setError('');
	};

	return (
		<div className="login-form">
			<h2 className='login-form__title'>Авторизація</h2>
			{error && <p className='error'>{error}</p>}
			<form onSubmit={handleSubmit}>
				<div className='input-group'>
					<label className='login-form__label' htmlFor="username">Ім&apos;я користувача</label>
					<input
						className='login-form__input'
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Введіть ім&apos;я користувача"
					/>
				</div>
				<div className='input-group' >
					<label className='login-form__label' htmlFor="password">Пароль</label>
					<input
						className='login-form__input'
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Введіть пароль"
						
					/>
				</div>
				<button
					className='login-form__submit'
					type="submit"
				>
					Увійти
				</button>
			</form>
		</div>
	);
};

export default AuthForm;
