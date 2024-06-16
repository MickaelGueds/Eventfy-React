import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import styles from './Login.module.css';
import { AnimationBackground } from "../../AnimationLogin/AnimationBackground";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/login', {
                useremail,
                password
            });

            if (response.status === 200) {
                alert("Login bem-sucedido!");
                navigate('/home');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage("Email ou senha inválidos");
            } else {
                setErrorMessage("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
            }
        }
    };

    return (
        <div className={styles.App}>
            <div className={styles.backgroundAnimation}>
                <AnimationBackground />
            </div>

            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h1>Login<img src="src/assets/eventify.ico" alt="icone" width={100} height={90} /></h1>

                    <div className={styles.inputField}>
                        <input type="email" placeholder='E-mail'
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)} />
                        <FaUser className={styles.icon} />
                    </div>
                    <div className={styles.inputField}>
                        <input type="password" placeholder='Senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className={styles.icon} />
                    </div>

                    <div className={styles.recallForget}>
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <button type="submit">Entrar</button>

                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}

                    <div className={styles.signupLink}>
                        <p>Não tem uma conta? <NavLink to="/cadastro">Cadastrar</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
