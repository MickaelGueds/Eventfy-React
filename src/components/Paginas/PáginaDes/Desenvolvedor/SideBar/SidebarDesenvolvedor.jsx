import React from 'react';
import { FaTimes, FaHome, FaRegFileAlt, FaRegCalendarAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import SidebarItem from '../SidebarItem/SidebarItem';
import { Container, Content } from './SidebarDesenvolvedorStyles';

const SidebarDesenvolvedor = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" Path="/Home" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" Path="/calendario" />
        
      </Content>
    </Container>
  );
};

export default SidebarDesenvolvedor;
