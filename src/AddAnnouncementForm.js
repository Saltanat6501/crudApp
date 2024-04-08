import React, { useState } from 'react';
import { useAnnouncementContext } from './AnnouncementContext';
import './AddAnnouncementForm.css'; 

const AddAnnouncementForm = () => {
  const { addAnnouncement } = useAnnouncementContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Проверка на пустые поля
    if (!title.trim() || !description.trim()) return;
    
    // Создание нового объявления
    const newAnnouncement = {
      id: Math.random().toString(36).substr(2, 9), // Генерация случайного id
      title,
      description
    };

    // Добавление нового объявления
    addAnnouncement(newAnnouncement);

    // Очистка полей формы
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Добавить объявление</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Заголовок:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddAnnouncementForm;
