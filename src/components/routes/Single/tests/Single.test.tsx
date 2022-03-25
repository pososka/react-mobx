import React from 'react';
import { render } from '@testing-library/react';

import Single from '../Single';

const testId = 'testingSingle';

const renderComponent = () => render(<Single data-testid={testId} />);

describe('Компонент Single', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
