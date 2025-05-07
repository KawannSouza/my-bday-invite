import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";

export default function Register() {
    const url = "http://localhost:8080";

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    }

    const handleRegister = async () => {
        if (!username || !email || !password) {
            toast.error("Preencha todos os campos");
            return;
        }

        try {
            await axios.post(`${url}/invite/register`, {
                username,
                email,
                password
            });
            toast.success("Usuário registrado com sucesso!");
            setTimeout(() => {
                navigate("/");
            }, 1500)
            
        } catch (error) {
            console.log(error);
            toast.error("Erro ao registrar usuário!")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>REGISTRE-SE</h1>
            <button 
                onClick={goToLogin}
                className="cursor-pointer"
            >
                Já Possui uma Conta ?
            </button>
            <div className="flex flex-col items-center justify-center">
                <input 
                    type="text" 
                    placeholder="Crie um username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Crie sua Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleRegister}
                    className="cursor-pointer"
                >
                    REGISTRE-SE
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}