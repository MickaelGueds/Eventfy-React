import { Route, Routes } from "react-router-dom";
import GestaoDeParticipantes from "./components/Paginas/gestao/gestãoParticipante";
import Login from './components/Paginas/Login/Login';
import Cadastro from "./components/Paginas/Cadastro/Cadastro";
import Calendar from "./components/Paginas/Calendario/Calendar";
import RelatoriosEAnalises from "./components/Paginas/Estatisticas/RelatoriosEAnalises";
import React from './components/eventos/tecno/React';
import IA from './components/eventos/tecno/IA';
import Blockchain from './components/eventos/tecno/Blockchain';
import Include from './components/eventos/Sust/Include';
import Renova from './components/eventos/Sust/Renova';
import Educa from './components/eventos/Sust/Educa';
import Comu from './components/eventos/Des/Comu';
import Entre from './components/eventos/Des/Entre';
import Gestao from './components/eventos/Des/gestao';
import CreateEvent from './components/Paginas/criar/criarEvento';
import Home from './components/Home/Home';
import Fest from './components/eventos/Cult/Fest';
import Lite from './components/eventos/Cult/Lite';
import Urban from './components/eventos/Cult/Urban';
import OrganizadorLogin from "./components/Paginas/PáginaDes/Login/OrganizadorLogin";
import Principal from './components/Paginas/PáginaDes/Desenvolvedor/Principal';
import EventPage from './components/Paginas/EventPage/EventPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/Principal" element={<Principal />} />
            <Route path="/OrgLogin" element={<OrganizadorLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/GestaoDeParticipantes" element={<GestaoDeParticipantes />} />
            <Route path="/estatisticas" element={<RelatoriosEAnalises />} />
            <Route path="/React" element={<React />} />
            <Route path="/IA" element={<IA />} />
            <Route path="/Blockchain" element={<Blockchain />} />
            <Route path="/Include" element={<Include />} />
            <Route path="/Renova" element={<Renova />} />
            <Route path="/Educa" element={<Educa />} />
            <Route path="/Comu" element={<Comu />} />
            <Route path="/Entre" element={<Entre />} />
            <Route path="/Gestao" element={<Gestao />} />
            <Route path="/criar" element={<CreateEvent />} />
            <Route path="/Fest" element={<Fest />} />
            <Route path="/Lite" element={<Lite />} />
            <Route path="/Urban" element={<Urban />} />
            <Route path="/evento/:nome_evento" element={<EventPage />} />
        </Routes>
    );
}

export default AppRoutes;
