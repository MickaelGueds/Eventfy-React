import React, { useState } from 'react';
import styles from './FeedbackForm.module.css'; // Estilos CSS modularizados
import StarRating from './StarRating'; // Importação do componente de classificação por estrelas

const categories = {
  'Desenvolvimento Pessoal e Carreira': [
    'Gestão de Tempo e Produtividade Pessoal',
    'Como se Preparar para Entrevistas de Emprego no Setor de Tecnologia',
    'Técnicas de Comunicação Eficaz no Ambiente de Trabalho',
  ],
  'Tecnologia e Inovação': [
    'Inteligência Artificial e Machine Learning para Iniciantes',
    'Blockchain e Criptomoedas: O Futuro das Transações Digitais',
    'Desenvolvimento de Aplicações Web com React',
  ],
  'Sustentabilidade e Responsabilidade Social': [
    'Educação Ambiental: Tecnologias para Monitoramento e Preservação do Meio Ambiente',
    'A Importância da Inclusão Digital e Acessibilidade',
    'Inovações em Energias Renováveis e Sustentabilidade',
  ],
  'Cultura e Expressão Artística': [
    'Festival de Cinema Independente e Arte Experimental',
    'Workshop de Arte Urbana: Grafite e Street Art',
    'Encontro de Literatura e Performance Poética',
  ],
};

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [feedbackReceived, setFeedbackReceived] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedEvent(''); // Reset event when category changes
  };

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para enviar o feedback para um servidor, por exemplo
    console.log('Feedback enviado:', { rating, comment, selectedCategory, selectedEvent });
    setFeedbackReceived(true);
    console.log('Feedback enviado'); // Adicionado console log
    // Limpar o formulário
    setRating(0);
    setComment('');
    setSelectedCategory('');
    setSelectedEvent('');
  };

  return (
    <div className={styles.feedbackForm}>
      <h2>Deixe seu feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.selectContainer}>
          <label>Categoria:</label>
          <select value={selectedCategory} onChange={handleCategoryChange} className={styles.select}>
            <option value="">Selecione uma categoria</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        {selectedCategory && (
          <div className={styles.selectContainer}>
            <label>Evento:</label>
            <select value={selectedEvent} onChange={handleEventChange} className={styles.select}>
              <option value="">Selecione um evento</option>
              {categories[selectedCategory].map((event, index) => (
                <option key={index} value={event}>{event}</option>
              ))}
            </select>
          </div>
        )}
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
        <div className={styles.comment}>
          <label>Comentário:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Digite seu comentário aqui..."
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>Enviar Feedback</button>
      </form>
      {feedbackReceived && <p className={styles.feedbackMessage}>Feedback recebido!</p>}
    </div>
  );
};

export default FeedbackForm;
