import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Table from '../Table';

describe('Компонент Table', () => {
  beforeEach(() => {
    render(
      <Table
        headings={['Name', 'Age']}
        data={[
          ['Devid', '11'],
          ['Anna', '7'],
          ['Sara', '20'],
        ]}
      />,
    );
  });

  afterEach(cleanup);

  it('должен отображать все переданные данные', () => {
    expect(screen.getByText(/Devid/i)).toBeInTheDocument();
    expect(screen.getByText(/Anna/i)).toBeInTheDocument();
    expect(screen.getByText(/Sara/i)).toBeInTheDocument();

    expect(screen.getByText(/11/i)).toBeInTheDocument();
    expect(screen.getByText(/7/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
  });

  it('должен сортировать при нажатии на заголовок', () => {
    userEvent.click(screen.getByText(/Name/i));

    expect(
      screen
        .getAllByText(/(Devid|Anna|Sara)/)
        .map((element) => element.textContent)
        .join(' '),
    ).toStrictEqual('Anna Devid Sara');
  });
});
