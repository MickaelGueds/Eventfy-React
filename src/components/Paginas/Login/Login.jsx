import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import styles from './Login.module.css';
import { AnimationBackground } from "../../AnimationLogin/AnimationBackground";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviado os dados:" + username + "-" + password);
    };  

  return (
    <div className={styles.App}>
        <div className={styles.backgroundAnimation} >
            <AnimationBackground/>
        </div>

        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                
                <h1>Login<img src="src/assets/eventify.ico" alt="icone" width={100} height={90}/></h1>
                
                <div className={styles.inputField}>
                    <input type="email" placeholder='E-mail' 
                    onChange={(e) => setUsername(e.target.value)}  />
                    <FaUser className={styles.icon}/>
                </div>
                <div className={styles.inputField}>
                    <input type="password" placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className={styles.icon} />
                </div>

            <div className={styles.recallForget}>
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
                <NavLink to="/home">
                    <button>Entrar</button>
                </NavLink>

                <div className={styles.signupLink}>
                    <p>Não tem uma conta? <NavLink to="/cadastro">Cadastrar</NavLink></p>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login
