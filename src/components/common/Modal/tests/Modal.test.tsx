import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '../Modal';

describe('Компонент Modal', () => {
  beforeEach(() => {
    render(<Modal title="Moon impact: Chinese rocket" />);
  });

  afterEach(cleanup);

  it('должен открывать модальное окно', async () => {
    userEvent.click(screen.getByRole('button'));

    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('должен отображать заголовок в модальном окне', async () => {
    userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText(/Moon impact/i)).toBeInTheDocument();
  });
});
