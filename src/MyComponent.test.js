import { render, screen } from '@testing-library/react';
import AddAnnouncementForm from './src/AddAnnouncementForm'; // Подставьте свой компонент

test('Компонент отображается корректно', () => {
    render(<AddAnnouncementForm />);
    const element = screen.getByText('Привет, мир!'); // Пример проверки текста
    expect(element).toBeInTheDocument();
  });
  