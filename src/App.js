// App.js
import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
import './App.css';
import { AnnouncementProvider } from './AnnouncementContext';
import AnnouncementList from './AnnouncementList';
import AddAnnouncementForm from './AddAnnouncementForm';



const App = () => {
  return (
    <AnnouncementProvider>
      <div>
        <AddAnnouncementForm />
        <AnnouncementList />
      </div>
    </AnnouncementProvider>
  );
};

export default App;
