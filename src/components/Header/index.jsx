import React, { useState } from 'react'
import { Container, Title } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import styles from'./Header.module.css'


const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <h1 className={styles.titulo}>Eventify</h1>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header