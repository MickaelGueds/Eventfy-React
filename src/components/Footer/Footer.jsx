
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const shareUrl = 'http://localhost:5173'; // URL local
  const title = 'Olhe, o melhor site de eventos da região!';
  const instagramUrl = 'https://www.instagram.com/guibbsssmode'; // Substitua pelo link do seu perfil no Instagram

  return (
    <footer style={styles.footer}>
      <h3>Eventify, O melhor web-site de eventos da região</h3>
      <p>Se voce gostou do nosso site não se esqueça de compartilhar com seus amigos, clique abaixo e compartilhe nossos eventos</p>
      <div style={styles.shareButtons}>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={styles.instagramButton}>
          <FaInstagram size={32} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    background: 'black',
    marginTop: '20px',
  },
  shareButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '10px',
  },
  instagramButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    backgroundColor: '#E4405F',
    borderRadius: '50%',
    color: 'white',
  }
};

export default Footer;
