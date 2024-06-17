import { useState } from 'react';
import styles from './event.module.css';
import Header from '../../Header';

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
        <div>
            <Header/>
            <div className={styles.bodyEvento}>
                <form className={styles.formEvento} onSubmit={handleSubmit}>
                    <div>
                        <label className={styles.labelEvento}>Título:</label>
                        <input
                            type="text"
                            className={styles.inputEvento}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Descrição:</label>
                        <textarea
                            className={styles.textareaEvento}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Localização:</label>
                        <input
                            type="text"
                            className={styles.inputEvento}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Data:</label>
                        <input
                            type="date"
                            className={styles.inputEvento}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Horário:</label>
                        <input
                            type="time"
                            className={styles.inputEvento}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Categoria:</label>
                        <select
                            className={styles.selectEvento}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="Desenvolvimento Pessoal e Carreira">Desenvolvimento Pessoal e Carreira</option>
                            <option value="Tecnologia e Inovação">Tecnologia e Inovação</option>
                            <option value="Sustentabilidade e Responsabilidade Social">Sustentabilidade e Responsabilidade Social</option>
                            <option value="Cultura e Expressão Artística">Cultura e Expressão Artística</option>
                        </select>
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Imagem:</label>
                        <label htmlFor="file-upload" className={styles.customFileUploadEvento}>
                            Escolher Imagem
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }} 
                        />
                        {imagePreview && (
                            <div className={styles.imagePreviewContainerEvento}>
                                <img src={imagePreview} alt="Pré-visualização" className={styles.imagePreviewEvento} />
                                <button type="button" className={styles.removeImageButtonEvento} onClick={handleRemoveImage}>
                                    Remover Imagem
                                </button>
                            </div>
                        )}
                    </div>
                    <button className={styles.submitButtonEvento} type="submit">Criar Evento</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
