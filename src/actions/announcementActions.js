// actions/announcementActions.js
export const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT';
export const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';

export const addAnnouncement = (announcement) => ({
  type: ADD_ANNOUNCEMENT,
  payload: announcement
});

export const deleteAnnouncement = (announcementId) => ({
  type: DELETE_ANNOUNCEMENT,
  payload: announcementId
});
