import React, { useState } from 'react';
import './event.css';

const CreateEvent = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [location, setLocation] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [category, setCategory] = useState('');
const [image, setImage] = useState(null);
const [imagePreview, setImagePreview] = useState(null);
const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
        title,
        description,
        location,
        date,
        time,
        category,
        image,
    };
    console.log(eventData);
    
    window.location.reload();
};

const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
};

const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
};

return (
    <form className="create-event-form" onSubmit={handleSubmit}>
    <div className="form-group">
        <label>Título:</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </div>
    <div className="form-group">
        <label>Descrição:</label>
        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
    </div>
    <div className="form-group">
        <label>Localização:</label>
        <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
    </div>
    <div className="form-group">
        <label>Data:</label>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
    </div>
    <div className="form-group">
        <label>Horário:</label>
        <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        />
    </div>
    <div className="form-group">
        <label>Categoria:</label>
        <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        />
    </div>
    <div className="form-group">
        <label>Imagem:</label>
        <label htmlFor="file-upload" className="custom-file-upload">
            Escolher Imagem
        </label>
        <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }} // Esconde o input de arquivo
        />
        {imagePreview && (
        <div className="image-preview-container">
            <img src={imagePreview} alt="Pré-visualização" className="image-preview" />
            <button type="button" className="remove-image-button" onClick={handleRemoveImage}>
            Remover Imagem
            </button>
        </div>
        )}
    </div>
    <button className="submit-button" type="submit">Criar Evento</button>
    </form>
);
};

export default CreateEvent;