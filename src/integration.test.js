// integration.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AnnouncementProvider } from './AnnouncementContext';
import AddAnnouncementForm from './AddAnnouncementForm';
import AnnouncementList from './AnnouncementList';

test('addAnnouncementForm adds announcement to list', () => {
  const { getByLabelText, getByText } = render(
    <AnnouncementProvider>
      <div>
        <AddAnnouncementForm />
        <AnnouncementList />
      </div>
    </AnnouncementProvider>
  );

  fireEvent.change(getByLabelText('Title:'), { target: { value: 'New Announcement' } });
  fireEvent.change(getByLabelText('Description:'), { target: { value: 'Announcement Description' } });
  fireEvent.click(getByText('Add'));

  expect(getByText('New Announcement')).toBeInTheDocument();
  expect(getByText('Announcement Description')).toBeInTheDocument();
});
