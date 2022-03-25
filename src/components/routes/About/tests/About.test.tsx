import React from 'react';
import { render } from '@testing-library/react';

import About from '../About';

const testId = 'testingAbout';

type AboutProps = React.ComponentProps<typeof About>;

const renderComponent = (props: AboutProps = {}) => render(
  <About
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент About', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
