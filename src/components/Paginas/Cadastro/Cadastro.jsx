import { useState } from 'react';
import { FaUser, FaPhone, FaIdCard, FaMapMarkerAlt, FaCity, FaHome, FaHashtag, FaLock } from "react-icons/fa";
import axios from 'axios';
import styles from './Cadastro.module.css';
import { AnimationBackground } from "../../AnimationLogin/AnimationBackground";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            username,
            telefone,
            usercpf,
            usercep,
            estado,
            cidade,
            userrua,
            numero,
            useremail,
            password
        };

        console.log('Sending user data:', userData);

        axios.post('http://localhost:5001/cadastro', userData)
            .then(response => {
                console.log(response.data);
                alert('Usuário cadastrado com sucesso!');
                navigate('/login'); // Redireciona para a página de login após o cadastro bem-sucedido
            })
            .catch(error => {
                console.error("Houve um erro ao cadastrar o usuário!", error);
                alert('Houve um erro ao cadastrar o usuário!');
            });
    };

    return (
        <div>
            <div className="backgroundAnimation">
                <AnimationBackground />
            </div>

            <div className={styles.App}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro<img src="src/assets/eventify.ico" alt="icone" width={100} height={90} /></h1>

                        <div className={styles.inputField}>
                            <input type="text" placeholder='Nome Completo' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <FaUser className={styles.icon} />
                        </div>

                        <div className={styles.inputField}>
                            <input type="text" placeholder='Telefone' minLength={9} maxLength={19} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            <FaPhone className={styles.icon} />
                        </div>

                        <div className={styles.inputField}>
                            <input type="text" placeholder='CPF' minLength={11} maxLength={14} value={usercpf} onChange={(e) => setUsercpf(e.target.value)} />
                            <FaIdCard className={styles.icon} />
                        </div>

                        <div className={styles.inputField}>
                            <input type="text" placeholder='CEP' minLength={8} maxLength={8} value={usercep} onChange={(e) => setUsercep(e.target.value)} />
                            <FaMapMarkerAlt className={styles.icon} />
                        </div>

                        <div className={styles.selectField}>
                            <select value={estado} className={styles.mostlyCustomizedScrollbar} onChange={(e) => setEstado(e.target.value)}>
                                <option value="" disabled>Estado</option>
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
                            <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                            <FaCity className={styles.icon} />
                        </div>

                        <div className={styles.inputField}>
                            <input type="text" placeholder='Rua' value={userrua} onChange={(e) => setUserrua(e.target.value)} />
                            <FaHome className={styles.icon} />
                        </div>

                        <div className={styles.inputField}>
                            <input type="text" placeholder='Número' value={numero} onChange={(e) => setNumero(e.target.value)} />
                            <FaHashtag className={styles.icon} />
                        </div>

                        <div className={styles.inputField}>
                            <input type="email" placeholder='E-mail' value={useremail} onChange={(e) => setUseremail(e.target.value)} />
                            <FaUser className={styles.icon} />
                        </div>

                        <div className={styles.inputField}>
                            <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <FaLock className={styles.icon} />
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
