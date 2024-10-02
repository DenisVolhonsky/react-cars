import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../api.ts";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        alert("Вход выполнен успешно!");
        navigate("/"); // Перенаправление на защищенную страницу
      }
    } catch (error) {
      console.error(
        "Ошибка входа:",
        error.response ? error.response.data : error.message
      );
      alert("Ошибка входа");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Вход</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
}

export default Login;
