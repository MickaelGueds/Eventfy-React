import { Route, Routes } from "react-router-dom" 
import Header from "./components/Header"
import GestaoDeParticipantes from "./components/Paginas/gestao/gestãoParticipante"
import Login from './components/Paginas/Login/Login'
import Cadastro from "./components/Paginas/Cadastro/Cadastro"
import Calendar from "./components/Paginas/Calendario/Calendar"
import RelatoriosEAnalises from "./components/Paginas/Estatisticas/RelatoriosEAnalises"


function AppRoutes(){
    return (
        <Routes>
            <Route path="/home" element={ <Header/> }></Route>
            <Route path="/" element={ <Login/> }></Route>
            <Route path="/calendario" element={ <Calendar/> }></Route>
            <Route path="/cadastro" element= { <Cadastro/> }></Route>
            <Route path="/GestaoDeParticipantes" element={ <GestaoDeParticipantes/> }></Route>
            <Route path="/estatisticas" element={ <RelatoriosEAnalises />}></Route>
        </Routes>
    )
     
}

export default AppRoutes