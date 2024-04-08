import React, { useState } from 'react';
import { useAnnouncementContext } from './AnnouncementContext';
import './AnnouncementList.css';

const AnnouncementList = () => {
  const { announcements, deleteAnnouncement, updateAnnouncement } = useAnnouncementContext();
  const [editId, setEditId] = useState(null); // State to track the announcement being edited
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEdit = (announcementId) => {
    const announcementToEdit = announcements.find((announcement) => announcement.id === announcementId);
    if (announcementToEdit) {
      setEditId(announcementId);
      setEditTitle(announcementToEdit.title);
      setEditDescription(announcementToEdit.description);
    }
  };

  const handleSaveEdit = () => {
    if (editId !== null) {
      updateAnnouncement(editId, { title: editTitle, description: editDescription });
      setEditId(null);
      setEditTitle('');
      setEditDescription('');
    }
  };

  return (
    <div>
      <h2>Список объявлений</h2>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            {editId === announcement.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Сохранить</button>
              </div>
            ) : (
              <div>
                <div>{announcement.title}</div>
                <div>{announcement.description}</div>
                <button onClick={() => handleEdit(announcement.id)}>Редактировать</button>
                <button onClick={() => deleteAnnouncement(announcement.id)}>Удалить</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementList;
