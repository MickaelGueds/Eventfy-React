import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaRegCalendarAlt,
  FaUser
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
        <SidebarItem Icon={FaHome} Text=" Home" Path="/Home" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" Path="/calendario"/>
        <SidebarItem Icon={FaUser} Text="Página de Desenvolvedor" Path="/OrgLogin" />
        
        
        
      </Content>
    </Container>
  )
}

export default Sidebar