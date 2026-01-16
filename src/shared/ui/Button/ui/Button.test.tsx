import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides matchers like toBeInTheDocument
import { Button } from './Button';

describe('Button test', () => {
  test('renders button with correct text and handles click', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});