import { useState } from 'react';
import { Container } from './HeaderDesenvolvedorStyles';
import { FaBars } from 'react-icons/fa';
import SidebarDesenvolvedor from '../SideBar/SidebarDesenvolvedor';
import styles from './HeaderDesenvolvedor.module.css';

const HeaderDesenvolvedor = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <div className={styles.faBarsContainer}>
        <FaBars onClick={showSidebar} />
      </div>
      {sidebar && <SidebarDesenvolvedor active={setSidebar} />}
      <h1 className={styles.titulo}>Eventify</h1>
    </Container>
  );
}

export default HeaderDesenvolvedor;
