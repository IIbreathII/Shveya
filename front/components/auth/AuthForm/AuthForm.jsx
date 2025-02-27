"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff } from 'lucide-react';
import Image from "next/image";

const AuthForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    // Авторизация через Google
    const Google = () => {
        router.push(`${process.env.BACK_URL_IMG}auth/google`);
    };

    // Авторизация через базу данных
    const DataBase = async () => {
        if (!username || !password) {
            setError("Будь ласка, заповніть всі поля");
            return;
        }

        try {
            await axios.post(
                `${process.env.BACK_URL_IMG}auth/login`,
                { username, password },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true, // Включаем поддержку cookies
                }
            );

            router.push("/dashboard"); // Перенаправление после успешного входа
        } catch (err) {
            setError("Неправильне ім'я користувача або пароль");
            console.error("Помилка авторизації:", err);
        }
    };

    return (
        <div className="login-form">
            <h2 className="login-form__title">Авторизація</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                    <label className="login-form__label" htmlFor="username">
                        Ім&apos;я користувача
                    </label>
                    <input
                        className="login-form__input"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Введіть ім'я користувача"
                    />
                </div>
                <div className="input-group _last">
                    <label className="login-form__label" htmlFor="password">Пароль</label>
                    <div className="password-wrapper">
                        <input
                            className="login-form__input"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Введіть пароль"
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>
                <div className="button-group">
                    <button className="login-form__submit" type="button" onClick={DataBase}>
                        Увійти
                    </button>
                    <button className="google-button" type="button" onClick={Google}>
                        <Image
                            src={"/images/google.png"}
                            width={25}
                            height={25}
                            alt="google auth"
                        />
                        Continue with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
