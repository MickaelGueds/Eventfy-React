import { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import styles from'./Header.module.css'


const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <div className={styles.faBarsContainer}>
        <FaBars onClick={showSiderbar} />
      </div>
      {sidebar && <Sidebar active={setSidebar} />}
      <h1 className={styles.titulo}>Eventify</h1>
    </Container>
  )
}

export default Header