// useAnnouncementContext.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { AnnouncementProvider, useAnnouncementContext } from './AnnouncementContext';

test('addAnnouncement adds new announcement to context', () => {
  const { result } = renderHook(() => useAnnouncementContext(), {
    wrapper: AnnouncementProvider
  });

  act(() => {
    result.current.addAnnouncement({ title: 'Test Announcement', description: 'Test Description' });
  });

  expect(result.current.announcements).toHaveLength(1);
  expect(result.current.announcements[0].title).toBe('Test Announcement');
});
