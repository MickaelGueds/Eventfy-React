import { Route, Routes } from "react-router-dom";
import GestaoDeParticipantes from "./components/Paginas/gestao/gestãoParticipante";
import Login from './components/Paginas/Login/Login';
import Cadastro from "./components/Paginas/Cadastro/Cadastro";
import Calendar from "./components/Paginas/Calendario/Calendar";
import RelatoriosEAnalises from "./components/Paginas/Estatisticas/RelatoriosEAnalises";
import React from '../src/components/eventos/tecno/React';
import IA from '../src/components/eventos/tecno/IA';
import Blockchain from '../src/components/eventos/tecno/Blockchain';
import Include from '../src/components/eventos/Sust/Include';
import Renova from '../src/components/eventos/Sust/Renova';
import Educa from '../src/components/eventos/Sust/Educa';
import Comu from '../src/components/eventos/Des/Comu';
import Entre from '../src/components/eventos/Des/Entre';
import Gestao from './components/eventos/Des/gestao';
import CreateEvent from '../src/components/Paginas/criar/criarEvento';
import Home from '../src/components/Home/Home';
import Fest from '../src/components/eventos/Cult/Fest';
import Lite from '../src/components/eventos/Cult/Lite';
import Urban from '../src/components/eventos/Cult/Urban';
import OrganizadorLogin from "./components/Paginas/PáginaDes/Login/OrganizadorLogin";
import Principal from '../src/components/Paginas/PáginaDes/Desenvolvedor/Principal';

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
        </Routes>
    );
}

export default AppRoutes;
