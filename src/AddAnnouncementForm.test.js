// AddAnnouncementForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddAnnouncementForm from './AddAnnouncementForm';

test('submitting form adds new announcement', () => {
  const addAnnouncement = jest.fn();
  const { getByLabelText, getByText } = render(<AddAnnouncementForm />);
  
  fireEvent.change(getByLabelText('Title:'), { target: { value: 'New Announcement' } });
  fireEvent.change(getByLabelText('Description:'), { target: { value: 'Announcement Description' } });
  fireEvent.click(getByText('Add'));
  
  expect(addAnnouncement).toHaveBeenCalledWith(expect.objectContaining({
    title: 'New Announcement',
    description: 'Announcement Description'
  }));
});
