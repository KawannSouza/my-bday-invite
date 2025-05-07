import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate("/register")
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
                <input type="email" placeholder="Digite seu Email"/>
                <input type="password" placeholder="Digite sua Senha"/>
                <button
                    className="cursor-pointer"
                >
                    ENTRAR
                </button>
            </div>
        </div>
    )
}