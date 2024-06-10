import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Header from "./components/Header"
import GestaoDeParticipantes from "./components/Paginas/gestãoParticipante"
import Login from './components/Paginas/Login/Login'


function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Header/> }></Route>
                <Route path="/login" element={ <AnimationBackground/> }></Route>
                <Route path="/GestaoDeParticipantes" element={ <GestaoDeParticipantes/> }></Route>

            </Routes>
        
        </BrowserRouter>
    )
     
}

export default AppRoutes