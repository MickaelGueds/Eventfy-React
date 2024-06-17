import { Route, Routes } from "react-router-dom" 
import GestaoDeParticipantes from "./components/Paginas/gestao/gestãoParticipante"
import Login from './components/Paginas/Login/Login'
import Cadastro from "./components/Paginas/Cadastro/Cadastro"
import Calendar from "./components/Paginas/Calendario/Calendar"
import RelatoriosEAnalises from "./components/Paginas/Estatisticas/RelatoriosEAnalises"
import React from '../src/components/eventos/tecno/React'
import IA from '../src/components/eventos/tecno/IA'
import Blockchain from '../src/components/eventos/tecno/Blockchain'
import Include from '../src/components/eventos/Sust/Include'
import Renova from '../src/components/eventos/Sust/Renova'
import Educa from '../src/components/eventos/Sust/Educa'
import Comu from '../src/components/eventos/Des/Comu'
import Entre from '../src/components/eventos/Des/Entre'
import Gestao from './components/eventos/Des/gestao'
import CreateEvent from '../src/components/Paginas/criar/criarEvento'
import Home from '../src/components/home/Home'
import Fest from '../src/components/eventos/Cult/Fest'
import Lite from '../src/components/eventos/Cult/Lite'
import Urban from '../src/components/eventos/Cult/Urban'




function AppRoutes(){
    return (
        <Routes>
            <Route path="/home" element={ <Home/> }></Route>
            <Route path="/Login" element={ <Login/> }></Route>
            <Route path="/calendario" element={ <Calendar/> }></Route>
            <Route path="/cadastro" element= { <Cadastro/> }></Route>
            <Route path="/GestaoDeParticipantes" element={ <GestaoDeParticipantes/> }></Route>
            <Route path="/estatisticas" element={ <RelatoriosEAnalises />}></Route>
            <Route path="/React" element = {<React/>}></Route>
            <Route path="/IA" element = {<IA/>}></Route>
            <Route path="/Blockchain" element = {<Blockchain/>}></Route>
            <Route path="/Include" element = {<Include/>}></Route>
            <Route path="/Renova" element = {<Renova/>}></Route>
            <Route path="/Educa" element = {<Educa/>}></Route>
            <Route path="/Comu" element = {<Comu/>}></Route>
            <Route path="/Entre" element = {<Entre/>}></Route>
            <Route path="/Gestao" element = {<Gestao/>}></Route>
            <Route path = "/criar" element = {<CreateEvent/>}></Route>
            <Route path = "/Fest" element = {<Fest/>}></Route>
            <Route path = "/Lite" element = {<Lite/>}></Route>
            <Route path = "/Urban" element = {<Urban/>}></Route>

        </Routes>
    )
    
}

export default AppRoutes