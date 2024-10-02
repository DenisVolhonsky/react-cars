import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../api.ts";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password,
        name,
      });
      console.log("response:", response.data);
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        alert("Регистрация прошла успешно!");
      }
    } catch (error) {
      console.error(
        "Ошибка регистрации:",
        error.response ? error.response.data : error.message
      );
      alert("Ошибка регистрации");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default Signup;
