import {FaUser, FaPhone, FaIdCard, FaMapMarkerAlt, FaCity, FaHome, FaHashtag, FaLock } from "react-icons/fa";

import { useState } from "react";

import styles from './Cadastro.module.css';
import { AnimationBackground } from "../../AnimationLogin/AnimationBackground";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Cadastro = () => {

    const [username, setUsername] = useState("");
    const [telefone, setTelefone] = useState("");
    const [usercpf, setUsercpf] = useState("");
    const [usercep, setUsercep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [userrua, setUserrua] = useState("");
    const [numero, setNumero] = useState("");
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Envio");
    };

  return (
    <div>
        <div className="backgroundAnimation" >
            <AnimationBackground/>
        </div>

        <div className={styles.App}>
            

        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro<img src="src/assets/eventify.ico" alt="icone" width={100} height={90}/></h1>

                <div className={styles.inputField}>
                    <input type="nome" placeholder='Nome Completo' onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="telefone" placeholder='Telefone' minLength={9} maxLength={19} onChange={(e) => setTelefone(e.target.value)} />
                    <FaPhone className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="cpf" placeholder='CPF' minLength={11} maxLength={14} onChange={(e) => setUsercpf(e.target.value)} />
                    <FaIdCard className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="cep" placeholder='CEP' minLength={8} maxLength={8} onChange={(e) => setUsercep(e.target.value)} />
                    <FaMapMarkerAlt className={styles.icon} />
                </div>

                <div className={styles.selectField}>
                    <select className={styles.mostlyCustomizedScrollbar}>
                        <option selected>Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                    <IoIosArrowDropdownCircle className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="cidade" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
                    <FaCity className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="rua" placeholder='Rua' onChange={(e) => setUserrua(e.target.value)}/>
                    <FaHome className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="numero" placeholder='Número' onChange={(e) => setNumero(e.target.value)}/>
                    <FaHashtag className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="email" placeholder='E-mail' onChange={(e) => setUseremail(e.target.value)}/>
                    <FaUser className={styles.icon} />
                </div>

                <div className={styles.inputField}>
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className={styles.icon} />
                </div>

                <NavLink to="/">
                <button>Cadastrar</button>
                </NavLink>
            </form>
        </div>
        </div>

    </div>
  )
}

export default Cadastro
