import React from 'react';
import { useAnnouncementContext } from './AnnouncementContext';

const DeleteAnnouncementButton = ({ announcementId }) => {
  const { deleteAnnouncement } = useAnnouncementContext();

  const handleDelete = () => {
    deleteAnnouncement(announcementId);
  };

  return (
    <button onClick={handleDelete}>Удалить</button>
  );
};

export default DeleteAnnouncementButton;
