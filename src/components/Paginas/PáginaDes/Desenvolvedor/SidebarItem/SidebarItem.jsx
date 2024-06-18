import React from 'react';
import { Container } from './SidebarItemStyles';
import { Link } from 'react-router-dom';
import styles from './SidebarItem.module.css';

const SidebarItem = ({ Icon, Text, Path }) => {
  return (
    <Container>
      <Link to={Path} className={styles.link}>
        <Icon />
        {Text}
      </Link>
    </Container>
  );
};

export default SidebarItem;
