import { useState } from "react";
import api from "@/api/axios";
import { useNavigate } from "@tanstack/react-router";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/admin/login", {
        email,
        password,
      });

      const token = res.data.token;

      localStorage.setItem("token", token);

      navigate({ to: "/" }); // روح للداشبورد
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-80 m-auto mt-40">
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}