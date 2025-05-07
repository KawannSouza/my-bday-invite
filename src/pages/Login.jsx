import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const url = "http://localhost:8080";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate("/register")
    }

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Preencha todos os campos");
            return
        }

        try {
            const response = await axios.post(`${url}/invite/login`, { email, password });
            if (response.status === 200) {
                login(response.data.token);
                toast.success("Login realizado com sucesso!");
                setTimeout(() => {
                    navigate("/home");
                }, 1000);
            }
        } catch (error) {
            console.log(error);
            toast.error("Erro ao realizar login!");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>LOGIN</h1>
            <button 
                onClick={goToRegister}
                className="cursor-pointer"
            >
                Não Possui uma Conta ?
            </button>
            <div className="flex flex-col items-center justify-center">
                <input 
                    type="email" 
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Digite sua Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="cursor-pointer"
                >
                    ENTRAR
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}