import { Route, Routes } from "react-router-dom" 
import Header from "./components/Header"
import GestaoDeParticipantes from "./components/Paginas/gestãoParticipante"
import Login from './components/Paginas/Login/Login'
import Calendar from "./components/Paginas/calendario/Calendar"
import Cadastro from "./components/Paginas/Cadastro/Cadastro"


function AppRoutes(){
    return (
        <Routes>
            <Route path="/home" element={ <Header/> }></Route>
            <Route path="/login" element={ <Login/> }></Route>
            <Route path="/cadastro" element= { <Cadastro/> }></Route>
            <Route path="/Calendario" element={ <Calendar/> }></Route>
            <Route path="/GestaoDeParticipantes" element={ <GestaoDeParticipantes/> }></Route>
        </Routes>
    )
     
}

export default AppRoutes