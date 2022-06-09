import { render, RenderResult } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';

export const renderWithProviders = (children: React.ReactNode): RenderResult =>
  render(<AppProviders>{children}</AppProviders>);
