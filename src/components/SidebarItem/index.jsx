import React from 'react'
import { Container } from './styles'
import {Link} from 'react-router-dom'
import './SidebarItem.css';

const SidebarItem = ({ Icon, Text,Path }) => {
  return (
    <Container>
      <Link to={Path} className="link">
      <Icon />
      {Text}
      </Link>
    </Container>
  )
}

export default SidebarItem