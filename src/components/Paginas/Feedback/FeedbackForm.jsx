import React, { useState } from 'react';
import './FeedbackForm.css'; // Estilos CSS para o formulário
import StarRating from './StarRating'; // Importação do componente de classificação por estrelas

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para enviar o feedback para um servidor, por exemplo
    console.log('Feedback enviado:', { rating, comment });
    // Limpar o formulário
    setRating(0);
    setComment('');
  };

  return (
    <div className="feedback-form">
      <h2>Deixe seu feedback</h2>
      <form onSubmit={handleSubmit}>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
        <div className="comment">
          <label>Comentário:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Digite seu comentário aqui..."
            required
          />
        </div>
        <button type="submit">Enviar Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
