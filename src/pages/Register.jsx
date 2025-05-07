import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/")
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
                <input type="text" placeholder="Crie um username"/>
                <input type="email" placeholder="Digite seu email"/>
                <input type="password" placeholder="Crie sua Senha"/>
                <button
                    className="cursor-pointer"
                >
                    REGISTRE-SE
                </button>
            </div>
        </div>
    )
}