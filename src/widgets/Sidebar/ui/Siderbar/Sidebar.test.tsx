import { screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componnetRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Button test', () => {
  test('renders button with correct text and handles click', () => {
    componnetRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
})