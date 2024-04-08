// reducers/announcementReducer.js
import { ADD_ANNOUNCEMENT, DELETE_ANNOUNCEMENT } from '../actions/announcementActions';

const initialState = {
  announcements: []
};

const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANNOUNCEMENT:
      return {
        ...state,
        announcements: [...state.announcements, action.payload]
      };
    case DELETE_ANNOUNCEMENT:
      return {
        ...state,
        announcements: state.announcements.filter(announcement => announcement.id !== action.payload)
      };
    default:
      return state;
  }
};

export default announcementReducer;
