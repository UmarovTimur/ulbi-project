import { screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Button test', () => {
    test('renders button with correct text and handles click', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
})