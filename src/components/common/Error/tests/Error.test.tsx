import React from 'react';
import { render, screen } from '@testing-library/react';

import Error from '../Error';

const testId = 'testingError';

type ErrorProps = React.ComponentProps<typeof Error>;

const renderComponent = (props: ErrorProps) => render(<Error data-testid={testId} {...props} />);

describe('Компонент Error', () => {
  it('должен отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('должен отображается с сообщением', () => {
    renderComponent({ message: 'Error 404' });
    expect(screen.getByText('Error 404')).toBeInTheDocument();
  });
});
