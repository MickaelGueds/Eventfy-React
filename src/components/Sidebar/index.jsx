import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text=" Home" Path="/" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" Path="/estatisticas"/>
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" Path="/calendario"/>
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Gestão de Participante" Path="/GestaoDeParticipantes" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar