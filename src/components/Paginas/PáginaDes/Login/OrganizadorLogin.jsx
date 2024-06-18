import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import styles from './OrganizadorLogin.module.css';
import { AnimationBackground } from "../../../AnimationLogin/AnimationBackground";
import { useNavigate } from "react-router-dom";

const OrganizadorLogin = () => {
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/OrgLogin', {
                useremail,
                password
            });

            if (response.status === 200) {
                alert("Login bem-sucedido!");
                navigate('/Principal'); 
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
        <div className={styles.organizadorApp}>
            <div className={styles.backgroundAnimation}>
                <AnimationBackground />
            </div>

            <div className={styles.organizadorContainer}>
                <form onSubmit={handleSubmit}>
                    <h1>Login de Organizador<img src="src/assets/eventify.ico" alt="icone" width={100} height={90} /></h1>

                    <div className={styles.organizadorInputField}>
                        <input type="email" placeholder='E-mail'
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)} />
                        <FaUser className={styles.organizadorIcon} />
                    </div>
                    <div className={styles.organizadorInputField}>
                        <input type="password" placeholder='Senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className={styles.organizadorIcon} />
                    </div>

                    <button type="submit">Entrar</button>

                    {errorMessage && <p className={styles.organizadorError}>{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default OrganizadorLogin;
