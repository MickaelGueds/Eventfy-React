import { Route, Routes } from "react-router-dom" 
import Header from "./components/Header"
import GestaoDeParticipantes from "./components/Paginas/gestãoParticipante"
import Login from './components/Paginas/Login/Login'
import Cadastro from "./components/Paginas/Cadastro/Cadastro"
import Calendar from "./components/Paginas/Calendario/Calendar"
import RelatoriosEAnalises from "./components/Paginas/Estatisticas/RelatoriosEAnalises"
import React from '../src/components/Evento/Tecno/React'
import IA from '../src/components/Evento/Tecno/IA'
import Blockchain from '../src/components/Evento/Tecno/Blockchain'
import Include from '../src/components/Evento/Sust/Include'
import Renova from '../src/components/Evento/Sust/Renova'
import Educa from '../src/components/Evento/Sust/Educa'
import Comu from '../src/components/Evento/Des/Comu'
import Entre from '../src/components/Evento/Des/Entre'
import Gestao from './components/Evento/Des/gestao'
import CreateEventForm from "./components/Paginas/CriacaoDeEventos/CreateEvent"


function AppRoutes(){
    return (
        <Routes>
            <Route path="/home" element={ <Header/> }></Route>
            <Route path="/" element={ <Login/> }></Route>
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
            <Route path="/Criar" element = {<CreateEventForm/>}></Route>            
        </Routes>
    )
     
}

export default AppRoutes