import { Route, Routes } from "react-router-dom" 
import Header from "./components/Header"
import GestaoDeParticipantes from "./components/Paginas/gestãoParticipante"
import Login from './components/Paginas/Login/Login'
import Calendar from "./components/Paginas/calendario/Calendar"


function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={ <Header/> }></Route>
            <Route path="/login" element={ <Login/> }></Route>
            <Route path="/Calendario" element={ <Calendar/> }></Route>
            <Route path="/GestaoDeParticipantes" element={ <GestaoDeParticipantes/> }></Route>
        </Routes>
    )
     
}

export default AppRoutes